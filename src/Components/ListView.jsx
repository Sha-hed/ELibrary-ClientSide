import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const ListView = ({ book }) => {

const axiosSecure = useAxiosSecure()
const handleDeleteBook =async (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          console.log('id paiso boiyer ? ', id);
         const { data} = await axiosSecure.delete(`/deleteBook/${id}`)
         console.log(data);
         if(data.deletedCount>0){
            Swal.fire({
                text: "Book is deleted successfully",
                icon: "success"
              });
         }
        }
      });
}


    const { user } = useAuth();
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={book.photoURL} />
                    </div>
                </div>
            </td>
            <td className='font-bold text-lg'>{book.book_name}</td>
            <td className='font-bold text-lg'>{book.author_name}</td>
            <td className='font-bold text-lg'>{book.category}</td>
            <td className='font-bold text-lg'>{book.sd}</td>
            <td className='font-bold text-lg border'>
                {/* <Link to={`/updateDetails/${book._id}`} className='btn btn-primary'>
                    Update Book
                </Link> */}
                {
                    user && user?.email === 'admin@gmail.com' ? <div className="flex flex-col-reverse w-full">
                        <button onClick={()=>handleDeleteBook(book?._id)} className='btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800' to={`/updateDetails/${book?._id}`}>Delete Book</button>
                        <Link className='btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800' to={`/updateDetails/${book?._id}`}>Update Book</Link>
                        <Link className='btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800' to={`/bookDetails/${book?._id}`}>View Details</Link></div> :
                        <div className="w-full">
                            {/* <Link className=' text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm  py-2.5 mb-2' to={`/bookDetails/${book?._id}`}>View Details</Link> */}
                            <Link to={`/bookDetails/${book?._id}`} className="btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800">View Details</Link>
                        </div>
                }
            </td>
        </tr>
    );
};

export default ListView;