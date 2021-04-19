import React from 'react';
import { EnvironmentData} from '../WhatWeDodata';


const Concerns = () =>(
  <ul>
    <li>
      <a className="dropdown-item ajax">FACING ENVIRONMENTAL CONCERNS</a>
      <hr className="hr"/>
    </li>
    {
      EnvironmentData.map((data)=>(
          <li key={data.id}><a className="dropdown-item" href="#">{data.info}</a></li>
      ))
    }

 </ul>
)
export default Concerns;
