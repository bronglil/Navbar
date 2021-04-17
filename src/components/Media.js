import React from 'react';

const Media = () => {
  const MediaData = [
    {
      id: 1,
      info: "Our Stories"
    },
    {
       id: 2,
        info: "Project Spotlights"
    },
    {
      id:3,
      info: "Speeches"
    },
    {
      id:4,
        info: "Press Releases"
    },
    {
      id:5,
      info: "Event Summaries"
    },
    ,
    {
      id:6,
        info: "AKDN In The Media"
    },
    {
      id:7,
      info: "COVID-19 Responses"
    },
  ]

  const multimedia = [
    {
      id: 1,
      info: "Photographs"
    },
    {
      id: 2,
      info: "Videos"
    }
  ]
  return(

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        RESOURCES & MEDIA
      </a>
      <div className="dropdown-menu menu5">
        <div className="list-container">
          <div className="col box">
            <ul>
              <li>
                <a className="dropdown-item ajax">WHAT'S NEW</a>
                <hr className="hr"/>
              </li>
              {MediaData.map((data)=>(
                  <li><a className="dropdown-item" href="#">{data.info}</a></li>
              ))}

            </ul>
          </div>
          <div className="col box7">
            <ul>
              <li>
                <a className="dropdown-item ajax">MELTIMEDIA</a>
                <hr className="hr"/>
              </li>
              {
                multimedia.map((data) => (
                  <li><a className="dropdown-item" href="#">{data.info}</a></li>
                ))
              }

            </ul>
          </div>
        </div>
      </div>
    </li>


  )
}
export default Media;
