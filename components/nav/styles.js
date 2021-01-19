import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout/index'

export default css`

.main-nav-container{
    display:flex;
    width:74%;
    max-width:1600px;
    padding:3vh 0 0 0;
    /* background:red; */
    /* grid-template-columns:  61vw 11vw; */
    /* box-shadow: 0px 0px 10px rgba(0,0,0,0.2); */

}


.options-container{
    column:2/3;
    display:flex;
    width:100%;  
    justify-content: flex-end;

}

.options-container ul{
    list-style: none;
}

.list-container{
    display:flex;
    height:100%;
    width:70%;
    padding:0 4% 0 0;
    align-items:center;
    justify-content:flex-end;
    /* width:100%; */
    /* background:orange; */

}

.nav-list-item{
    /* background:yellow; */
    margin:0 5% 0 0;
    display:grid;
    place-content:center;
}

.nav-list-item a{
    font-weight: 500;
    /* background:red; */
    box-sizing:content-box;
    color : ${colorsShy.white};
    border: 0;
    padding: 5px 20px;
    border-radius:30px;
    border-right:0px solid seashell;
    transition: .15s ease-in-out;
}

.nav-list-item a:hover{
    color: ${colorsShy.blue} ;
    background:${colorsShy.white};
}

@media (min-width: 1100px){
    .active a{
        color: ${colorsShy.blue} ;
        background:${colorsShy.white};
    }
}

.footer{
    /* background:red; */
    display:grid;
    place-content:center;
}

.footer button{
    margin:1.2vh 0;
    border: 0;
    border-radius:30px;
    color:white;
    background:black;
    cursor: pointer;
    padding: 10px 40px;
    font-size: 15px;
    font-weight: 600;
    user-select: none;
    transition: .2s ease-in-out;
}

.footer button:hover,
.footer button:focus,
.footer button:active{
    background:white;
    color:black;
}


.footer p{
    font-weight: 700;
}

`