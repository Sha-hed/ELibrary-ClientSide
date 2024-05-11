import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {

    const book = useLoaderData();
    const { sd, _id, author_name, book_name, category, email, photoURL, quantity, rating } = book;
    return (
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-5">
            <div className="w-1/3">
                <img src={photoURL} alt="" />
            </div>
            <div className="w-2/3 space-y-3">
                <h1 className="text-2xl font-semibold">Category : {category}</h1>
                <h1 className="text-2xl font-semibold">Book Name : {book_name}</h1>
                <h1 className="text-2xl font-semibold">Author Name : {author_name}</h1>
                <h1 className="text-2xl font-semibold">Book Rating : {rating}</h1>
                <p> <span className="text-2xl font-semibold">Description</span> : {sd}</p>
                <div className="flex justify-center items-center my-3">
                    <Link className="w-1/2 btn btn-success text-white text-xl font-bold">Borrow Book</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;