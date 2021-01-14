import styles from './styles'
import Link from 'next/link'
import { createRef } from 'react'


const options = ["General", "About Me", "proyects", "Contact"] 

const General = createRef(), AboutMe = createRef(), Proyects = createRef(), Contact = createRef()

const references = [General,AboutMe,Proyects,Contact]

export function Selected({refNum = 0}){

    references[refNum].current.classList.add('active')

    for (let i = 0; i < references.length ; i++){
        if(i !== refNum){
            references[i].current.classList.remove('active')
        }
    }

}

export default function Nav(){

    return(
        <>
        <div className = "main-nav-container">
            <div className = "logo"><p>Sergio</p><p>Rodriguez</p></div>
            <div className = 'options-container'><ul className = "list-container">
            <li ref = {General} className = "nav-list-item">
                <Link href="/"><a titte = "General"><span>General</span></a></Link>
            </li>
            <li ref = {AboutMe} className = "nav-list-item">
                <Link href="/"><a titte = "About Me"><span>About Me</span></a></Link>
            </li>
            <li ref = {Proyects} className = "nav-list-item">
                <Link href="/"><a titte = "proyects"><span>Proyects</span></a></Link>
            </li>
            <li ref = {Contact} className = "nav-list-item">
                <Link href="/"><a titte = "Contact"><span>Contact</span></a></Link>
            </li>
            </ul></div>
            <div className = "footer">powered by <p>Sergio</p></div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}