import css from 'styled-jsx/css'
import { colorsShy } from '../../components/styleLayout/index'

const fondo = './public/images/fondoinicio.svg'

export default css`


.principal-content-container{
    width:80%;
    height:100%;
    padding-top:6vh;
    /* position:absolute; */
    /* background:red; */
    display:grid;
    grid-template-columns: 1fr 1fr;
}

.tittle-container{
    display:flex;
    align-items:center;
    /* background:red; */
}

.tittle-container h2{
    color:white;
    font-size:70px;
}

.card-info-container{
    display:flex;
    justify-content: flex-end;
}

`