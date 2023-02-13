import React, { createContext, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Fairbase/firebase';

export const AuthContext=createContext();
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [users, setUsers]=useState([])
   const [loader, setLoader]=useState(true)

    const createUser=(email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    };
    const login=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }



const info={
    users,
    createUser,
    login
}

    return (
        <AuthContext.Provider value={info}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;