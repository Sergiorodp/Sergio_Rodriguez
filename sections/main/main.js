import styles from './stylesMain'
// import Info from '../../components/aboutMe/index'
import fondo from '../../styles/images/fondoMain.module.css'
import { colorsShy } from '../../components/styleLayout/index'
// import SvgMain from '../../components/fondosvg/main'
import MyButton from '../../components/button/index'
import Feature from '../../components/bloque/index'
import { padding } from '../../components/nav/index'
import Bloque from '../../components/bloque/index'
import { createRef, useEffect } from 'react'
// import me from './module.complete.png'
import useNearScreen from '../../hooks/useNearScreen/index'
import {Blur} from '../../components/Layout/index'

const bloques = createRef()

export default function Principal(){

    const nearBlur = useNearScreen({ externalRef : bloques, distance : 1})

    useEffect(()=>{
        Blur({ inScreen : !nearBlur.isNearScreen})
        padding(!nearBlur.isNearScreen)
    },[nearBlur.isNearScreen])

    return(
        <>
            <div className = {fondo.mainSectionContainer}>
                {/* <SvgMain width = '1700px'/> */}
                <section className = "principal-content-container" ref = {bloques}>
                    <div className = "tittle-container">
                        <div>
                        <div className = 'subtitle-container'>
                            <div className = 'line-subtitle'></div>
                            <h3>Welcome to my portafolio.</h3>
                        </div>

                        <h2>Quality, Clarity & Creativity.</h2>
            
                        <MyButton 
                        background = {colorsShy.black} 
                        color = {colorsShy.white}>
                            <a href = '#aboutMe'> GET STARTED </a>
                        </MyButton>
                        </div>
                    </div>
                    <div className = "card-info-container">
                        <img className = "foto" src = '/circleMe.png' alt = 'photo'/>
                    </div>
                </section>
                <section className = "features-container">
                    <div >
                        <Bloque 
                        cl = {'initial'}
                        color = {colorsShy.white}
                        lineColor = {colorsShy.blue}
                        background = {colorsShy.black}
                        title = {'AI & ML'}>
                            {/* <p>Hola como esta</p> */}
                        </Bloque>
                        <Bloque 
                        pd = {' 0 0 0 6%'}
                        cl = {'initial'}
                        color = {colorsShy.white}
                        lineColor = {colorsShy.blue}
                        background = {colorsShy.black}
                        title = {'PRODUCT DESIGN'}>
                            {/* <p>Hola como esta</p> */}
                        </Bloque>
                        <Bloque 
                        cl = {'center'}
                        color = {colorsShy.white}
                        lineColor = {colorsShy.white}
                        background = {'none'}
                        title = {'WEB DEV'}>
                            {/* <p>Hola como esta</p> */}
                        </Bloque>
                        </div>
                    </section>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}