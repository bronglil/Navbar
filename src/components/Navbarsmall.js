import React from 'react';

const Navbarsmall = (props) => {
  return(
<>

    <nav  className="navbar navbar-expand-md bg-dark navbar-dark nav" id="div1">
      <button  className="navbar-toggler collapsed tog" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span  className="navbar-toggler-icon" id="display1" onclick="changecolor()"></span>
        <span  className="my-1 mx-2 close" id="display2" onclick="defaultcolor()">X</span>
      </button>
      <a  className="navbar-brand brand" href="#">AKDN</a>
      <div  className="nav-item item4">
          <a  className="nav-link nav-link4" href="#" onclick="item()" ondblclick="item1()"><i  className="fas fa-search icon1"></i></a>
      </div>
      <div  className="collapse navbar-collapse coll" id="collapsibleNavbar">
      <ul  className="navbar-nav bar">
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  WHO WE ARE
              </a>
              <div  className="dropdown-menu dropdown-scrollbar4 menu">
                  <a  className="dropdown-item item13" href="#">His Highness The Age Khan</a>
                  <a  className="dropdown-item item8" href="#">Leadersship</a>
                  <a  className="dropdown-item item8" href="#">Awards Received By AKDH</a>
                  <a  className="dropdown-item item8" href="#">Our Partners</a>
                  <a  className="dropdown-item item8" href="#">Factsheet</a>
                  <a  className="dropdown-item item8" href="#">Frequently Asked Questions</a>
                  <a  className="dropdown-item item8" href="#">Contact Us</a>
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  WHAT WE DO
              </a>
              <div  className="dropdown-menu dropdown-scrollbar menu">
                      <a  className="dropdown-item item9 ajax">PROVIDING ESSENTIAL SERVICES</a>
                      <hr  className="hr"/>
                      <a  className="dropdown-item item8 item12" href="#">Early Childhood Development</a>
                      <a  className="dropdown-item item8" href="#">Education</a>
                      <a  className="dropdown-item item8" href="#">Health</a>
                      <a  className="dropdown-item item8" href="#">Humanitartic Assistance</a>
                      <a  className="dropdown-item item8 item16" href="#">COVID-19 Resources</a>
                      <a  className="dropdown-item item9 ajax">FACING ENVIRONMENTAL CONCERNS</a>
                      <hr  className="hr"/>
                      <a  className="dropdown-item item8 item12" href="#">Disaster Preparadness</a>
                      <a  className="dropdown-item item8 item16" href="#">Environment And Climate</a>
                      <a  className="dropdown-item item9 ajax">GENERATION ECONOMIC GROWTH</a>
                      <hr  className="hr"/>
                      <a  className="dropdown-item item8 item12" href="#">Enterprise Development</a>
                      <a  className="dropdown-item item8" href="#">Financial Inclusion</a>
                      <a  className="dropdown-item item8" href="#">Industrial Development</a>
                      <a  className="dropdown-item item8 item16" href="#">Tourism Promotion</a>
                      <a  className="dropdown-item item9 ajax">DEVELOPING COMMUNITIES</a>
                      <hr  className="hr"/>
                      <a  className="dropdown-item item8 item12" href="#">Agriculture & Food Security</a>
                      <a  className="dropdown-item item8" href="#">Civil Society</a>
                      <a  className="dropdown-item item8 item16" href="#">Infrastructure Development</a>
                      <a  className="dropdown-item item9 ajax">REVITALISING CULTURE</a>
                      <hr  className="hr"/>
                      <a  className="dropdown-item item8 item12" href="#">Architecture</a>
                      <a  className="dropdown-item item8" href="#">Culture</a>
                      <a  className="dropdown-item item8" href="#">Historic Cities</a>
                      <a  className="dropdown-item item8" href="#">Media</a>
                      <a  className="dropdown-item item8" href="#">Music</a>
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  HOW WE WORK
              </a>
              <div  className="dropdown-menu dropdown-scrollbar menu">
                  <a  className="dropdown-item item9 ajax">OUR AGENCIES</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Aga Khan Agency For Habitat</a>
                  <a  className="dropdown-item item8" href="#">Aga Khan Agency For Microfinance</a>
                  <a  className="dropdown-item item8" href="#">Aga Khan Foundation</a>
                  <a  className="dropdown-item item8" href="#">Age Khan Fund For Economic Development</a>
                  <a  className="dropdown-item item8" href="#">Age Khan Health Services</a>
                  <a  className="dropdown-item item8" href="#">Age Khan School</a>
                  <a  className="dropdown-item item8" href="#">Age Khan Trust For Culture</a>
                  <a  className="dropdown-item item8" href="#">Age Khan University</a>
                  <a  className="dropdown-item item8 item16" href="#">University Of Central Asia</a>
                  <a  className="dropdown-item itme9 ajax">OUR APPROACH</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Our Approach To Development</a>
                  <a  className="dropdown-item item8" href="#">Ethical Framework</a>
                  <a  className="dropdown-item item8" href="#">Quaklity Of Life Unit (Qol)</a>
                  <a  className="dropdown-item item8" href="#">Frequestly Asked Questions</a>
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  WHERE WE WORK
              </a>
              <div  className="dropdown-menu dropdown-scrollbar menu">
                  <a  className="dropdown-item itme9 ajax">EAST AFRICE</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Kenya</a>
                  <a  className="dropdown-item item8" href="#">Madagascar</a>
                  <a  className="dropdown-item item8" href="#">Mozambique</a>
                  <a  className="dropdown-item item8" href="#">Rwanda</a>
                  <a  className="dropdown-item item8" href="#">Tanzania</a>
                  <a  className="dropdown-item item8 item16" href="#">Uganda</a>
                  <a  className="dropdown-item item9 ajax">WEST AFRICA</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Burkina Faso</a>
                  <a  className="dropdown-item item8" href="#">Côte D'Ivoire</a>
                  <a  className="dropdown-item item8" href="#">Mali</a>
                  <a  className="dropdown-item item8 item16" href="#">Senegal</a>
                  <a  className="dropdown-item item9 ajax">MIDDLE EAST</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Egypt</a>
                  <a  className="dropdown-item item8" href="#">Sysia</a>
                  <a  className="dropdown-item item8 item16" href="#">United Arab Emirates</a>
                  <a  className="dropdown-item item9 ajax">CENTRAL ARIA</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Afghanistan</a>
                  <a  className="dropdown-item item8" href="#">Kazakhstan</a>
                  <a  className="dropdown-item item8" href="#">Kyrgyz Republic</a>
                  <a  className="dropdown-item item8 item16" href="#">Tajikistan</a>
                  <a  className="dropdown-item item9 ajax">SOUTH ASIA</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Bangladesh</a>
                  <a  className="dropdown-item item8" href="#">India</a>
                  <a  className="dropdown-item item8 item16" href="#">Pakistan</a>
                  <a  className="dropdown-item itme9 ajax">EAST ASIA</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Malaysia</a>
                  <a  className="dropdown-item item8 item16" href="#">Singapore</a>
                  <a  className="dropdown-item itme9 ajax">NORTH AMERICA</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Canada</a>
                  <a  className="dropdown-item item8 item16" href="#">United States Of America</a>
                  <a  className="dropdown-item itme9 ajax">EUROPE</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">France</a>
                  <a  className="dropdown-item item8" href="#">Germany</a>
                  <a  className="dropdown-item item8" href="#">Norway</a>
                  <a  className="dropdown-item item8" href="#">Portugal</a>
                  <a  className="dropdown-item item8" href="#">Switzerland</a>
                  <a  className="dropdown-item item8 item16" href="#">United Kingdom</a>
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link toggle dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  RESOURCES & MEDIA
              </a>
              <div  className="dropdown-menu dropdown-scrollbar1 menu">
                  <a  className="dropdown-item itme9 ajax">WHAT'S NEW</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8 item12" href="#">Our Stories</a>
                  <a  className="dropdown-item item8" href="#">Project Spotlights</a>
                  <a  className="dropdown-item item8" href="#">Speeches</a>
                  <a  className="dropdown-item item8" href="#">Press Releases</a>
                  <a  className="dropdown-item item8" href="#">Event Summaries</a>
                  <a  className="dropdown-item item8" href="#">AKDN In The Media</a>
                  <a  className="dropdown-item item8 item16" href="#">COVID-19 Responses</a>
                  <a  className="dropdown-item item9 ajax">MELTIMEDIA</a>
                  <hr  className="hr"/>
                  <a  className="dropdown-item item8" href="#">Videos</a>
                  <a  className="dropdown-item item8 item16" href="#">Photographs</a>
              </div>
          </li>
          <li  className="nav-item nav-item1 item5 item10">
              <a  className="nav-link dropdown-toggle tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  GET INVOLVED
              </a>
              <div  className="dropdown-menu dropdown-scrollbar2 menu">
              <a  className="dropdown-item  item13" href="#">Careers</a>
              <a  className="dropdown-item  item8" href="#">Donate</a>
              <a  className="dropdown-item  item8" href="#">Events</a>
              <a  className="dropdown-item  item8" href="#">Partner With Us</a>
              <a  className="dropdown-item  item8" href="#">International Scholarship Programmer</a>
              <a  className="dropdown-item  item8 item16" href="#">Contact Us</a>
              </div>
          </li>
          <hr  className="hr1"/>
          <li  className="nav-item nav-item1 item5 item10 item11">
              <a  className="nav-link dropdown-toggle1 tog2" href="#" id="navbardrop" data-toggle="dropdown">
                  <i  className="fas fa-globe icon2 icon5"></i> ENGLISH
              </a>
              <div  className="dropdown-menu dropdown-scrollbar3 menu">
              <a  className="dropdown-item item13" href="#">Arabic</a>
              <a  className="dropdown-item item8" href="#">English</a>
              <a  className="dropdown-item item8" href="#">Francals</a>
              <a  className="dropdown-item item8" href="#">Portugues</a>
              <a  className="dropdown-item item8" href="#">PycckNN</a>
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
