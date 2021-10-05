import Head from 'next/head'
import styles from '../../styles/Home.module.css'

//  Components
import Nav from '../../components/nav/index'
import Lateral from '../../components/LateralBar/index'
import { createRef } from 'react'
import FormInput from 'components/formInput'
import MyButton from '../button'

// styles
import { colorsShy } from 'components/styleLayout/index'


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
                <div>
                    <h3>Let´s talk</h3>
                    <div className = {styles.buttonContainer}>
                        <MyButton 
                        background = {colorsShy.black} 
                        color = {colorsShy.white}>
                            <a href = '/assets/Sergio_Rodriguez_en_CV.pdf'> Open Resume </a>
                        </MyButton>
                    </div>
                </div>
                <form>
                    <FormInput
                    label = 'Full Name'
                    type = 'text'
                    />

                    <FormInput
                    label = 'Mail'
                    type = 'email'
                    />
                    <textarea placeholder = 'messaje'>

                    </textarea>
                </form>
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