import React from 'react';

const WhoWeAre = () => {
  const whoData = [{
      id: 1,
      info: "His Highness The Age Khan"
    },
    {
      id: 2,
      info: "Leadersship"
    },
    {
      id: 3,
      info: "Awards Received By AKDH"
    },
    {
      id: 4,
      info: "Our Partners"
    },
    {
      id: 5,
      info: "Factsheet"
    }, ,
    {
      id: 6,
      info: "Frequently Asked Questions"
    },
    {
      id: 7,
      info: "Contact Us"
    },
  ]

  return (

    <
    li className = "nav-item dropdown" >
    <
    a className = "nav-link dropdown-toggle"
    href = "#"
    id = "navbardrop"
    data-toggle = "dropdown" >
    WHO WE ARE <
    /a> <
    div className = "dropdown-menu" >
    <
    div className = "list-container" >
    <
    div className = "col box" >
    <
    ul > {
      whoData.map((data) => ( <
        li > < a className = "dropdown-item"
        href = "#" > {
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
export default WhoWeAre;
