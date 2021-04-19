import React from 'react';
import MultiMedia from './MultiMedia/MultiMedia';
import WhatsNew from './WhatsNew/WhatsNew';

const Media = () => {

  return(

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        RESOURCES & MEDIA
      </a>
      <div className="dropdown-menu menu5">
        <div className="list-container">

         <WhatsNew/>            

         <MultiMedia/>


        </div>
      </div>
    </li>


  )
}
export default Media;
