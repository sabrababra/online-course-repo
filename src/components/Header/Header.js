import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/icon.png'
import logo2 from '../../assets/icon/logo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext)
    //console.log(user);
    return (
        <div className="w-11/12 mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='my-1' to='/home'>Home</Link></li>
                        <li><Link className='my-1' to='/course'>Courses</Link></li>
                        <li><Link className='my-1' to='/blogs'>Blogs</Link></li>
                        <li><Link className='my-1' to='/faq'>FAQ</Link></li>
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost"><img className=' w-10 ' src={logo2} alt='' /> <img className=' w-24' src={logo} alt='' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='mx-1' to='/home'>Home</Link></li>
                    <li><Link className='mx-1' to='/course'>Courses</Link></li>
                    <li><Link className='mx-1' to='/blogs'>Blogs</Link></li>
                    <li><Link className='mx-1' to='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.uid ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt=''/>
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li className='text-xs mb-1'>{user?.displayName}</li>
                                <li className='text-xs mb-1'>{user?.email}</li>
                                <li><button onClick={()=>{providerLogOut()}}>Logout</button></li>
                            </ul>
                        </div>
                        : <Link to='/login' className="btn ">Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;