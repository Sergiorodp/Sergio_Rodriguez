import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout/index'

export default css`

.card-main-container{
    display:flex;
    flex-direction:column;
}

.image{
    height:10vh;
    width:25vw;
    /* background:red; */
    margin-bottom: 10vh; 
}

.button-container{
    width:25vw;
    height:83vh;
    background:linear-gradient(rgba(0, 0, 0, 0) 0%,
    rgb(255, 255, 255,.2) 20%, rgb(255, 255, 255) 50%);
    margin-top:15vh;
    padding-top:22vw;
    /* background:red; */
    display:flex;
    flex-direction:column;
    align-items:center;
}

.card-main-container button{
    margin:1.2vh 0;
    width:18vw;
    border: 0;
    border-radius:10px;
    color:seashell;
    background:#000000;
    cursor: pointer;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    user-select: none;
    transition: .2s ease-in-out;
    /* pointer-events: none; */
}

.main-info-container{
    display:grid;
    place-content:center;
    /* background:red; */
}

.info-container h3{
    color:${colorsShy.grey};
    padding-top:8px;
    font-size:15px;
    font-weight:400;
}

.info-container{
    text-align:center;
    margin-bottom:4vh;
    width:18vw;
}

.card-main-container button:hover,
.card-main-container button:focus,
.card-main-container button:active{
    background:${colorsShy.blue};
}

.fa-footer{
    display:flex;
    /* background:blue; */
    margin:0 5vw;
    padding-top:3vh;
    justify-content:space-between;
    /* background:red; */
}

.fa-footer span{
    color:${colorsShy.grey};
}

.fa-footer span:hover{
    color:${colorsShy.blue};
    /* background:red; */
}

`