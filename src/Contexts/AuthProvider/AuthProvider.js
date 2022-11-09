import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // update profile
    const profile = (name, photo)=>{
        return updateProfile (auth.currentUser, {displayName: name, photoURL: photo})
    }

    //create email and password authentication for signup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }

    }, [])

    // signIn with email and pass for login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google SignIn
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // sign out
    const logOut = () => {
        localStorage.removeItem('genius-token');
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleSignIn,
        logOut,
        profile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;