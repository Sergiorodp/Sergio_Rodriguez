import styles from './styles'

import Linkedin from '../brands/linkedin'
import Instagram from '../brands/insta'
import Twitter from '../brands/twitter'

import Photo from '../../styles/images/photo.module.css'
import { colorsShy } from '../styleLayout'

const sizeBrand = 27

export default function Card(){
    
    return(
        <>
        <div className = "card-main-container">
            <div className = {Photo.photo}>
                <div className = "button-container">
                    <div className = "main-info-container">
                        <div className = "info-container">
                            <h2>Sergio Andres Rodriguez Perez</h2>
                            <h3>Student</h3>
                        </div>
                        <button>Contact me</button>
                        <button>Dowload curriculum</button>
                        <footer className = "fa-footer">
                            <span><a href = 'https://www.instagram.com/sergioandrod_/' target="_blank" rel="noopener noreferrer">
                            <Instagram width = {sizeBrand} height = {sizeBrand}/></a></span>
                            <span><a href = '/' target="_blank" rel="noopener noreferrer"><Twitter width = {sizeBrand} height = {sizeBrand}/></a></span>
                            <span><a href = '/' target="_blank" rel="noopener noreferrer"><Linkedin width = {sizeBrand} height = {sizeBrand}/> </a></span>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}