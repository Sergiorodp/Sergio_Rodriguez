import Head from 'next/head'
import styles from '../../styles/Home.module.css'

//  Components
import Nav from '../../components/nav/index'
import Lateral from '../../components/LateralBar/index'
import { createRef } from 'react'

const back = createRef()

export default function Layout({ children,tittle,navRef }){

    return(
        <div className={styles.container} >
            <Head>
                <title>Sergio Rodriguez | Desarrollador</title>
                <link rel="icon" href="/minilogo.ico" />
                
            </Head>

            <nav className = {styles.navigationContainer} ref = {back}>
                <Nav/>
            </nav>
            <Lateral/>

            <main className={styles.main}>
                <div className = {styles.contextContainer}>
                    {children}
                </div>
            </main>

            
            <footer className={styles.footer} id = "Contact">
                <h3>Let´s talk</h3>
                <form>

                </form>
                <p> aquí van las redes</p>
            </footer>

        </div>
    )
}

export function Blur({inScreen}){
    if(inScreen){

        back.current ? 
        back.current.classList.add(styles.backNav) 
        : console.log('omg')

    }else{
        try{
            back.current.classList.remove(styles.backNav)
        }catch{
            console.log('nonblur')
        }
    }
}