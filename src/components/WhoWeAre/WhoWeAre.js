import React from 'react';
import WhoWeAreDropdown from './WhoWeAreDropdown/WhoWeAreDropdown';

const WhoWeAre = () => {

  return (

    < li className = "nav-item dropdown" >
    < a className = "nav-link dropdown-toggle" href = "#"   id = "navbardrop" data-toggle = "dropdown" >
    WHO WE ARE </a>

    < div className = "dropdown-menu" >
    < div className = "list-container" >

     <WhoWeAreDropdown/>

     </div>
     </div>
      </li>

  )
}
export default WhoWeAre;
