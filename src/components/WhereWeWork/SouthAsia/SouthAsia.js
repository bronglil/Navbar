import React from 'react';
import { SouthAsiadata} from '../CountryData';

const SouthAsia = () => (
  < >
  <ul >
  < li >
  <a className = "dropdown-item ajax" > SOUTH ASIA < /a>
  <hr className = "hr" / >
  </li> {
    SouthAsiadata.map((data) => (
      <li key={data.id} > < a className = "dropdown-item" href = {data.path} >
       {
        data.info
      }
      < /a></li >
    ))
  } <
  /ul>
  < br / >
  </>

)
export default SouthAsia;
