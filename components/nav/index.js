import styles from './styles'
import { createRef } from 'react'

import LogoSergio from '../logo'


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
            <div className = "logo">
                <LogoSergio width = {60} height = {60}/>
                </div>

            <div className = 'options-container'><ul className = "list-container">
            <li ref = {General} className = "nav-list-item">
                <a href="#General" titte = "General"><span>General</span></a>
            </li>
            <li ref = {AboutMe} className = "nav-list-item">
                <a href="#AboutMe" titte = "About Me"><span>About Me</span></a>
            </li>
            <li ref = {Proyects} className = "nav-list-item">
                <a href="#Proyects" titte = "proyects"><span>Proyects</span></a>    
            </li>
            <li ref = {Contact} className = "nav-list-item">
                <a  href="#Contact" titte = "Contact"><span>Contact</span></a>
            </li>
            </ul></div>
            <div className = "footer">powered by <p>Sergio</p></div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}