import css from 'styled-jsx/css'
import { colorsShy } from '../../components/styleLayout/index'

const fondo = './public/images/fondoinicio.svg'

export default css`


.principal-content-container{
    width:74%;
    height:100vh;
    padding-top:6vh;
    max-width: 1600px;
    /* position:absolute; */
    /* background:red; */
    display:grid;
    place-content:center;
    grid-template-columns: 1fr 1fr;
}

.tittle-container{
    display:flex;
    align-items:center;
}

.line-subtitle{
    background:black;
    margin:0 0 0 5px;
    width:3.5vw;
    height:3px;
    border-radius:99px;
}

.subtitle-container{
    display:flex;
    align-items:center;
}

.subtitle-container h3{
    margin:0 1.5vw;
}

.tittle-container p{
    color:white;
    font-weight: 700 ;
    font-size:30px;
    margin:0 0 0 2vw;
    /* justify-content:flex-end; */
    /* background:red; */
}

.tittle-container h2{
    color:white;
    font-weight:700;
    font-size:70px;
}

.card-info-container{
    display:flex;
    justify-content: flex-end;
    align-items:center;
    width:100%;
    height:100%;
    /* background:yellow; */
    /* overflow:scroll; */
}

.foto{
    /* position:absolute; */
    width:85%;
    /* background:red; */
}

.tittle-container div > :global(button){
    margin:50px 0 0 0;
}

.features-container{
    display:flex;
    justify-content:center;
    /* box-sizing: content-box; */
    width:100%;
    background:linear-gradient(90deg,
    rgb(0, 0, 0) 50%, rgb(0, 0, 0,0) 51%);
    height:100%;
    grid-template-columns: repeat(3,1fr);
}

.features-container div{
    max-width:1600px;
    display:flex;
    width:74%;
}

@media (max-width: 750px){
    .principal-content-container{
        height:100vh;
        padding-top:0;
    }

    .features-container{
        height:60vh;
    }   
    .features-container div{
        flex-direction:column;
        width:100%;
    }

    .card-info-container{
        visibility:hidden;
    }
}

@media (max-width: 361px){
    .tittle-container h2{
        font-size:60px;
    }
}

`