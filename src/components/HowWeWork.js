import React from 'react';
import {howData, ApprochData} from './HowWeWorkdata';

const HowWeWork = () => {
  return(

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          HOW WE WORK
      </a>
      <div className="dropdown-menu menu3">
        <div className="list-container">
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
          <div className="col box3">
            <ul>
              <li>
                <a className="dropdown-item ajax">OUR APPROACH</a>
                <hr className="hr"/>
              </li>
              {
                ApprochData.map((data)=>(
                    <li key={data.id}><a className="dropdown-item" href={data.path}>{data.info}</a></li>
                ))
              }

            </ul>
          </div>
        </div>
      </div>
    </li>

  )
}
export default HowWeWork;
