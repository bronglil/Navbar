import React from 'react';
import {
  EastAfrica,
  WestAfrica,
  MiddleEast,
  CentralAsia,
  SouthAsia,
  EastAsia,
  NorthAmerica,
  Europe
} from './CountryData';

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
    <ul >
    <li >
    < a className = "dropdown-item ajax" > EAST AFRICE < /a>
    <hr className = "hr" / >

    </li> {
      EastAfrica.map((data) => (
        <li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    }

    </ul>
    <br / >
    <ul >
    < li >
    < a className = "dropdown-item ajax" > WEST AFRICA < /a> <
    hr className = "hr" / >
    <
    /li> {
      WestAfrica.map((data) => (
         < li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    }

    </ul>
    </div>
    < div className = "col box4" >
    <ul >
    <li >
    <a className = "dropdown-item ajax" > MIDDLE EAST < /a> <
    hr className = "hr" / >
    </li> {
      MiddleEast.map((data) => (
        <li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    } <
    /ul>
    <br / >
    <ul >
    <li >
    < a className = "dropdown-item ajax" > CENTRAL ARIA < /a>
     < hr className = "hr" / >
    </li>
    {
      CentralAsia.map((data) => (
         <li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    }
    </ul>
    </div>
    <div className = "col box5" >
    <ul >
    < li >
    <a className = "dropdown-item ajax" > SOUTH ASIA < /a>
    <hr className = "hr" / >
    </li> {
      SouthAsia.map((data) => (
        <li key={data.id} > < a className = "dropdown-item" href = {data.path} >
         {
          data.info
        }
        < /a></li >
      ))
    } <
    /ul>
    < br / >
    < ul >
    < li >
    < a className = "dropdown-item ajax" > EAST ASIA < /a>
     < hr className = "hr" / >
    < /li> {
      EastAsia.map((data) => (
        <li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    }

    <
    /ul>
    </div>
    <div className = "col box6" >
    <ul >
    <li >
    < a className = "dropdown-item ajax" > NORTH AMERICA < /a> <
    hr className = "hr" / >
    </li> {
      NorthAmerica.map((data) => (
         <li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    } <
    /ul>
    <br / >
    <ul >
    <li >
    <a className = "dropdown-item ajax" > EUROPE < /a>
    <hr className = "hr" / >
    </li> {
      Europe.map((data) => (
        <li key={data.id}> < a className = "dropdown-item"
        href = {data.path} > {
          data.info
        } < /a></li >
      ))
    }

    <
    /ul> <
    /div> <
    /div> <
    /div> <
    /li>



  )
}
export default WhereWeWork;
