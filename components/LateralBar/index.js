import styles from "./styles"
import Linkedin from '../brands/linkedin'
import Instagram from '../brands/insta'
import Twitter from '../brands/twitter'

const Brandsize = 25

export default function Lateral(){
    return(
        <>
    <section className = "main-lateral-container">
        <div className = "brand-container">
            <div className = "line"></div>
            <span><a href = 'https://www.linkedin.com/in/sergio-rodriguez-66585a203/' target="_blank" rel="noopener noreferrer"> <Linkedin width = {Brandsize} height = {Brandsize} fill = '#ffffff'/> </a></span>
            <span><a href = 'https://twitter.com/Sergio48151225' target="_blank" rel="noopener noreferrer"> <Twitter width = {Brandsize} height = {Brandsize} fill = '#ffffff'/> </a></span>
            <span><a href = 'https://www.instagram.com/sergioandrod_/' target="_blank" rel="noopener noreferrer"><Instagram width = {Brandsize} height = {Brandsize} fill = '#ffffff'/></a></span>
        </div>
    </section>
    <style jsx>{styles}</style>
    </>)
}