import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 shadow-md h-24 ">
            <div className="navbar-start">
                <Link className="btn btn-ghost text-xl">Doctor's Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow absolute  right-0">
                        {menuItems}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;