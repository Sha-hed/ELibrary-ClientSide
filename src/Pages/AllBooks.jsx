import axios from "axios";
import { useEffect, useState } from "react";

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/books')
        .then(data=>{
            console.log(data.data);
            setBooks(data.data)})
    },[])

    return (
        <div>
           <h1>We have Books {books.length}</h1> 
        </div>
    );
};

export default AllBooks;