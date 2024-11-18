import React from 'react'
import {auth,provider} from '../config/firebase'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
import { useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async() => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }
    }

    const signInWithGoogle = async() => {
        try{
            await signInWithPopup(auth, provider)
        }catch(err){
            console.log(err)
        }
    }

    const logOut = async() => {
        try{
            await signOut(auth)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='password' onChange={(e) => setPassword(e.target.value)} type='password'/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default Auth