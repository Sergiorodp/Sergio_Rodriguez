import styles from './styles'
import { createRef } from 'react'
import flagStyle from '../../styles/bandera/bandera.module.css'

import LogoSergio from '../logo'


const options = ["General", "About Me", "proyects", "Contact"] 

const General = createRef(), AboutMe = createRef(), Proyects = createRef(), Contact = createRef()

const references = [General,AboutMe,Proyects,Contact]

export function Selected({refNum = 0}){

    if (references[refNum].current){  
    
    references[refNum].current.classList.add('active')

    for (let i = 0; i < references.length ; i++){
        if(i !== refNum){
            references[i].current.classList.remove('active')
        }
    }
}

}

export default function Nav(){

    return(
        <>
        <div className = "main-nav-container">
            <div className = {flagStyle.logo}>
                <LogoSergio cl width = {45} height = {45} fill = {"#ffffff"} />
            </div>

            <div className = 'options-container'><ul className = "list-container">
            <li ref = {General} className = "nav-list-item">
                <a href="#Home" titte = "General"><span>Home</span></a>
            </li>
            <li ref = {AboutMe} className = "nav-list-item">
                <a href="#AboutMe" titte = "About Me"><span>About Me</span></a>
            </li>
            <li ref = {Proyects} className = "nav-list-item">
                <a href="#Proyects" titte = "proyects"><span>Proyects</span></a>    
            </li>
            <li ref = {Contact} className = "nav-list-item">
                <a  href="#More" titte = "Contact"><span>More</span></a>
            </li>
            </ul></div>
            <div className = "footer"><button>Contact</button></div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}