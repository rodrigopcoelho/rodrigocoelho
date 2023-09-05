import React from 'react'
import Scene from './Scene';
import { useNavigate } from "react-router-dom";


function Projects() {
  const navigate = useNavigate();


  const about = () => {
    navigate("/about");
  }

  return (
    <div>
    <div className='d-flex justify-content-between py-2 px-3 bg-transparent'><h1 className="red aA">PROJECTS</h1>  <h1 className="pA" onClick={about} style={{cursor: "pointer", color: "black"} } >ABOUT ME</h1>  </div>
    <Scene />
    </div>
  )
}

export default Projects
