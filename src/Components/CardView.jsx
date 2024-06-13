
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const CardView = ({ book }) => {
    const {  _id, author_name, book_name, category, photoURL, rating } = book;

    return (
        <div className="card w-96 bg-gray-400 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt="Shoes" className="rounded-xl h-[100px]" />
            </figure>
            <div className="card-body items-center justify-center">
                <h2 className="card-title">Book : {book_name}</h2>
                <h2 className="card-title"> Written by {author_name}</h2>
                <h2 className="card-title">Category :{category}</h2>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                <div className="card-actions ">
                    <Link to={`/updateDetails/${_id}`} className="btn btn-primary">Update Book</Link>
                </div>
            </div>
        </div>
    );
};

export default CardView;