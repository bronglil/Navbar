import React from 'react';
import {ECONOMICData} from '../WhatWeDodata';


const Growth = () =>(
  <>
  <ul>
    <li>
      <a className="dropdown-item ajax">GENERATION ECONOMIC GROWTH</a>
      <hr className="hr"/>
    </li>
    {
      ECONOMICData.map((data) =>(
        <li key={data.id}><a className="dropdown-item" href="#">{data.info}</a></li>
      ))
    }

  </ul>
  <br/>
  </>
)
export default Growth;
