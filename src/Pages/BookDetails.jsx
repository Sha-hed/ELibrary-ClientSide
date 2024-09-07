import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import PopUp from "./PopUp";
import BorrowPage from "./BorrowPage";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
const BookDetails = () => {

    const book = useLoaderData();
    console.log(book);
    const { user } = useAuth();

    const [books, setBooks] = useState(null);

    const { sd, _id, author_name, book_name, category, photoURL, quantity, rating } = book;
    const [quan, setQuan] = useState(quantity);


    useEffect(() => {
        axios.get(`https://assignment-11-server-side-red.vercel.app/borrowedBooks?email=${user?.email}`)
            .then(data => {
                console.log(data.data);
                setBooks(data.data)
            })
    }, [user])
    // console.log(books);


    const handleBorrow = (id) => {

        const ache = books.find(b => b?.book?._id === id)
        if (books?.length >= 3) {
            return Swal.fire("You can not borrow more than 3 books");
        }
        else if (ache) {
            return Swal.fire("You Have Already Borrowed this Book");
        }
        return setOpenPopup(true)

    }

    const [openPopup, setOpenPopup] = useState(false)
    return (
        <>
            <PopUp
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <BorrowPage
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    book={book}
                ></BorrowPage>
            </PopUp>
            <div>
                <h1 className="text-3xl font-bold text-center my-5 underline">{book_name}</h1>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-5 border p-3 mb-5">
                    <div className="w-[70%] md:w-1/3 mx-auto">
                        <img src={photoURL} alt="" />
                    </div>
                    <div className="w-full md:w-2/3 space-y-3 px-2">
                        <h1 className="text-lg font-semibold">Author Name : {author_name}</h1>
                        <h1 className="text-lg font-semibold">Category : {category}</h1>
                        <h1 className="text-lg font-semibold">Book Rating : {rating}</h1>
                        <p> <span className="text-2xl font-semibold">Description</span> : {sd}</p>
                        <div className="flex justify-center items-center my-3">
                            <button disabled={quan === 0}
                                onClick={() => handleBorrow(_id)}

                                className='w-1/2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2'>Borrow Book</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    );
};

export default BookDetails;

