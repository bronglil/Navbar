import React from 'react';
import LangMap from './LangMap/LangMap';

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

            <LangMap/>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}
export default Language;
