import React, {useState} from 'react';
import {WhoWeAreData} from './WhoWeAre/WhoWeAreData';
import {whatData, EnvironmentData,ECONOMICData,COMMUNITIESData, CULTUREData} from './WhatWeDo/WhatWeDodata';
import {howData, ApprochData} from './HowWeWork/HowWeWorkdata.js';
import {EastAfricadata, WestAfricadata, MiddleEastdata, CentralAsiadata, SouthAsiadata, EastAsiadata, NorthAmericadata, Europedata} from './WhereWeWork/CountryData';
import {MediaData, multimedia} from './Media/MediaData';
import {GetInvolvedData} from './GetInvolved/GetInvolvedData';
import {LangageData} from './Languages/LanguageData';




const Navbarsmall = (props) => {


  return(
 <>

    <nav className="navbar navbar-expand-md bg-dark navbar-dark nav" id="div1">
      <button  className="navbar-toggler collapsed tog" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" id="display1" onclick="changecolor()"></span>
      <span  className="my-1 mx-2 close" id="display2" onclick="defaultcolor()">X</span>



      </button>
      <a  className="navbar-brand brand" href="#">AKDN</a>
      <div  className="nav-item item4">
          <a  className="nav-link nav-link4" href="#" onClick={props.click} onclick="item()" ondblclick="item1()"><i  className="fas fa-search icon1"></i></a>
      </div>
      <div  className="collapse navbar-collapse coll" id="collapsibleNavbar">
      <ul  className="navbar-nav bar">
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  WHO WE ARE
              </a>
              <div  className="dropdown-menu dropdown-scrollbar4 menu">

                 {/*Who we are data */}

                {
                  WhoWeAreData.map((data) => (
                    <a key={data.id} className="dropdown-item item8 item13" href={data.path}>{data.info}</a>
                  ))
                }

              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  WHAT WE DO
              </a>
              <div  className="dropdown-menu dropdown-scrollbar menu">
                      <a  className="dropdown-item item9 ajax">PROVIDING ESSENTIAL SERVICES</a>
                      <hr  className="hr"/>

                      {/*What we do data */}
                 {
                     whatData.map((data) => (
                     <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                                     ))
                  }


                      <a  className="dropdown-item item9 ajax">FACING ENVIRONMENTAL CONCERNS</a>
                      <hr  className="hr"/>

                      {
                        EnvironmentData.map((data) =>(
                          <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                        ))
                      }

                      <a  className="dropdown-item item9 ajax">GENERATION ECONOMIC GROWTH</a>
                      <hr  className="hr"/>

                      {
                        ECONOMICData.map((data) =>(
                          <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                        ))
                      }


                      <a  className="dropdown-item item9 ajax">DEVELOPING COMMUNITIES</a>
                      <hr  className="hr"/>
                      {
                        COMMUNITIESData.map((data) =>(
                          <a  key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                        ))
                        }

                      <a  className="dropdown-item item9 ajax">REVITALISING CULTURE</a>
                      <hr  className="hr"/>

                      {
                        CULTUREData.map((data) =>(
                          <a key={data.id} className="dropdown-item item8 " href={data.path}>{data.info}</a>
                        ))
                        }

              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  HOW WE WORK
              </a>
              <div  className="dropdown-menu dropdown-scrollbar menu">
                  <a  className="dropdown-item item9 ajax">OUR AGENCIES</a>
                  <hr  className="hr"/>

                  {
                    howData.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }


                  <a  className="dropdown-item itme9 ajax">OUR APPROACH</a>
                  <hr  className="hr"/>
                  {
                   ApprochData.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))

                  }
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  WHERE WE WORK
              </a>
              <div  className="dropdown-menu dropdown-scrollbar menu">
                  <a  className="dropdown-item itme9 ajax">EAST AFRICE</a>
                  <hr  className="hr"/>

                  {
                    EastAfricadata.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }

                  <a  className="dropdown-item item9 ajax">WEST AFRICA</a>
                  <hr  className="hr"/>
                  {
                    WestAfricadata.map((data)=>(
                    <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }
                  <a  className="dropdown-item item9 ajax">MIDDLE EAST</a>
                  <hr  className="hr"/>

                   {
                     MiddleEastdata.map((data)=>(
                         <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                     ))
                   }

                  <a  className="dropdown-item item9 ajax">CENTRAL ARIA</a>
                  <hr  className="hr"/>
                  {
                    CentralAsiadata.map((data)=>(
                        <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }

                  <a  className="dropdown-item item9 ajax">SOUTH ASIA</a>
                  <hr  className="hr"/>

                  {
                    SouthAsiadata.map((data)=>(
                        <a  key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }

                  <a  className="dropdown-item itme9 ajax">EAST ASIA</a>
                  <hr  className="hr"/>
                  {
                    EastAsiadata.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>

                    ))
                  }

                  <a  className="dropdown-item itme9 ajax">NORTH AMERICA</a>
                  <hr  className="hr"/>

                  {
                    NorthAmericadata.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>

                    ))
                  }

                  <a  className="dropdown-item itme9 ajax">EUROPE</a>
                  <hr  className="hr"/>
                  {
                    Europedata.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>

                    ))
                  }
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link toggle dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  RESOURCES & MEDIA
              </a>
              <div  className="dropdown-menu dropdown-scrollbar1 menu">
                  <a  className="dropdown-item itme9 ajax">WHAT'S NEW</a>
                  <hr  className="hr"/>

                  {
                    MediaData.map((data)=>(
                        <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }

                  <a  className="dropdown-item item9 ajax">MELTIMEDIA</a>
                  <hr  className="hr"/>
                  {
                    multimedia.map((data)=>(
                        <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                    ))
                  }

              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  GET INVOLVED
              </a>
              <div  className="dropdown-menu dropdown-scrollbar2 menu">
              {
                GetInvolvedData.map((data)=>(
                    <a key={data.id} className="dropdown-item item8 item16" href={data.path}>{data.info}</a>
                ))
              }
              </div>
          </li>

          <hr  className="hr1"/>
          <li  className="nav-item nav-item1 item5 item10 item11">
              <a  className="nav-link dropdown-toggle1 tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  <i  className="fas fa-globe icon2 icon5"></i> ENGLISH
              </a>
              <div  className="dropdown-menu dropdown-scrollbar3 menu">
              {
                  LangageData.map((data)=>(
                      <a key={data.id} className="dropdown-item item8 " href={data.path}>{data.info}</a>
                  ))
              }
              </div>
          </li>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </ul>
      </div>
    </nav>
    <div>
      {props.check ? <form action="/"  method="GET"  className="item itme2">
        <input type="text"  className="form-control" placeholder="Search...." />
      </form> : null}
    </div>

</>

  )
}
export default Navbarsmall;
