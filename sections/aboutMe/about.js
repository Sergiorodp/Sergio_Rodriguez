import { colorsShy } from '../../components/styleLayout/index'
import DesLayoyt from '../../components/description/index'

export default function AboutMe(){
    return(
        <>
        <section className = "main-aboutme-container" id="AboutMe">
            <div className = "info-container">
                <div className = "image-container">
                    <div className = "image-frame" >
                        <img src = '/assets/happy_sergio.png'></img>
                    </div>
                </div>
                <DesLayoyt 
                section = {'About Me'}
                title = {'Sergio Rodriguez'}
                info = {'Electronic engineer'}>
                    <p>
                        I'am an electronic engineer student, with programing experience in python, C++, C, Java, JavaScript, html and css. Knowledge in IDEs
                        and software development like stm32, atmel studio, Altium designer and QT. with interest 
                        in continuous learning, problems resolution and development of new technology.
                    </p>
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
                width:74%;
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
                .info-container{
                    width:84%;
                }
            }

            @media (max-width: 750px){
                
                .main-aboutme-container{
                    height:125vh;
                }

                .info-container{
                    display:grid;
                    height:100%;
                    grid-template-columns:none;
                    grid-template-rows: 50% 50%;
                }

                .image-container{
                    justify-content:center;
                }

            }

            `}</style>
        </>
    )
}