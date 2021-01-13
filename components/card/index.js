import styles from './styles'
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Photo from '../../styles/images/photo.module.css'
import { colorsShy } from '../styleLayout'

library.add(fab)

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
                            <span><a href = 'https://www.instagram.com/sergioandrod_/' target="_blank" rel="noopener noreferrer">< FontAwesomeIcon icon={['fab','instagram']}  size="lg" /></a></span>
                            <span><a href = '/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon = {['fab','twitter']} size="lg" /></a></span>
                            <span><a href = '/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon = {['fab','linkedin']}  size="lg"/></a></span>
                        </footer>
                    </div>
                </div>
                <div className = "social-media-container">
                    
                </div>
            </div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}