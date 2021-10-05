import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout'

export default css`

.main-lateral-container{
    z-index:700;
    position:fixed;
    height:100vh;
    width:5vw;
    background:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
}

.line{
    background:${colorsShy.blue};
    height:60px;
    margin:20px 0;
    border-radius:20px;
    width:4px;
}

.brand-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    color:${colorsShy.blue};
    z-index:701;
    
}

.brand-container span{
    margin:10% 0;
}

.brand-container span:hover{
    color:white;
}

@media (max-width: 860px){
    .main-lateral-container{
        visibility: hidden;
    }
}

`