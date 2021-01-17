import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout/index'

export default css`

.card-main-container{
    display:flex;
    /* width:100%;  */
    flex-direction:column;
    background:black;
    /* position:absolute; */
    border-radius:20px;
}

.image{
    height:10vh;
    margin-bottom: 10vh; 
}

.button-container{
    /* width:100%; */
    height:100%;
    padding-top:250px;
    background:linear-gradient(rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0,.2) 20%, rgb(0, 0, 0) 50%);
    margin: 25% 0 0 0;
    display:flex;
    flex-direction:column;
    /* align-items:center; */
    justify-content:center;
}

.card-main-container button{
    margin:1.2vh 0;
    border: 0;
    border-radius:10px;
    color:black;
    background:white;
    cursor: pointer;
    padding: 10px 24px;
    font-size: 20px;
    font-weight: 600;
    user-select: none;
    transition: .2s ease-in-out;
    /* pointer-events: none; */
}

.main-info-container{
    display:grid;
    place-content:center;
    margin:0 10%;
    /* background:red; */
}

.info-container{
    font-size:20px;
    text-align:center;
    color:white;
    margin-bottom:5%;
    /* width:18vw; */
}

.info-container h3{
    color:${colorsShy.grey};
    padding-top:8px;
    font-size:15px;
    font-weight:400;
}


.card-main-container button:hover,
.card-main-container button:focus,
.card-main-container button:active{
    background:${colorsShy.blue};
}



.fa-footer{
    display:flex;
    /* background:black; */
    /* margin:0 5vw; */
    justify-content:center;
    padding-top:5%;
    /* background:red; */
}

.fa-footer span{
    padding: 0 10px;
    color:${colorsShy.grey};
}

.fa-footer span:hover{
    color:${colorsShy.blue};
    /* background:red; */
}

`