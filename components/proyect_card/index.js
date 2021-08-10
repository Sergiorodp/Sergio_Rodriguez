import { colorsShy } from 'components/styleLayout/index'

export default function ProyectCard({src, background = 'black'}){
    return(
        <>
            <div className = "main-proyect-card-container">
                <p>Hola mundo</p>
                <div className = "image-frame" >
                    <img src = {src}></img>
                </div>
            </div>
            <style jsx>{`
                
            .main-proyect-card-container{
                width : 100%;
                height : 300px;
                display: grid;
                align-items:center;
                grid-template-columns: 60% 40%; 
                background:${background};
                padding: 0 13%;
                color:white;
            }

            .image-frame{
                width: 100%;
                height:300px;
            }

            .image-frame img{
                width:100%;
                height:300px;
                border-radius:10px;
                object-fit : cover;
                display:flex;
            }
                
                `}</style>
        </>
    )
}