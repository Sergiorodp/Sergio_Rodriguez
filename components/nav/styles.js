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
    transition:0.15s ease-in-out;

}

.main-padding-container{
    padding:0;
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


@media (max-width: 860px){
    .main-nav-container{
        width:85%;
        padding:0;
        margin:1vh 0 0 0;
    }
}

@media (max-width: 750px){

    .main-nav-container{
        padding:0;
    }

    .options-container{
        display:none;
    }
    .footer{
        width:100%;
        display:flex;
        justify-content:flex-end;
    }

    .lines-container{
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0 0 0 10vw;
    }

    .line-div{
        width: 25px;
        height: 3px;
        background-color: ${colorsShy.white};
        margin-top: 4px;
        margin-bottom: 4px;
        border-radius:9999px;
        transition: 0.2s ease-in-out;
    }

    .lines{
        cursor:pointer;
    }
}
`