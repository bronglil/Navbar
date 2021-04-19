import React from 'react';
import {howData} from '../HowWeWorkdata';


const Agencies = () => (
  <div className="col box">
    <ul>
      <li>
        <a className="dropdown-item ajax">OUR AGENCIES</a>
        <hr className="hr"/>
      </li>
      {
        howData.map((data)=>(
            <li key={data.id}><a className="dropdown-item" href={data.path}>{data.info}</a></li>
        ))
      }

    </ul>
  </div>
)
export default Agencies;
