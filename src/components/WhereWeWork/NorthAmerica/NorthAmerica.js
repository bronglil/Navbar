import React from 'react';
import { NorthAmericadata} from '../CountryData';

const NorthAmerica = () => (

  < >
  <ul >
  <li >
  < a className = "dropdown-item ajax" > NORTH AMERICA < /a> <
  hr className = "hr" / >
  </li> {
    NorthAmericadata.map((data) => (
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
export default NorthAmerica;
