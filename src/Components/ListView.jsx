import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const ListView = ({ book }) => {
    const { user } = useAuth();
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={book.photoURL} />
                    </div>
                </div>
            </td>
            <td className='font-bold text-lg'>{book.book_name}</td>
            <td className='font-bold text-lg'>{book.author_name}</td>
            <td className='font-bold text-lg'>{book.category}</td>
            <td className='font-bold text-lg'>{book.sd}</td>
            <td className='font-bold text-lg'>
                {/* <Link to={`/updateDetails/${book._id}`} className='btn btn-primary'>
                    Update Book
                </Link> */}
                {
                    user && user?.email === 'admin@gmail.com' ? <div className="flex flex-col">
                        <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to={`/updateDetails/${book?._id}`}>Update Book</Link>
                        <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to={`/bookDetails/${book?._id}`}>View Details</Link></div> :
                        <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to={`/bookDetails/${book?._id}`}>View Details</Link>
                }
            </td>
        </tr>
    );
};

export default ListView;