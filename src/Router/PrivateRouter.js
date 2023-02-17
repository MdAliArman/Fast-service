import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {users,loader}=useContext(AuthContext);
    const location=useLocation();
    
    if(loader){
        <h2 className="text-5xl">Loading......</h2>
    }

    if(users){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRouter;