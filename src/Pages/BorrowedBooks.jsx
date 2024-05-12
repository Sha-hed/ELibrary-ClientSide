// import { useEffect, useState } from 'react';
// import useAuth from '../Hooks/useAuth';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const BorrowedBooks = () => {

//     const { user } = useAuth();
//     const [books, setBooks] = useState(null);
//     useEffect(() => {
//         axios.get(`http://localhost:5000/borrowedBooks?email=${user?.email}`)
//             .then(data => {
//                 console.log(data.data);
//                 setBooks(data.data)
//             })
//     }, [])

//     const handleReturn = (book) => {
//         const returnId = book._id;
//         const allBookId = book.book._id;
//         axios.delete(`http://localhost:5000/returnBook/${returnId}`)
//             .then(data => {
//                 const remaining = books.filter(b => b._id !== returnId);
//                 setBooks(remaining);
//                 Swal.fire("The book is returned");
//                 console.log(data.data)
//             })
//         axios.patch(`http://localhost:5000/returnQuantity/${allBookId}`)
//             .then(data => { console.log(data.data) })
//     }
//     return (
//         <div className='max-w-7xl mx-auto'>

//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th className='font-bold text-red-600 text-xl'>Image</th>
//                             <th className='font-bold text-red-600 text-xl'>BookName</th>
//                             <th className='font-bold text-red-600 text-xl'>Category</th>
//                             <th className='font-bold text-red-600 text-xl'>Borrowed Date</th>
//                             <th className='font-bold text-red-600 text-xl'>Return Date</th>
//                             <th className='font-bold text-red-600 text-xl'>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             books?.map(book => <tr key={book._d}>
//                                 <td>
//                                     <div className="avatar">
//                                         <div className="w-24 rounded">
//                                             <img src={book.book.photoURL} />
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className='font-bold text-lg'>{book.book.book_name}</td>
//                                 <td className='font-bold text-lg'>{book.book.category}</td>
//                                 <td className='font-bold text-lg'>{book.borrowed_date}</td>
//                                 <td className='font-bold text-lg'>{book.return_date}</td>
//                                 <td onClick={() => handleReturn(book)} className='font-bold text-lg'><button className='btn btn-primary'>Return Book</button></td>
//                             </tr>)
//                         }
//                     </tbody>
//                 </table>
//             </div>

//         </div>


//     );
// };

// export default BorrowedBooks;