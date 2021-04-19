import React from 'react';
import {LangageData} from './LanguageData.js'

const  Language = (props) => {

  return(
    <>
    <li className="nav-item item1">
      <a className="nav-link nav-link1" href="#" onClick={props.click} onclick="item()" ondblclick="item1()"><i className="fas fa-search icon1"></i></a>

    </li>

    <div className="nav-item dropdown1 menu7">
      <a className="nav-link" href="#"><i className="fas fa-globe icon2"></i> EN</a>
      <div className="dropdown-content content1">
        <div className="list-container">
          <div className="col box8">
            <ul>

              {
                LangageData.map((data, index) => (
                <li key={data.id}><a className="dropdown-item" href="#"> {data.info} </a></li>
             ))}


            </ul>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
export default Language;
