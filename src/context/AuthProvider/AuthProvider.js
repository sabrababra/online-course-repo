import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  updateProfile} from 'firebase/auth'
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

    

    const authInfo={user,createProviderWithEmail,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;