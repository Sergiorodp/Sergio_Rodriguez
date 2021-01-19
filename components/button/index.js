

export default function MyButton({children,background,color}){
    return(
        <>
        <button>
            {children}
        </button>
        <style jsx>
        {`    button{
                margin:1.2vh 0;
                border: 0;
                border-radius:30px;
                color:${color};
                background:${background};
                cursor: pointer;
                padding: 10px 40px;
                font-size: 15px;
                font-weight: 600;
                user-select: none;
                transition: .2s ease-in-out;
                }

                button:hover,
                button:focus,
                button:active{
                    background: ${color};
                    color: ${background};
                }
            `}
        </style>
        </>
    )
}