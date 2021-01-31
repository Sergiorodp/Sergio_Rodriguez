import Head from 'next/head'
import styles from '../../styles/Home.module.css'

//  Components
import Nav from '../../components/nav/index'
import Lateral from '../../components/LateralBar/index'
import { createRef } from 'react'

const back = createRef()

export function Blur({inScreen}){
    if(inScreen){
        back.current.classList.add(styles.backNav)
    }else{
        try{
            back.current.classList.remove(styles.backNav)
        }catch{
            console.log('nonblur')
        }
    }
}

export default function Layout({ children,tittle,navRef }){

    return(
        <div className={styles.container} >
            <Head>
                <title>Sergio Rodriguez | Desarrollador</title>
                <link rel="icon" href="/minilogo.ico" />
                
            </Head>
            <main className={styles.main}>
                <nav className = {styles.navigationContainer} ref = {back}><Nav/></nav>
                <Lateral/>
                <div className = {styles.contextContainer}>
                    {children}
                </div>
            </main>

            {/* 
      <footer className={styles.footer}>
        <p> Powered by Sergio Rodriguez</p>
      </footer> */}

        </div>
    )
}