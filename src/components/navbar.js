import React from 'react'
import { useNavigate } from "react-router-dom";

function Navbar({ active, white}) {
  const navigate = useNavigate();


  const about = () => {
    navigate("/about");
  }

  const projects = () => {
    navigate("/projects");
  };

  const home = () => {
    navigate("/");
  };


  return (

    <div className="d-flex justify-content-between py-2 px-3 text-white">

    <h1  className={active === 1 ? "pA" : "aA "} onClick={about} style={{cursor: "pointer", color: white === 1 ? "#1820EF" : " "}}>
      ABOUT ME
    </h1>
    <div className='circlehome' style={{cursor: "pointer", backgroundColor: white === 1 ? "#1820EF" : " "}}><h1 className="hA" onClick={home} style={{cursor: "pointer", color: white === 1 ? "#FFF" : " "}}>HOME</h1></div>
    <h1 className={active === 1 ? "aA" : "pA "} onClick={projects} style={{cursor: "pointer"}}>PROJECTS</h1>
  </div>



    )
}

export default Navbar
