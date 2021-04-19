import React from 'react';
import {LangageData} from '../LanguageData.js'


const LangMap = () =>(

  <ul>
    {
      LangageData.map((data, index) => (
      <li key={data.id}><a className="dropdown-item" href="#"> {data.info} </a></li>
   ))}

  </ul>

)
export default LangMap;
