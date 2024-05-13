import { useLoaderData } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


const UpdateBooks = () => {
    const book = useLoaderData();
    console.log(book);
    const { sd, _id,  author_name, book_name, category, email, photoURL, quantity, rating } = book;
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const book_name = data.Name
        const photoURL = data.image
        const author_name = data.Author_Name;
        const category = data.Category;
        const rating = parseInt(data.Rating);
        const bookInfo = {
            book_name, photoURL, author_name, category, rating}
        axios.patch(`http://localhost:5000/UpdateBooks/${_id}`, bookInfo)
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        title: "Book Information Updated Successfully",
                        icon: "success"
                    });
                }
                console.log(data.data)
            })
    };
    return (
        <div>
            <div className='max-w-4xl mx-auto bg-gray-100 p-2 shadow-xl my-10 py-10 px-5'>
                <h1 className="text-center text-green-600 font-bold text-2xl underline">Update Book Information</h1>
                <form className='space-y-3 my-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-5 w-full'>
                        <div className='w-1/2 space-y-2'>
                            <label className='font-medium text-xl' htmlFor="">Book Name</label><br />
                            <input defaultValue={book_name} className='w-full p-2 outline-none border rounded-lg text-xl' type="text" placeholder="Name" {...register("Name", { required: true })} />
                        </div>
                        <div className='w-1/2 space-y-2'>
                            <label className='font-medium text-xl' htmlFor="">Book Image</label><br />
                            <input defaultValue={photoURL} className='w-full p-2 outline-none border rounded-lg text-xl' type="text" placeholder="image" {...register("image", { required: true })} />
                        </div>
                    </div>
                    <div className='flex gap-5 w-full'>
                        <div className='w-1/2 space-y-2'>
                            <label className='font-medium text-xl' htmlFor="">Author Name</label><br />
                            <input defaultValue={author_name} className='w-full p-2 outline-none border rounded-lg text-xl' type="text" placeholder="Author Name" {...register("Author_Name", { required: true })} />
                        </div>
                        <div className='w-1/2 space-y-2'>
                            <label className='font-medium text-xl' htmlFor="">Select Book Category</label><br />
                            <select defaultValue={category} className='w-full p-2 outline-none border rounded-lg text-xl' {...register("Category", { required: true })}>
                                <option value="History">History</option>
                                <option value="Literature">Literature</option>
                                <option value="Business">Business</option>
                                <option value="Mysterious">Mysterious</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-5 w-full'>
                        <div className='w-1/2 space-y-2'>
                            <label className='font-medium text-xl' htmlFor="">Rating</label><br />
                            <input defaultValue={rating} className='w-full p-2 outline-none border rounded-lg text-xl' type="number" placeholder="Rating" {...register("Rating", { required: true })} />
                        </div>
                    </div>
                    <input className='btn btn-success w-full' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateBooks;