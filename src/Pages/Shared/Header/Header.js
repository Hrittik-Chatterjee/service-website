import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user && user?.uid ?
                                <div>
                                    <li><Link to={'/myreviews'}>My reviews</Link></li>
                                    <li> <Link to={'/addservices'}>Add Services</Link></li>
                                </div> : <div> </div>
                        }
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Dr Alexa Maria</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user && user?.uid ?
                            <div className='flex'>
                                <li><Link to={'/myreviews'}>My reviews</Link></li>
                                <li> <Link to={'/addservices'}>Add Services</Link></li>
                            </div> : <div> </div>
                    }
                </ul>
            </div>
            {
                user && user?.uid ?
                    <div className="navbar-end">
                        <Link to='/login' className="btn" onClick={handleLogOut}>Logout</Link>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to='/login' className="btn" >Login</Link>
                    </div>
            }
        </div>
    );
};

export default Header;