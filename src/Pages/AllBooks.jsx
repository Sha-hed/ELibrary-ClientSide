import axios from "axios";
import { useEffect, useState } from "react";
import CardView from "../Components/CardView";
import ListView from "../Components/ListView";

const AllBooks = () => {


    const [grid, setGrid] = useState(true);
    const [list, setList] = useState(false);

    const handleGridClick = () => {
        setGrid(true)
        setList(false);
    }
    const handleListClick = () => {
        setGrid(false)
        setList(true);
    }

    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('https://assignment-11-server-side-red.vercel.app/books', { withCredentials: true })
            .then(data => {
                console.log(data.data);
                setBooks(data.data)
            })
    }, [])

    const buttonCalled = () => {
        // 
        axios.get('https://assignment-11-server-side-red.vercel.app/quan')
            .then(data => {
                console.log(data.data);
                setBooks(data.data)
            })
    }

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex justify-evenly my-5">
                <button onClick={buttonCalled} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Show Available Books</button>
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center me-2 mb-2">View By</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={handleGridClick}><a>Grid View</a></li>
                            <li onClick={handleListClick}><a>List View</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                grid && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        books?.map(book => <CardView book={book} key={book._id}></CardView>)
                    }
                </div>)
            }
            {
                list && (<div>
                    <div className="overflow-x-auto">
                        <table className="table collapse">
                            {/* head */}
                            <thead className="bg-gray-200 text-center">
                                <tr>
                                    <th className='font-bold text-red-600 text-xl'>Image</th>
                                    <th className='font-bold text-red-600 text-xl'>BookName</th>
                                    <th className='font-bold text-red-600 text-xl'>AuthorName</th>
                                    <th className='font-bold text-red-600 text-xl'>Category</th>
                                    <th className='font-bold text-red-600 text-xl'>Description</th>
                                    <th className='font-bold text-red-600 text-xl'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books?.map(book => <ListView key={book._id} book={book}></ListView>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllBooks;