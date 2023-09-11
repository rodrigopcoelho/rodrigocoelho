import React , { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import Abouttext from "../components/abouttext";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import '../About.css';


function About() {
  const { scrollYProgress } = useScroll();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [myValue, setMyValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //console.log("Page scroll: ", latest)
    setMyValue(latest);
    setIsHighlighted(true)
  })

  useEffect(() => {
    const about = document.getElementById('about');
    const skill = document.getElementById('skill');
    const edu = document.getElementById('edu');

    if (isHighlighted) {
      about.classList.remove('red');
      skill.classList.remove('red');
      edu.classList.remove('red');
      console.log(myValue);

      if (myValue >= 0 && myValue < 0.35) {
        about.classList.add('red');
      } else if (myValue >= 0.35 && myValue < 0.60) {
        skill.classList.add('red');
      } else if (myValue >= 0.60) {
        edu.classList.add('red');
      }
    } else {
      // Remove 'red' class when isHighlighted is false
      about.classList.remove('red');
      skill.classList.remove('red');
      edu.classList.remove('red');
    }
  }, [isHighlighted, myValue]);



  return (
<>

<motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

       <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

    <div className="backblue">
      <Navbar active={0}  white={0}/>

      <div className="d-flex align-items-center ">

        <div className="full-height-container d-flex flex-column justify-content-around fixed-top">
          <h1 id="about" className="text-start">ABOUT</h1>
          <h1 id="skill" className="text-start" >SKILLS</h1>
          <h1 id="edu" className="text-start ">EDUCATION</h1>
        </div>

        <motion.div className="progress-bar fixed-bottom" style={{ scaleX: scrollYProgress }} />
        <div className="divabout">
        <Abouttext/>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
