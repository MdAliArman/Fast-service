import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 my-4">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">Fast Service</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><Link to="/">Home</Link></li>
                    <li className='font-bold'><Link to="/service">Service</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;