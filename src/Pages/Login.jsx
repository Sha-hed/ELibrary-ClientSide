
import { useForm } from 'react-hook-form';
import yaa from '../assets/images/Login.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({

    });
    console.log(errors.Email)
    const onSubmit = data => {
        const email = data.Email;
        const password = data.Password;
        resetField("Email")
        resetField("Password")
        const user = { email, password };
        console.log(user);
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

                        <input className='btn btn-primary w-full' type="submit" value='Login' />
                    </form>
                    <button className='btn btn-secondary w-full my-3'>Login With Google</button>
                    <p className='text-xl font-semibold gap-0 text-center'>New to this Website ? Please <Link className=' text-xl btn btn-link' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;