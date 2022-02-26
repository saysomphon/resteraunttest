import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router=useRouter();

  useEffect(()=>{
    router.push("/order")
  },[])

  return (
    <div className={styles.container}>
     
    </div>
  )
}

export default Home
