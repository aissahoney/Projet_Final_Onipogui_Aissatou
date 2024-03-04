// 'use client'
// import React from 'react'
// import Connexion from '@/components/Connexion'

// export default function connexion() {
//   return (
//     <div>
// <Connexion/>
//     </div>
//   )
// }

'use client';
// import React, { useState } from 'react';
import styles from '../../../styles/subscription.module.css'
import { useDispatch, useSelector } from "react-redux";
import {loginUserSuccess,loginUserFailure , setEmail,setPassword} from '../lib/features/AuthSlice'



function Connexion() {

    const dispatch = useDispatch();
    const { email, password,isLoggedIn, errorMessage } = useSelector((state) => state.auth);

    const handleLogin = (state) => {
       const isLoggedIn = state.users.some((user) => user.email === email && user.password === password);
        if (isLoggedIn) {
            dispatch(loginUserSuccess());
            console.log('vous etes inscrit!!!')
            // Rediriger vers la page d'accueil ou afficher un message de bienvenue
        } else {
            dispatch(loginUserFailure('Informations identification incorrectes'));
        }
    };

    return (
        <div className='flex items-center h-screen'>
            <form className={styles.form}>
                {errorMessage && <p>{errorMessage}</p>}
                <p className={styles.heading}>LOGIN</p>
                <input placeholder="Email" className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Password" className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.btn} onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Connexion;
