import React from 'react';
import {whatData, EnvironmentData, ECONOMICData, COMMUNITIESData, CULTUREData} from './WhatWeDodata';

const WhatWeDo = () => {


  return(

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            WHAT WE DO
        </a>
        <div className="dropdown-menu menu2" >
          <div className="list-container">
            <div className="col box">
              <ul>
                <li>
                  <a className="dropdown-item ajax">PROVIDING ESSENTIAL SERVICES</a>
                  <hr className="hr"/>
                </li>
                {
                  whatData.map((data)=>(
                    <li><a className="dropdown-item" href="#">{data.info}</a></li>
                ))
                }
                </ul>
              <br/>
              <ul>
                <li>
                  <a className="dropdown-item ajax">FACING ENVIRONMENTAL CONCERNS</a>
                  <hr className="hr"/>
                </li>
                {
                  EnvironmentData.map((data)=>(
                      <li><a className="dropdown-item" href="#">{data.info}</a></li>
                  ))
                }

            </ul>
            </div>
            <div className="col box1">
              <ul>
                <li>
                  <a className="dropdown-item ajax">GENERATION ECONOMIC GROWTH</a>
                  <hr className="hr"/>
                </li>
                {
                  ECONOMICData.map((data) =>(
                    <li><a className="dropdown-item" href="#">{data.info}</a></li>
                  ))
                }

              </ul>
              <br/>
              <ul>
                <li>
                  <a className="dropdown-item ajax">DEVELOPING COMMUNITIES</a>
                  <hr className="hr"/>
                </li>
                {
                  COMMUNITIESData.map((data)=>(
                      <li><a className="dropdown-item" href="#">{data.info}</a></li>
                  ))
                }
                </ul>
            </div>
            <div className="col box2">
              <ul>
                <li>
                  <a className="dropdown-item ajax">REVITALISING CULTURE</a>
                  <hr className="hr"/>
                </li>
                {
                  CULTUREData.map((data)=>(
                    <li><a className="dropdown-item" href="#">{data.info}</a></li>
                  ))
                }

              </ul>
            </div>
          </div>
        </div>
      </li>

  )
}
export default WhatWeDo;
