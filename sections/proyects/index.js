import ProyectCard from "components/proyect_card"
import Description from "components/description"
import { colorsShy } from 'components/styleLayout/index'
import MyButton from "components/button"

export default function Proyects(){
    return(
        <>
        <section  id="Proyects">

            <div className = 'proyects-container'>

                <div className = {'des-container'}>
                    <Description
                    title = 'My work'
                    info = 'IoT - AI - Embedded Systems'
                    section = 'Proyects'
                    >
                
                    <ProyectCard
                        src = '/assets/cdi.y@72x-100.jpg'
                        title = 'proyect-1'
                        description = 'description proyect one'
                    />
                    <ProyectCard
                        src = '/assets/LETTERS-L4-GALLERY-2.png'
                        title = 'proyect-2'
                        description = 'description proyect two'
                    />
                    <ProyectCard
                        src = '/assets/summitbackground.jpg'
                        title = 'proyect-3'
                        description = 'description proyect three'
                    />

                    </Description>
                
                </div>

                <div className = 'button-container'>
                    <MyButton
                        background = {colorsShy.blue}
                        color = {colorsShy.white} 
                    >
                        More Proyects...
                    </MyButton>
                </div>
            </div>
               


        </section>

        <style jsx>{`
            
            section{
                background:black;
                padding-top: 10px;
                min-height: 100vh;
                
                display:flex;
                justify-content:center;
            }

            .proyects-container{
                padding-bottom: 5vh;
                padding: 10vh 0px;
                width: 100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }

            .proyects-container h3{

                padding-left: 13vw;
                color: ${colorsShy.blue};

            }

            .des-container{
                padding-left:13vw;
                color:white;
            }

            .button-container{
                display:flex;
                justify-content:center;
            }
            
            
            `}</style>
        </>
    )
}