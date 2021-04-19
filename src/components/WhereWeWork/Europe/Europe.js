import React from 'react';
import { Europedata} from '../CountryData';

const Europe = () => (

  <ul >
  <li >
  <a className = "dropdown-item ajax" > EUROPE < /a>
  <hr className = "hr" / >
  </li> {
    Europedata.map((data) => (
      <li key={data.id}> < a className = "dropdown-item"
      href = {data.path} > {
        data.info
      } < /a></li >
    ))
  }

  </ul>
)
export default Europe;
