"use client";
// import React, { useState } from 'react';
import styles from "../../../styles/subscription.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserEmail,
  setUserPassword,
  loginUser,
} from "../lib/features/AuthSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Connexion() {
  const dispatch = useDispatch();
  const { isLoggedIn, userEmail, userPassword } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();

  const handleLogin = () => {
    dispatch(loginUser());

    // Rediriger vers la page de connexion ou afficher un message de succès
  };
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/favoris"); 
      console.log(isLoggedIn);
    }
    else {
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  // const handleLogin = () => {
  // //    const isLoggedIn = state.users.some((user) => user.email === email && user.password === password);
  //     if (isLoggedIn) {
  //         dispatch(loginUserSuccess());
  //         console.log('vous etes inscrit!!!')
  //         // Rediriger vers la page d'accueil ou afficher un message de bienvenue
  //     } else {
  //         dispatch(loginUserFailure('Informations identification incorrectes'));
  //     }
  // };

  // useEffect(()=>{
  //     if(isLoggedIn){
  //       router.push('/favoris');
  //     }
  //   },[isLoggedIn])
  console.log(userEmail);
  console.log(userPassword);
  return (
    <div className="flex items-center h-screen">
      <form className={styles.form}>
        {/* {errorMessage && <p>{errorMessage}</p>} */}
        <p className={styles.heading}>LOGIN</p>
        <input
          placeholder="Email"
          className={styles.input}
          type="text"
          value={userEmail}
          onChange={(e) => dispatch(setUserEmail(e.target.value))}
        />
        <input
          placeholder="Password"
          className={styles.input}
          value={userPassword}
          type="password"
          onChange={(e) => dispatch(setUserPassword(e.target.value))}
        />
        <button className={styles.btn} onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Connexion;
