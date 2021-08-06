export default function FormInput({label, type}) {
    return(
        <>
        <div className = 'input-container'>
            <label> {label} </label>
            <input type = {type} className = 'in' />
        </div>
            <style jsx>{`
            
            .input-container {
                display: flex;
                flex-direction:column;
                background: white;
                border-radius : 10px;
                margin : 2rem 0;
                padding: 5px 10px;
                width: 100%;
            }

            label{
                color: black;
            }

            .in{
                font-size: medium;
                border:none;
                background: none;
                margin: 5px 0;
            }

            .in:focus{
                outline: none;
            }
            
            `}</style>
        </>
    )
}