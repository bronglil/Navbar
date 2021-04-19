import React from 'react';
import {MediaData} from '../MediaData'

const WhatsNew = () =>(
  <div className="col box">
    <ul>
      <li>
        <a className="dropdown-item ajax">WHAT'S NEW</a>
        <hr className="hr"/>
      </li>
      {MediaData.map((data)=>(
          <li key={data.id}><a className="dropdown-item" href={data.path}>{data.info}</a></li>
      ))}

    </ul>
  </div>
)
export default WhatsNew;
