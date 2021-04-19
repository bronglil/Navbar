import React from 'react';
import {GetInvolvedData} from "./GetInvolvedData";


const GetInvolved = () => {
  return(

    <div className="nav-item dropdown1 menu6">
      <a className="nav-link" href="#">GET INVOLVED</a>
      <div className="dropdown-content">
        <div className="list-container">
          <div className="col box9">
            <ul>
            {
              GetInvolvedData.map((data)=>(
                <li key={data.id}><a className="dropdown-item" href={data.path}>{data.info}</a></li>
              ))
            }
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}
export default GetInvolved;
