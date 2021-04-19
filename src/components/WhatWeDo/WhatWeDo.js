import React from 'react';
import Services from './Services/Services';
import Concern from './Concerns/Concerns';
import Growth from './Growth/Growth';
import Communities from './Communities/Communities';
import Culture from './Culture/Culture';



const WhatWeDo = () => {


  return(

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            WHAT WE DO
        </a>
        <div className="dropdown-menu menu2" >
          <div className="list-container">
            <div className="col box">

              <Services/>

              <Concern/>

            </div>
            <div className="col box1">

             <Growth/>

             <Communities/>


            </div>
            <div className="col box2">

              <Culture/>

                </div>
          </div>
        </div>
      </li>

  )
}
export default WhatWeDo;
