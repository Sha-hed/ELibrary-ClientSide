
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAuth from "../Hooks/useAuth";


const CardView = ({ book }) => {
    const { user } = useAuth();
    const { _id, author_name, book_name, category, photoURL, rating } = book;

    return (
        <div className="flex flex-col card w-80 bg-gray-100 border-2 mx-auto">
            <div className="flex justify-around pt-5">
                <h1 className="uppercase font-bold underline ">{category}</h1>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
            </div>
            <div className="flex-start">
                <figure className="m-3">
                    <img src={photoURL} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{book_name}</h2>
                <h2 className="card-title"> Written by {author_name}</h2>
                <div className="card-actions mt-5 flex justify-center">
                    {/* <Link to={`/updateDetails/${_id}`} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Book</Link> */}
                    {
                        user && user?.email === 'admin@gmail.com' ? <div className="flex flex-row-reverse">
                            <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to={`/updateDetails/${_id}`}>Update Book</Link>
                            <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to={`/bookDetails/${_id}`}>View Details</Link></div> :
                            <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' to={`/bookDetails/${_id}`}>View Details</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default CardView;