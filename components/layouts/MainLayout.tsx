import Head from 'next/head';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

//Este componenete reutiliza todo lo que se ha 
//igual en cada una de las pantallas

//Para usar Layout con typeScripts
//primero debe crear un nuevo tipo para sus 
//páginas que incluya una función getLayout.
import React, {ReactNode} from "react"

interface Props{
  children?: ReactNode
}
export const MainLayout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Kevin</title>
        <meta name="description" content="Home next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content='app, ventas'/>
      </Head>

      <NavBar/>

      <main className={styles.main}>
        { children }
      </main>

    </div>
  )
}
