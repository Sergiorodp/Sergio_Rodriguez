import { colorsShy } from '../../components/styleLayout/index'

export default function AboutMe(){
    return(
        <>
        <section className = "main-aboutme-container">
            <div className = "info-container">
                <h2>About Me</h2>
            </div>

        </section>
        <style jsx>{`
            .main-aboutme-container{
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                background:${colorsShy.black};
            }

            .main-aboutme-container h2{
                color:white;
            }

            `}</style>
        </>
    )
}