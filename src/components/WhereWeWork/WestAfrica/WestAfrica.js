import React from 'react';
import { WestAfricadata} from '../CountryData';

const WestAfrica = () => (
  <ul >

  < li >
  < a className = "dropdown-item ajax" > WEST AFRICA < /a> <
  hr className = "hr" / >
  <
  /li> {
    WestAfricadata.map((data) => (
       < li key={data.id}> < a className = "dropdown-item"
      href = {data.path} > {
        data.info
      } < /a></li >
    ))
  }

  </ul>
)
export default WestAfrica;
