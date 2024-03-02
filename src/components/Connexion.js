'use client';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from '@/app/lib/features/ConnexionSlice';
import styles from '../../styles/subscription.module.css'


function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleLogin = () => {
        if (email === 'm' && password === 'p') {
            dispatch(login());


        } else {
            alert('Email or password is incorrect');
        }
    };

    return (
        <div className='flex items-center h-screen'>

            <form className={styles.form}>
                <p className={styles.heading}>LOGIN</p>
                <input placeholder="Username" className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Password" className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                <button className={styles.btn} onClick={handleLogin}>Login</button>
            </form>
            {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button> */}
        </div>
    );
}

export default Connexion