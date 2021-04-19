import React from 'react';
import {MediaData, multimedia} from './MediaData'

const Media = () => {

  return(

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        RESOURCES & MEDIA
      </a>
      <div className="dropdown-menu menu5">
        <div className="list-container">
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
          <div className="col box7">
            <ul>
              <li>
                <a className="dropdown-item ajax">MELTIMEDIA</a>
                <hr className="hr"/>
              </li>
              {
                multimedia.map((data) => (
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
export default Media;
