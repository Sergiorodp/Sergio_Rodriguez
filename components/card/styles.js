import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout/index'

export default css`

.card-main-container{
    display:flex;
    flex-direction:column;
}

.image{
    height:25vh;
    width:30vw;
    /* background:red; */
    margin-bottom: 10vh; 
}

.button-container{
    width:30vw;
    height:100%;
    background:linear-gradient(rgba(0, 0, 0, 0) 0%,
    rgb(255, 255, 255,.2) 30%, rgb(255, 255, 255) 70%);
    margin-top:20vh;
    padding-top:40vh;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.card-main-container button{
    margin:3vh 0;
    width:20vw;
    border: 0;
    border-radius:10px;
    color:seashell;
    background:#000000;
    cursor: pointer;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 700;
    user-select: none;
    transition: .2s ease-in-out;
    /* pointer-events: none; */
}

.card-main-container button:hover,
.card-main-container button:focus,
.card-main-container button:active{
    background:${colorsShy.blue};
}

`