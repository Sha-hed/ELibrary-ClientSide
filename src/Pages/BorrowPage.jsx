import moment from 'moment';
import useAuth from "../Hooks/useAuth";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const BorrowPage = ({ openPopup, setOpenPopup, book }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const handleBorrow = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const date = e.target.date.value;
        const borBook = {
            book,
            borrowed_date: moment().format('L'),
            return_date: date,
            bor_name: name,
            bor_email: email
        }
        axios.post('https://assignment-11-server-side-red.vercel.app/bor', borBook)
            .then(data => {
                if (data.data.insertedId) {
                    setOpenPopup(false)
                    // Swal.fire({
                    //     title: "You Borrowed this book Successfully",
                    //     icon: "success"
                    //   });
                    // setTimeout(()=>{
                    // navigate('/borrowedBook')
                    // },2500)
                    Swal.fire({
                        title: "You Borrowed this book Successfully",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Okay"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/borrowedBook')
                            // Swal.fire({
                            //     title: "Deleted!",
                            //     text: "Your file has been deleted.",
                            //     icon: "success"
                            // });
                        }
                    });
                }
                fetch('https://assignment-11-server-side-red.vercel.app/dec', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(book)

                })
                    .then(res => res.json())
                    .then(data => console.log(data));

                console.log(data.data)
            });
    }

    return (
        <div className="max-w-lg bg-gray-100 my-5 p-5">
            <form onSubmit={handleBorrow}>
                <label className='font-medium text-xl'>Name</label> <br />
                <input defaultValue={user?.displayName} readOnly className='w-full p-2 outline-none border rounded-lg text-xl my-2' type="text" name="name" id="" /> <br />
                <label className='font-medium text-xl'>Email</label> <br />
                <input defaultValue={user?.email} readOnly className='w-full p-2 outline-none border rounded-lg text-xl my-2' type="email" name="email" id="" /> <br />
                <label className='font-medium text-xl' >Return Date</label> <br />
                <input name="date" className='w-full p-2 outline-none border rounded-lg text-xl my-2' type="date" id="" />
                <input className="btn btn-accent w-full" type="submit" value="Borrow" />
            </form>

        </div>
    );
};

export default BorrowPage;