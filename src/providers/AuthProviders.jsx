import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext=createContext(null)
const AuthProviders = () => {
  const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const auth=getAuth(app)
    
    //registration with email & pass
    const signUpEmailPass=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //sign in with email & pass

    const signInEmailPass=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //sign out
    const userLogout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    //set observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
         return unsubscribe
        }
    },[])
    const authInfo={
        user,
        loading,
        signUpEmailPass,
        signInEmailPass,
        userLogout,
        
    }
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders