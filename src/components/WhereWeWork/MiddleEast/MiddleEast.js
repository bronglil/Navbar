import React from 'react';
import { MiddleEastdata} from '../CountryData';

const MiddleEast = () => (

 <>
  <ul >
  <li >
  <a className = "dropdown-item ajax" > MIDDLE EAST < /a> <
  hr className = "hr" / >
  </li> {
    MiddleEastdata.map((data) => (
      <li key={data.id}> < a className = "dropdown-item"
      href = {data.path} > {
        data.info
      } < /a></li >
    ))
  }
  </ul>
  <br/>
  </>

)
export default MiddleEast;
