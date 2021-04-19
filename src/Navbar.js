import React, {
  useState
} from 'react';
import './Navbar.css';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Language from './components/Languages/Language';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import HowWeWork from './components/HowWeWork/HowWeWork';
import WhereWeWork from './components/WhereWeWork/WhereWeWork';
import Media from './components/Media/Media';
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
