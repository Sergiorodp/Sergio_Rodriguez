import styles from './stylesMain'
import Info from '../../components/aboutMe/index'
import fondo from '../../styles/images/fondoMain.module.css'
import SvgMain from '../../components/fondosvg/main'

export default function Principal(){
    return(
        <>
            <div className = {fondo.mainSectionContainer}>
                {/* <SvgMain width = '1700px'/> */}
                <div className = "principal-content-container">
                    <div className = "tittle-container">
                        <h2>Hi! my name is Sergio</h2>
                    </div>
                    <div className = "card-info-container">
                        <img src = '../../public/images/completeV3.png'></img>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}