import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout/index'

export default css`

.main-nav-container{
    display:grid;
    grid-template-rows: 0.15fr 0.7fr 0.15fr;
    height:100%;
    width:100%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

}

.logo{
    font-weight: 700;
    display:grid;
    color: ${colorsShy.white};
    /* background:black; */
    place-content:center;
    height:100%;
    /* background:red; */
    rows:1/2;
}

.options-container{
    rows:2/3;
    display:grid;
    width:100%;
    place-content:center;
    /* background:green; */
}

.options-container ul{
    list-style: none;
}

.list-container{
    display:flex;
    height:100%;
    width:100%;
    flex-direction:column;
    /* background:blue; */
    justify-content:center;
}

.nav-list-item{
    /* background:yellow; */
    width:6vw;
    height:10vh;
}

.nav-list-item a{
    height:6vh;  
    font-weight: 500;
    /* background:red; */
    box-sizing:content-box;
    display:grid;
    color : ${colorsShy.blue};
    place-content:center;
    position:absolute;
    /* ancho de la nav */
    width:6vw;  
    border-radius:.3vw;
    border-right:0px solid seashell;
    transition: .15s ease-in-out;
}

.nav-list-item a:hover{
    color: ${colorsShy.white} ;
    border-right: 5px solid ${colorsShy.white};
    /* border-left:4px solid seashell;   */
}

@media (min-width: 1100px){
    .active a{
        color: ${colorsShy.white} ;
        border-right: 5px solid ${colorsShy.white};
    }
}

.footer{
    display:grid;
    color:white;
    place-content:center;
}

.footer p{
    font-weight: 700;
}

`