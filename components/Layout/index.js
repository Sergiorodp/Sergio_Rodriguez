import Head from 'next/head'
import styles from '../../styles/Home.module.css'

//  Components
import Nav from '../../components/nav/index'
import Info from '../../components/aboutMe/index'

export default function Layout({ children,tittle,navRef }){
    return(
        <div className={styles.container}>
            <Head>
                <title>Sergio Rodriguez | Desarrollador</title>
                <link rel="icon" href="/logoTrans.png" />
                
            </Head>
  
            <main className={styles.main}>
                <nav className = {styles.navigationContainer}><Nav/></nav>
                <div className = {styles.contextContainer}>{children}</div>
                <div className = {styles.infoContainer}><Info/></div>
            </main>

            {/* 
      <footer className={styles.footer}>
        <p> Powered by Sergio Rodriguez</p>
      </footer> */}

        </div>
    )
}