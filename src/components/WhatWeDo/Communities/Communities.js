import React from 'react';
import { COMMUNITIESData} from '../WhatWeDodata';


const Communities = () =>(
  <ul>
    <li>
      <a className="dropdown-item ajax">DEVELOPING COMMUNITIES</a>
      <hr className="hr"/>
    </li>
    {
      COMMUNITIESData.map((data)=>(
          <li key={data.id}><a className="dropdown-item" href="#">{data.info}</a></li>
      ))
    }
    </ul>
)
export default Communities;
