import {auth } from '../../firebase/firebase';
import React, { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null); // stores current user object
    const [userLoggedIn, setUserLoggedIn] = useState(false); // user logged in status
    const [loading, setLoading] = useState(true); // true while checking auth state

    /* Clean up listener on unmount - when component is removed from UI  */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , initialiseUser)
        return unsubscribe;
    }, []);

    async function initialiseUser(user) {
        if (user) { // valid user object
            setCurrentUser({...user});
            setUserLoggedIn(true);  
        } else { // no user object / user logged out
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false) // once auth complete
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}