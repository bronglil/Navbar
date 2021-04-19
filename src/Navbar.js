import React, {
  useState
} from 'react';
import './Navbar.css';
import GetInvolved from './components/GetInvolved';
import Language from './components/Language';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import WhereWeWork from './components/WhereWeWork';
import Media from './components/Media';
import Navbarsmall from './components/Navbarsmall';

const Navbar = () => {
    const [btn, setBtn] = useState(false);


    const clickHandler = () => {
      setBtn(!btn);
    }
    return (
       < >

        <  nav className = "navbar navbar-expand-sm navbar-expand-md bg-white navbar-dark dark" id = "div" >
        < a className = "navbar-brand"
        href = "#" > AKDN < /a> <ul className = "navbar-nav" >
         {    /*<WhoWeAre/> */     }
         {  < WhoWeAre / > }

          {     /*<WhatWeDo/> */    }
          {  < WhatWeDo / >   }

          { /*<How WE WORK/> */   }
          { < HowWeWork / >  }

          {     /*<Where WeWork/> */   }
          { < WhereWeWork / >  }

          { /* RESOURCES And MEDIA */   }
          {  <  Media / >   }

          {  /* GetInvolved() */  }
           { < GetInvolved / > }

          {  /* language */   }
          { <  Language click = {clickHandler } />}

          < /ul > <
            /nav>

          {  <Navbarsmall click = {clickHandler }  check = {btn}/>} 

          < / >
          )
        }
        export default Navbar;
