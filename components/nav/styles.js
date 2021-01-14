import css from 'styled-jsx/css'
import { colorsShy } from '../styleLayout/index'

export default css`

.main-nav-container{
    display:grid;
    grid-template-rows: 0.15fr 0.7fr 0.15fr;
    height:100%;
    background: ${colorsShy.white};
    /* border-right: 2px solid grey; */
    /* border-radius: 0 20px 20px 0 ; */
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

}

.logo{
    font-weight: 700;
    display:grid;
    place-content:center;
    height:100%;
    /* background:red; */
    rows:1/2;
}

.options-container{
    rows:2/3;
    display:grid;
    place-content:center;
    /* background:green; */
}

.options-container ul{
    list-style: none;
}

.list-container{
    display:flex;
    height:90%;
    flex-direction:column;
    /* justify-content:center; */
}

.nav-list-item{
    /* background:yellow; */
    width:10vw;
    height:10vh;
}

.nav-list-item a{
    height:7vh;
    font-weight: 500;
    /* background:red; */
    box-sizing:content-box;
    display:grid;
    place-content:center;
    position:absolute;
    width:10vw;
    border-radius:.3vw;
    border-right:0px solid seashell;
    transition: .15s ease-in-out;
}

.nav-list-item a:hover{
    color: ${colorsShy.blue} ;
    border-right: .3vw solid ${colorsShy.blue};
    /* border-left:4px solid seashell;   */
}

.active a{
    color: ${colorsShy.blue} ;
    border-right: .3vw solid ${colorsShy.blue};
}

.footer{
    display:grid;
    place-content:center;
}

.footer p{
    font-weight: 700;
}

`