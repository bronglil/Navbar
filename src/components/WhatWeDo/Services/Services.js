import React from 'react';
import {whatData} from '../WhatWeDodata';


const Services = () =>(
  <>
  <ul>
    <li>
      <a className="dropdown-item ajax">PROVIDING ESSENTIAL SERVICES</a>
      <hr className="hr"/>
    </li>
    {
      whatData.map((data)=>(
        <li key={data.id}><a className="dropdown-item" href="#">{data.info}</a></li>
    ))
    }
    </ul>
  <br/>
  </>
)
export default Services;
