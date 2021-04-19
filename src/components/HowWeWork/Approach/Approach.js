import React from 'react';
import { ApprochData} from '../HowWeWorkdata';


const Approach = () => (

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

)
export default Approach;
