import styles from './stylesMain'
import Info from '../../components/aboutMe/index'
import fondo from '../../styles/images/fondoMain.module.css'

export default function Principal(){
    return(
        <>
            <div className = {fondo.mainSectionContainer}>
                <div className = "principal-content-container">
                    <div className = "tittle-container">
                        <h2>Hi! my name is Sergio</h2>
                    </div>
                    <div className = "card-info-container">
                        <Info/>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}