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
    const {user} = useAuth();

    const [books, setBooks] = useState(null);

    const { sd, _id, author_name, book_name, category, photoURL, quantity, rating } = book;
    const [ quan, setQuan] = useState(quantity);


    useEffect(() => {
        axios.get(`http://localhost:5000/borrowedBooks?email=${user?.email}`)
            .then(data => {
                console.log(data.data);
                setBooks(data.data)
            })
    }, [user])
    // console.log(books);


    const handleBorrow = (id) =>{
        
        const ache = books.find(b=>b?.book?._id === id )
        if(books?.length>=3){
            return Swal.fire("You can not borrow more than 3 books");
        }
        else if(ache){
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
            <div className="max-w-6xl mx-auto flex justify-center items-center gap-5 my-10">
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
                        <button disabled={ quan === 0 } 
                        // onClick={() => {
                        //     handleBorrow
                        //     setOpenPopup(true)
                        // }}
                        onClick={()=>handleBorrow(_id)}
                        
                        className="w-1/2 btn btn-success text-white text-xl font-bold">Borrow Book</button>
                    </div>
            
                </div>
            </div>
        </>

    );
};

export default BookDetails;

