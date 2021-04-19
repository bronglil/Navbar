import React from 'react';
import {multimedia} from '../MediaData'

const MultiMedia = () =>(
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
)

export default MultiMedia;
