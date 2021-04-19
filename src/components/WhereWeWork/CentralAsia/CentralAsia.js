import React from 'react';
import { CentralAsiadata} from '../CountryData';

const CentralAsia = () => (
  
  <ul >
  <li >
  < a className = "dropdown-item ajax" > CENTRAL ARIA < /a>
   < hr className = "hr" / >
  </li>

  {
    CentralAsiadata.map((data) => (
       <li key={data.id}> < a className = "dropdown-item"
      href = {data.path} > {
        data.info
      } < /a></li >
    ))
  }
  </ul>
)
export default CentralAsia;
