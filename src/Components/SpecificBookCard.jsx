// import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const SpecificBookCard = ({ book }) => {
    const {_id, author_name, book_name, category, photoURL, rating } = book;
    return (
        <div className="card w-full md:w-96 bg-orange-200 shadow-xl">
            <figure className="px-2 pt-2">
                <img src={photoURL} alt="Shoes" className="w-full rounded-xl h-[250px]" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-blue-500">{book_name}</h2>
                <h2 className="card-title"> Written by {author_name}</h2>
                <div className="flex gap-5">
                <h2 className="card-title">{category}</h2>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
                </div>
                <div className="card-actions flex items-center justify-center mt-3">
                    <Link to={`/bookDetails/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecificBookCard;