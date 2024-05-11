import Rating from "react-rating";
const SpecificBookCard = ({ book }) => {
    const { sd, author_name, book_name, category, email, photoURL, quantity, rating } = book;
    return (
        <div className="card w-96 bg-gray-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt="Shoes" className="rounded-xl h-[100px]" />
            </figure>
            <div className="card-body items-center justify-center">
                <h2 className="card-title">Book : {book_name}</h2>
                <h2 className="card-title"> Written by {author_name}</h2>
                <h2 className="card-title">Category :{category}</h2>
                <h2 className="flex items-center text-xl font-bold">Rating : <Rating
                    initialRating={rating}
                    readonly
                /></h2>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SpecificBookCard;