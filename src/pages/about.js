import React from 'react'
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const projects = () => {
      navigate("/projects");
  }
  const about = () => {
    navigate("/about");
  }
  return (
    <div className='backblue'>
      <div className='d-flex justify-content-between py-2 px-3 text-white'> <h1 className="red" onClick={about}>ABOUT ME</h1> <h1  onClick={projects}>PROJECTS</h1> </div>
      <div className='d-flex align-items-center '>

      <div className="full-height-container d-flex flex-column justify-content-around px-3">
        <h1 className='text-start'>ABOUT</h1>
        <h1 className='text-start'>SKILLS</h1>
        <h1 className='text-start'>EDUCATION</h1>
      </div>

      <div className='divabout '>
        <h3>ABOUT</h3>
        <p>Full-Stack Developer with extensive experience as a front-end and web designer, with a degree in Technology and Communication.

I have experience in various projects. The ability to quickly learn and apply new technologies is one of my strongest assets.

A degree and an intensive bootcamp taught me the importance of priorities and teamwork. I am a diligent, creative, and curious professional who always enjoys learning more. I have a positive approach and enjoy challenges that allow me to enhance my skills.</p>
        <h3>SKILLS</h3>
        <p>Programming Languages
Ruby, JavaScript, HTML, CSS, Python, C#, kotlin

Frameworks/Libraries
React, Rails, Bootstrap, Ajax, Jetpack Compose

Databases/ORM
SQL, FireBase, Neo4j, SQLite, Postgresql, Node.js

other
Git, GitHub, Heroku, REST API, Figma, Blender, Unity3d</p>
        <h3>EDUCATION</h3>
        <p>Le Wagon</p>
        <p>Full Stack Web Development</p>
        <p></p>
        <p>Aveiro University </p>
        <p>Degree in Multimedia and Communication Technologies</p>
      </div>

      </div>

    </div>
  )
}

export default About
