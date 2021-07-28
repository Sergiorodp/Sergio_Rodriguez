import { colorsShy } from '../../components/styleLayout/index'
import DesLayoyt from '../../components/description/index'

export default function AboutMe(){
    return(
        <>
        <section className = "main-aboutme-container">
            <div className = "info-container">
                <div className = "image-container">
                    <div className = "image-frame" >
                        <img src = '/assets/happy_sergio.png'></img>
                    </div>
                </div>
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
                grid-template-columns:45% 55%;
                justify-content:center;
                align-items:center;
                margin: 0 12%;
            }

            .about-me-info{
                color:white;
            }

            .image-container{
                width : 100%;
                height : 100%;
                display: flex; 
                align-items: center;
                
            }

            .image-frame{
                width: 80%;
                height : 90%;
                border-radius: 10px;
                background: white;
            }

            .image-frame img{
                width: 100%;
                height : 100%;
                border-radius: 10px;
                left:10px;
                top:10px;
                position:relative;
                object-fit : cover;
            }

            @media (max-width: 860px){
                .image-container{
                    display:none;
                }

                .info-container{
                    display:flex;
                    padding:0 9%;
                    margin : 0;
                }
            }

            `}</style>
        </>
    )
}