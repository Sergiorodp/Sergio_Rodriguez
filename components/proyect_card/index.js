import { colorsShy } from 'components/styleLayout/index'

export default function ProyectCard({src, description = 'jijij', title = 'lol', background = 'black'}){
    return(
        <>
            <div className = "main-proyect-card-container">
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className = "image-frame" >
                    <img src = {src}></img>
                </div>
            </div>
            <style jsx>{`
                
            .main-proyect-card-container{
                width : 100%;
                display: grid;
                align-items:center;
                grid-template-columns: 60% 40%; 
                background:${background};
                padding-right: 13vw;
                color:white;
            }

            .main-proyect-card-container h4{
                font-size: 130%;
                margin-bottom: 10px;
            }

            .image-frame{
                width: 100%;
                height: 25vh;
                display:flex;
                background:white;
                margin: 10px 0px;
                border-radius: 10px;
            }

            .image-frame img{
                width: 100%;
                position:relative;
                left:10px;
                top: 10px;
                border-radius: 10px;
                object-fit:cover;
            }
                
                `}</style>
        </>
    )
}