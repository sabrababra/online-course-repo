import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword,  updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
export const AuthContext=createContext();
const auth= getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createProviderWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    

    const authInfo={user,createProviderWithEmail,updateUserProfile,signInWithEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;