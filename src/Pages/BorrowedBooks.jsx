import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useBorrow from '../Hooks/useBorrow';
import { useNavigate } from 'react-router-dom';

const BorrowedBooks = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const [books, setBooks] = useState(null);
    const [isBorrow, refetch] = useBorrow();
    const navigate = useNavigate();

    const url = `/borrowedBooks?email=${user?.email}`;
    // const url = `https://assignment-11-server-side-red.vercel.app/borrowedBooks?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(data => {
                console.log(data.data);
                setBooks(data.data)
            })
    }, [url, axiosSecure])
    const handleReturn = (book) => {
        const returnId = book._id;
        const allBookId = book.book._id;
        axios.delete(`https://assignment-11-server-side-red.vercel.app/returnBook/${returnId}`)
            .then(data => {
                const remaining = books.filter(b => b._id !== returnId);
                setBooks(remaining);
                Swal.fire("The book is returned");
                refetch();
                if (books.length === 1) {
                    navigate('/allBooks')
                }
                console.log('Books Length koto', books.length)
                console.log(data.data)
            })
        axios.patch(`https://assignment-11-server-side-red.vercel.app/returnQuantity/${allBookId}`)
            .then(data => { console.log(data.data) })
    }


    return (
        <div className='max-w-7xl mx-auto min-h-[calc(100vh-260px)]'>
            {
                books?.length ? (<div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-bold text-red-600 text-xl'>Image</th>
                                <th className='font-bold text-red-600 text-xl'>BookName</th>
                                <th className='font-bold text-red-600 text-xl'>Category</th>
                                <th className='font-bold text-red-600 text-xl'>Borrowed Date</th>
                                <th className='font-bold text-red-600 text-xl'>Return Date</th>
                                <th className='font-bold text-red-600 text-xl'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books?.map(book => <tr key={book._d}>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={book.book.photoURL} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold text-lg'>{book.book.book_name}</td>
                                    <td className='font-bold text-lg'>{book.book.category}</td>
                                    <td className='font-bold text-lg'>{book.borrowed_date}</td>
                                    <td className='font-bold text-lg'>{book.return_date}</td>
                                    <td onClick={() => handleReturn(book)} className='font-bold text-lg'><button className='w-1/2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Return Book</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>) : ''
            }
        </div>
    );
};

export default BorrowedBooks;