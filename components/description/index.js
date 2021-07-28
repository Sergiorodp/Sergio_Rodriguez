import { colorsShy } from '../styleLayout/index'

export default function Description({children,section,title,info}){
    return(
        <>
        <div className = "main-description-container">
            <div className = "tittle">
                <div className = "line"></div>
                <h2>{section}</h2>
            </div>
            <h3>{title}</h3>
            <p>{info}</p>
            <div className = "info-container">
                {children}
            </div>
        </div>
        <style jsx>{`

            .main-description-container{
                display:flex;
                flex-direction:column;
            }

            .tittle{
                display:flex;
                align-items:center;
                color:${colorsShy.blue};
            }

            .tittle h2{
                font-size:25px;
            }

            h3{
                margin:5px 0;
                font-size:50px;
            }

            p{
                font-size:25px;
                color:${colorsShy.blue};
            }

            .info-container{
                margin:40px 0;
                font-size:20px;
            }

            .line{
                width:3vw;
                height:4px;
                margin:0 15px 0 0;
                background:${colorsShy.blue};
                border-radius:9999px;
            }

            @media (max-width: 750px){

                .tittle h2{
                    font-size:1.2rem;
                }

                h3{
                    margin:2% 0;
                    font-size:2rem;
                }

                p{
                font-size:1.2rem;
                color:${colorsShy.blue};
                }

                .info-container{
                    margin:8% 0;
                    font-size:1.1rem;
                }


            }
            
            `}</style>
        </>
    )
}