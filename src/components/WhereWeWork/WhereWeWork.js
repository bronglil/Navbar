import React from 'react';
import EastAfrica from './EastAfrica/EastAfrica';
import WestAfrica from './WestAfrica/WestAfrica';
import MiddleEast from './MiddleEast/MiddleEast';
import CentralAsia from './CentralAsia/CentralAsia';
import SouthAsia from './SouthAsia/SouthAsia';
import EastAsia from './EastAsia/EastAsia';
import NorthAmerica from './NorthAmerica/NorthAmerica';
import Europe from './Europe/Europe';


const WhereWeWork = () => {
  return (

    <li className = "nav-item dropdown" >
    <a className = "nav-link dropdown-toggle"
    href = "#"
    id = "navbardrop"
    data-toggle = "dropdown" >
    WHERE WE WORK </a>

    < div className = "dropdown-menu menu4" >
    < div className = "list-container" >
    < div className = "col box" >

       <EastAfrica/>
       <WestAfrica/>

    </div>


    < div className = "col box4" >

      <MiddleEast/>
     <CentralAsia/>

    </div>


    <div className = "col box5" >

        <SouthAsia/>
         <EastAsia/>

    </div>

    <div className = "col box6" >

       <NorthAmerica/>
       <Europe/>

    </div>
    </div>
    </div>
    </li>



  )
}
export default WhereWeWork;
