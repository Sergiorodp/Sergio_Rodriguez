import Twitter from "../brands/twitter";

export default function Bloque({children,pd, cl , title, background, color, lineColor}){
    return(
        <>
        <div className ="block-main-container"  >
            <div className = "title">
                <div className = "line"></div>
                <p>{title}</p>
            </div>
            <div className = "content-container">
                {children}
            </div>
        </div>
        <style jsx>{`
            .block-main-container{
                display:flex;
                flex-direction:column;
                justify-content:center;
                height:100%;
                background:${background};
                width:100%;
                height:100%;
                color:${color};
                align-items:${cl};
                padding:${pd};
            }

            .content-container{
                margin: 0 0 0 calc(3vw + 20px);
            }
            
            .title{
                margin:5% 0;
                display:flex;
                align-items:center;
            }

            .title p{
                font-weight:700;
                font-size:30px;
            }

            .line{
                margin:0 20px 0 0;
                border-radius:99px;
                background:${lineColor};
                width:3vw;
                height:4px;
            }
            `}</style>
        </>
    )
}