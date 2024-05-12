import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddBook = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const book_name = data.Name
        const photoURL = data.image
        const author_name = data.Author_Name;
        const category = data.Category;
        const rating = parseInt(data.Rating);
        const quantity = parseInt(data.Quantity);
        const sd = data.sd;
        const email = user.email;
        const bookInfo = {
            book_name, photoURL, author_name, category, rating, quantity, sd, email
        }
        axios.post('http://localhost:5000/add',bookInfo)
        .then(data=>{
            if(data.data.insertedId){
                Swal.fire({
                    title: "Book is added Successfully",
                    icon: "success"
                  });
            }
            console.log(data.data)})
    };
    console.log(errors)
    return (
        <div className='max-w-4xl mx-auto bg-gray-100 p-2 shadow-xl my-10 py-10 px-5'>
            <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-5 w-full'>
                    <div className='w-1/2 space-y-2'>
                        <label className='font-medium text-xl' htmlFor="">Book Name</label><br />
                        <input className='w-full p-2 outline-none border rounded-lg text-xl' type="text" placeholder="Name" {...register("Name", { required: true })} />
                    </div>
                    <div className='w-1/2 space-y-2'>
                        <label className='font-medium text-xl' htmlFor="">Book Image</label><br />
                        <input className='w-full p-2 outline-none border rounded-lg text-xl' type="text" placeholder="image" {...register("image", { required: true })} />
                    </div>
                </div>
                <div className='flex gap-5 w-full'>
                    <div className='w-1/2 space-y-2'>
                        <label className='font-medium text-xl' htmlFor="">Author Name</label><br />
                        <input className='w-full p-2 outline-none border rounded-lg text-xl' type="text" placeholder="Author Name" {...register("Author_Name", { required: true })} />
                    </div>
                    <div className='w-1/2 space-y-2'>
                        <label className='font-medium text-xl' htmlFor="">Select Book Category</label><br />
                        <select className='w-full p-2 outline-none border rounded-lg text-xl' {...register("Category", { required: true })}>
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
                        <input className='w-full p-2 outline-none border rounded-lg text-xl' type="number" placeholder="Rating" {...register("Rating", { required: true })} />
                    </div>
                    <div className='w-1/2 space-y-2'>
                        <label className='font-medium text-xl' htmlFor=""> Quantity of the book</label><br />
                        <input className='w-full p-2 outline-none border rounded-lg text-xl' type="number" placeholder="Quantity" {...register("Quantity", { required: true })} />
                    </div>
                </div>
                <div className='w-full'>
                    <label className='font-medium text-xl' htmlFor="">Short Description</label><br />
                    <input className='w-full p-2 outline-none border rounded-lg text-xl h-[100px]' type="text" placeholder="Short Description" {...register("sd", { required: true })} /> <br />
                </div>
                <input className='btn btn-success w-full' type="submit" />
            </form>
        </div>

    );
}

export default AddBook;