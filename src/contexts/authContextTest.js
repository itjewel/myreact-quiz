import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import '../firebase';
const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState("");

    const signup = async (email, password, username) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password, username);
        await updateProfile(auth.currentUser, { displayName: username });
        const user = auth.currentUser;
        setCurrentUser({ ...user })

    }
    const login = async (email, password) => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)

    }
    const logout = async () => {
        const auth = getAuth();
        await signOut(auth)
    }
    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider vlaue={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}