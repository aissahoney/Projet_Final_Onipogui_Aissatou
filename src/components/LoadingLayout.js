import React from 'react'
import styles from '../../styles/loading.module.css'

export default function LoadingLayout() {
  return (
    <div className='py-60 h-[100vh]'>
   
<div className={styles.spinner}>
  <div ></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div>

  )
}
