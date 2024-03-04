'use client'
import styles from '../../../styles/subscription.module.css';
import {setEmail,setPassword, registerUser} from '../lib/features/AuthSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Subscription(){

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);
  const router = useRouter()

  const handleRegister = () => {
    dispatch(registerUser());
    if(email!=''&& password!=''){
      setTimeout(() => {
        router.push('/connexion');
      }, 3000);
    }
    // Rediriger vers la page de connexion ou afficher un message de succès
  };

  //   if(email!=''&& password!=''){
  //   setTimeout(() => {
  //     router.push('/connexion');
  //   }, 3000);
  // }

  return (
    <div className='py-60'>
    <form className={styles.form}>
    <p className={styles.heading}>SUBSCRIBE</p>
    <input placeholder="Username" className={styles.input} type="text"/>
    <input placeholder="Email" className={styles.input} type="email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
    <input placeholder="Password" className={styles.input} type="password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
    <button className={styles.btn} onClick={handleRegister}>Submit</button>
    </form>
    </div>
    )
}
