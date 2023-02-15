import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const {users,logOut}=useContext(AuthContext);
    const signOut=()=>{
        logOut()
        .then(result=>{})
        .catch(err=>console.log(err))
    }
    return (
        <div className="navbar bg-base-100 my-4 shadow-gray-600 drop-shadow-xl" >
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">Fast Service</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><Link to="/">Home</Link></li>
                    <li className='font-bold'><Link to="/service">Service</Link></li>
                   {
                    users?.email?
                   <>
                    <button onClick={signOut}><li className='font-bold'><Link to="/">LogOut</Link></li></button>
                   </>
                    :
                    <li className='font-bold'><Link to="/login">LogIn</Link></li>
                   }
                </ul>
            </div>
        </div>
    );
};

export default Header;