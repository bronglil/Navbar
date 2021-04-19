import React from 'react';
import {WhoWeAreData} from '../WhoWeAreData';

const WhoWeAreDropdown = () =>(
  <div className = "col box" >
  <ul > {
    WhoWeAreData.map((data) => (
      <li key={data.id}> < a className = "dropdown-item"
      href = "#" >
       { data.info }
        </a>
        </li >
    ))
           }
  </ul>
   </div>
)
export default WhoWeAreDropdown;
