import React from 'react';
import Agencies from './Agencies/Agencies';
import Approach from './Approach/Approach';

const HowWeWork = () => {
  return(

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          HOW WE WORK
      </a>
      <div className="dropdown-menu menu3">
        <div className="list-container">

          <Agencies/>
          <Approach/>

        </div>
      </div>
    </li>

  )
}
export default HowWeWork;
