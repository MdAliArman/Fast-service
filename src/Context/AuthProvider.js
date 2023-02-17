import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Fairbase/firebase';

export const AuthContext=createContext();
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [users, setUsers]=useState([])
   const [loader, setLoader]=useState(true)

    const createUser=(email, password)=>{
      setLoader(true)
      return createUserWithEmailAndPassword(auth, email, password)
    };
    const login=(email, password)=>{
      setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logOut=()=>{
      setLoader(true)
      return signOut(auth)
    }

  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, currenUser=>{
        console.log(currenUser);
        setUsers(currenUser);
        setLoader(false)
    });
    return ()=>{
        return unSubscribe()
    }
  },[])

const info={
    users,
    createUser,
    login,
    logOut,
    loader
}

    return (
        <AuthContext.Provider value={info}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;