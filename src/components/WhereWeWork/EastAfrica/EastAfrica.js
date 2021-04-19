import React from 'react';
import { EastAfricadata} from '../CountryData';

const EastAfrica = () => (
  < >
  <ul >
  <li >
  < a className = "dropdown-item ajax" > EAST AFRICE < /a>
  <hr className = "hr" / >

  </li> {
    EastAfricadata.map((data) => (
      <li key={data.id}> < a className = "dropdown-item"
      href = {data.path} > {
        data.info
      } < /a></li >
    ))
  }

  </ul>
  <br / >
  </>
)
export default EastAfrica;
