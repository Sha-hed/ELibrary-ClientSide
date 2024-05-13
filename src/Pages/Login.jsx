import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import yaa from '../assets/images/Login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState(null);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2200,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const location = useLocation();
    const go = location.state || '/';
    const navigate = useNavigate()
    const { login, google } = useAuth();

    const { register, handleSubmit, resetField, formState: { errors } } = useForm({

    });

    const onSubmit = data => {
        const email = data.Email;
        const password = data.Password;
        setError('');
        // resetField("Email")
        // resetField("Password")
        // const user = { email, password };
        // console.log(user);
        login(email, password)
            .then(result => {
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                setTimeout(() => {
                    navigate(go)
                }, 2500)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
                console.log(error.messaged)})
    }
    const googleLogin = () => {
        google()
            .then(result => {
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                setTimeout(() => {
                    navigate(go)
                }, 2500)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message)})
    }
    return (
        <div className="max-w-6xl mx-auto my-10 p-2">
            <h1 className='text-center font-bold text-2xl underline mb-5'>Login Now</h1>
            <div className=' flex justify-between'>
                <div className='w-1/2'>
                    <img src={yaa} alt="" />
                </div>
                <div className='w-1/2'>

                    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <label className='font-bold text-xl mb-3' htmlFor="">Email</label><br />
                        <input type="email" placeholder="Email"
                            className='p-3 w-full border'
                            {...register("Email", {})} />
                        <label className='font-bold text-xl mb-3' htmlFor="">Password</label><br />
                        <input type="password"
                            className='p-3 w-full border'
                            placeholder="Password"
                            {...register("Password", { required: true })} />

                        <input className='btn btn-info w-full' type="submit" value='Login' />
                    </form>
                    {
                        error && <p className="text-center text-xl mt-1 font-bold text-red-600">{error}</p>
                    }
                    <button onClick={googleLogin} className='btn btn-info w-full my-3'><FcGoogle className="text-2xl" />Login With Google</button>
                    <p className='text-xl font-semibold gap-0 text-center'>New to this Website ? Please <Link className=' text-xl btn btn-link' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;