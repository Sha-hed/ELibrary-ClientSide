
import { useLoaderData } from "react-router-dom";
import SpecificBookCard from "../Components/SpecificBookCard";

const SpecificCategory = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="w-1/5 text-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">All {books[0].category} Books</h1>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 my-5 gap-3">
                {
                    books.map(book => <SpecificBookCard book={book} key={book._id}></SpecificBookCard>)
                }
            </div>
        </>
    );
};

export default SpecificCategory;