import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/ABCD_prev_ui.png';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';
import useBorrow from '../Hooks/useBorrow';
const Navbar = () => {

    const { user, logout } = useAuth()
    const [theme, setTheme] = useState("fantasy")
    const [isBorrow, refetch] = useBorrow();
    const [open, setOpen] = useState(true)
    refetch();
    const links = <>
        <li className='font-semibold' ><NavLink to='/'>Home</NavLink></li>
        <li className='font-semibold' ><NavLink to='/allBooks'>AllBooks</NavLink></li>
        {
            user && isBorrow && <li className='font-semibold' ><NavLink to='/borrowedBook'>BorrowedBooks</NavLink></li>
        }
        {
            user && user?.email === 'admin@gmail.com' && <li className='font-semibold' ><NavLink to='/addBook'>AddBook</NavLink></li>
        }
    </>

    const handleLogOut = () => {
        logout()
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }

    const handleTheme = e => {
        console.log(e.target.checked);
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("fantasy")
        }
    }
    const handleOff = () => {
        setOpen(!open)
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="navbar bg-gray-100 px-1 lg:px-32">
            <div className="navbar-start">
                <div onClick={handleOff} className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className={`${open ? 'hidden' :' '} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
                        {links}
                        {
                            user ? <button onClick={handleLogOut} className='mt-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>LogOut</button>
                                : <Link to='/login' className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</Link>
                        }
                    </ul>
                </div>
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <a className="btn btn-ghost text-xl hidden lg:flex">ELibrary</a>
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
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-3" title={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className='hidden lg:flex text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>LogOut</button>
                        </> : <Link to='/login' className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</Link>
                }
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleTheme} type="checkbox" className="theme-controller -mt-2" value="synthwave" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>

            </div>
        </div>
    );
};

export default Navbar;