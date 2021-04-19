import React from 'react';
import {GetInvolvedData} from "../GetInvolvedData";


const Involved = () => (
  <ul>
  {
    GetInvolvedData.map((data)=>(
      <li key={data.id}><a className="dropdown-item" href={data.path}>{data.info}</a></li>
    ))
  }
  </ul>
)
export default Involved;
