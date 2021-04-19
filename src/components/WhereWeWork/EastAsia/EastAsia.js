import React from 'react';
import { EastAsiadata} from '../CountryData';

const EastAsia = () => (

  < ul >
  < li >
  < a className = "dropdown-item ajax" > EAST ASIA < /a>
   < hr className = "hr" / >
  < /li> {
    EastAsiadata.map((data) => (
      <li key={data.id}> < a className = "dropdown-item"
      href = {data.path} > {
        data.info
      } < /a></li >
    ))
  }

  </ul>

)
export default EastAsia;
