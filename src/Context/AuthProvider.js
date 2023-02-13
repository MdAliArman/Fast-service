import React, { createContext, useState} from 'react';
import {getAuth} from 'firebase/app'
import app from '../Fairbase/firebase';

export const AuthContext=createContext();
const auth= getAuth(app)
const AuthProvider = ({childen}) => {
    const [users, setUsers]=useState([])





const info={
    users,
}

    return (
        <AuthContext.Provider value={info}>
            {childen}
        </AuthContext.Provider>
    );
};

export default AuthProvider;