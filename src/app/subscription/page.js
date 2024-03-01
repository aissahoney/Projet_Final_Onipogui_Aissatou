'use client'
import React from 'react'
import styles from '../../../styles/subscription.module.css'

export default function Subscription(){
  return (
    <div className='py-60'>
    <form className={styles.form}>
    <p className={styles.heading}>SUBSCRIBE</p>
    <input placeholder="Username" className={styles.input} type="text"/>
    <input placeholder="Email" className={styles.input} type="text"/>
    <input placeholder="Password" className={styles.input} type="password"/>
    <button className={styles.btn}>Submit</button>
    </form>
    </div>
    )
}
