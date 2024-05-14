import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";


const Test = () => {
    const { user } = useAuth();
    const [books, setBooks] = useState(null);
    useEffect(() => {
        axios.get(`https://assignment-11-server-side-red.vercel.app/borrowedBooks?email=${user?.email}`)
            .then(data => {
                console.log(data.data)
                setBooks(data.data)
            })
            .catch(error => console.log(error.message))
    }, [user])
    return (
        <div>
            {/* <h1>We Have Total : {bal?.length}</h1> */}
            <h1>Our honurar bale user : {user?.email}</h1>
            <h2>HI SHahed</h2>
            <h2>Our Book Length :{books?.length}</h2>
        </div>
    );
};

export default Test;