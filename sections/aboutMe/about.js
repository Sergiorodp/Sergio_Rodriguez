import { colorsShy } from '../../components/styleLayout/index'
import DesLayoyt from '../../components/description/index'

export default function AboutMe(){
    return(
        <>
        <section className = "main-aboutme-container">
            <div className = "info-container">
                <div className = "image-container"><p>FOTO</p></div>
                <DesLayoyt 
                section = {'About Me'}
                title = {'Sergio Rodriguez'}
                info = {'Web Developer'}>
                    <p>My name I'm an web designer in bogotá colombia, I like study new tecnologies from develop of many proyects in any area. Contratame xd </p>
                </DesLayoyt>
            </div>

        </section>
        <style jsx>{`
            .main-aboutme-container{
                height:100vh;
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                background:${colorsShy.black};
            }

            .line{
                width:3vw;
                height:4px;
                border-radius:9999px;
                background:${colorsShy.blue};
            }

            .title-me{
                display:flex;
                flex-direction:column;
            }

            .info-container{
                color:white;
                display:grid;
                grid-template-columns:repeat(2,1fr);
                justify-content:center;
                align-items:center;
                
            }

            .about-me-info{
                color:white;
            }

            @media (max-width: 860px){
                .image-container{
                    display:none;
                }

                .info-container{
                    display:flex;
                    padding:0 9%;
                }
            }

            `}</style>
        </>
    )
}