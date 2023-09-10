import React , { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import transition from '../transition';

function About() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (isHighlighted) {
      // Add the CSS class when isHighlighted is true
      // You can use a class name or inline styles as desired
      document.getElementById('elementId').classList.add('red');

      // Remove the CSS class after a delay (e.g., 2 seconds)
      const timeoutId = setTimeout(() => {
        document.getElementById('elementId').classList.remove('red');
        setIsHighlighted(false);
      }, 2000);

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [isHighlighted]);

  //setIsHighlighted(true);

  return (

    <div className="backblue">
      <Navbar active={0}  white={0}/>
      <div className="d-flex align-items-center ">
        <div className="full-height-container d-flex flex-column justify-content-around px-3 pb-5">
          <h1 className="text-start">ABOUT</h1>
          <h1 className="text-start">SKILLS</h1>
          <h1 className="text-start pb-3 mb-5">EDUCATION</h1>
        </div>

        <div className="divabout pb-5">
          <h3>ABOUT</h3>
          <p>
            Full-Stack Developer with extensive experience as a front-end and
            web designer, with a degree in Technology and Communication. <br/><br/>I have
            experience in various projects. The ability to quickly learn and
            apply new technologies is one of my strongest assets.<br/><br/> A degree and
            an intensive bootcamp taught me the importance of priorities and
            teamwork. I am a diligent, creative, and curious professional who
            always enjoys learning more. I have a positive approach and enjoy
            challenges that allow me to enhance my skills.<br/><br/>
          </p>
          <h3>SKILLS</h3>
          <p>
            <span className="red">Programming Languages</span><br/> Ruby, JavaScript, HTML, CSS, Python, C#,
            kotlin<br/><br/> <span className="red">Frameworks/Libraries</span><br/> React, Rails, Bootstrap, Ajax, Jetpack
            Compose<br/><br/> <span className="red">Databases/ORM</span><br/> SQL, FireBase, Neo4j, SQLite, Postgresql,
            Node.js<br/><br/> <span className="red">Other</span><br/> Git, GitHub, Heroku, REST API, Figma, Blender, Unity3d
            <br/><br/></p>
          <h3>EDUCATION</h3>
          <p>Le Wagon</p>
          <p>Full Stack Web Development<br/><br/></p>
          <p></p>
          <p>Aveiro University </p>
          <p className="pb-5 mb-5">Degree in Multimedia and Communication Technologies</p>
        </div>
      </div>
    </div>
  );
}

export default transition(About);
