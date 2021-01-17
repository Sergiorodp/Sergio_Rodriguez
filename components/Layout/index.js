import Head from 'next/head'
import styles from '../../styles/Home.module.css'

//  Components
import Nav from '../../components/nav/index'

export default function Layout({ children,tittle,navRef }){
    return(
        <div className={styles.container}>
            <Head>
                <title>Sergio Rodriguez | Desarrollador</title>
                <link rel="icon" href="/minilogo.ico" />
                
            </Head>
  
            <main className={styles.main}>
                <nav className = {styles.navigationContainer}><Nav/></nav>
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