import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import useAuth from '../Hooks/useAuth';
const Navbar = () => {

    const { user, logout } = useAuth()

    const links = <>
        <li className='text-lg font-semibold' ><NavLink to='/'>Home</NavLink></li>
        {
            user && 
            <>
                <li className='text-lg font-semibold' ><NavLink to='/allBooks'>AllBooks</NavLink></li>
                <li className='text-lg font-semibold' ><NavLink to='/borrowedBook'>BorrowedBooks</NavLink></li>
                <li className='text-lg font-semibold' ><NavLink to='/addBook'>AddBook</NavLink></li>
            </>
        }
    </>

    const handleLogOut =()=>{
        logout()
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))
    }

    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <a className="btn btn-ghost text-xl">Books</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <>
                    <p className='mr-2'>{user.email}</p>
                    <button onClick={handleLogOut} className='btn btn-error'>LogOut</button>
                    </>: <Link to='/login' className="btn btn-accent">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;