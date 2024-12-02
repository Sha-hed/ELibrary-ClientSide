// import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAuth from "../Hooks/useAuth";
const SpecificBookCard = ({ book }) => {
    const { _id, author_name, book_name, category, photoURL, rating } = book;
    const { user } = useAuth();
    return (
        <div className="card w-full md:w-96 border-2 shadow-xl">
            <div className="flex justify-between p-2">
                <h2 className="card-title underline">{category}</h2>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                />
            </div>
            <figure className="px-2 pt-2">
                <img src={photoURL} alt="Shoes" className="w-full rounded-xl h-[250px]" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-blue-500">{book_name}</h2>
                <h2 className="text-center"> Written by {author_name}</h2>
                {/* <div className="flex gap-5">
                    <h2 className="card-title">{category}</h2>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div> */}
                <div className="card-actions flex items-center justify-center mt-3">
                    <Link to={`/bookDetails/${_id}`} className='w-1/2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecificBookCard;