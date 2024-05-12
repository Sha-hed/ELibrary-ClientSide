import { Link, useLoaderData } from "react-router-dom";
import moment from 'moment';
import { useState } from "react";
import PopUp from "./PopUp";
import BorrowPage from "./BorrowPage";
const BookDetails = () => {

    const [openPopup, setOpenPopup] = useState(false)

    const book = useLoaderData();
    const { sd, _id, author_name, book_name, category, email, photoURL, quantity, rating } = book;
    console.log(_id, email, quantity);
    return (
        <>
            <PopUp
            openPopup ={openPopup}
            setOpenPopup={setOpenPopup}
            >
                <BorrowPage
                openPopup ={openPopup}
                setOpenPopup={setOpenPopup}
                book={book}
                ></BorrowPage>
            </PopUp>
            <div className="max-w-6xl mx-auto flex justify-center items-center gap-5 my-10">
                <div className="w-1/3">
                    <img src={photoURL} alt="" />
                </div>
                <div className="w-2/3 space-y-3">
                    <h1 className="text-2xl font-semibold">Category : {category}</h1>
                    <h1 className="text-2xl font-semibold">Book Name : {book_name}</h1>
                    <h1 className="text-2xl font-semibold">Author Name : {author_name}</h1>
                    <h1 className="text-2xl font-semibold">Book Rating : {rating}</h1>
                    <h1>Current Time : {moment().format('L')}</h1>
                    <p> <span className="text-2xl font-semibold">Description</span> : {sd}</p>
                    <div className="flex justify-center items-center my-3">
                        <Link onClick={()=>{
                            setOpenPopup(true)

                            }} className="w-1/2 btn btn-success text-white text-xl font-bold">Borrow Book</Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BookDetails;

