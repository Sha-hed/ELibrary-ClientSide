
import { useLoaderData } from "react-router-dom";
import SpecificBookCard from "../Components/SpecificBookCard";

const SpecificCategory = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 my-5 gap-3">
           {
            books.map(book=><SpecificBookCard book={book} key={book._id}></SpecificBookCard>)
           }
        </div>
    );
};

export default SpecificCategory;