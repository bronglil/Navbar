import React from 'react';
import {WhoWeAreData} from './WhoWeAreData';

const WhoWeAre = () => {

  return (
    < li className = "nav-item dropdown" >
    < a className = "nav-link dropdown-toggle"
    href = "#"
    id = "navbardrop"
    data-toggle = "dropdown" >
    WHO WE ARE <
    /a>

    < div className = "dropdown-menu" >
    < div className = "list-container" >
    <div className = "col box" >
    
    <ul > {
      WhoWeAreData.map((data) => (
        <li key={data.id}> < a className = "dropdown-item"
        href = "#" > {
          data.info
        } < /a></li >
      ))

    }


    </ul>
     </div>
     </div>
     </div>
      </li>

  )
}
export default WhoWeAre;
