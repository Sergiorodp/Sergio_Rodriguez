import styles from './styles'
import Image from 'next/image'

import Photo from '../../styles/images/photo.module.css'

export default function Card(){
    return(
        <>
        <div className = "card-main-container">
            <div className = {Photo.photo}>
                <div className = "button-container">
                    <button>Contact me</button>
                    <button>Dowload curriculum</button>
                </div>
                <div className = "social-media-container">
                    
                </div>
            </div>
        </div>
        <style jsx>{styles}</style>
        </>
    )
}