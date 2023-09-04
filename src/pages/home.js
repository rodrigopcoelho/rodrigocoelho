import React, {useState, useEffect} from 'react'
import banner from '../assets/svg/banner.svg';
import polaroid from '../assets/img/polaroid.png';
import { useNavigate } from "react-router-dom";


function Home() {
  const [loading, setLoading] = useState(false);

  const [loadingHeight, setLoadingHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingHeight(prevHeight => prevHeight + 70);
    }, 1000)});


  useEffect (() => {
    setLoading (true)
    setTimeout (() => {
    setLoading(false)
  }, 5000)}, []);

  const navigate = useNavigate();

  const projects = () => {
      navigate("/projects");
  }
  const about = () => {
    navigate("/about");
  }





  return (
    <div className='d-flex justify-content-center'>
      {
        loading ?
        <>
        <div className='landing-header'></div>
        <div className='loading-header' style={{ height: `${loadingHeight}px`, transition: 'height 0.5s ease' }}></div>
        </>

        :
        <>
        <div className='d-flex left-side align-items-end '>
        <img src={banner} alt="banner" className='banner'/>

        </div>
        <div className='right-side'>
          <div className='d-flex justify-content-between py-2 px-3'> <h1 onClick={about}>ABOUT ME</h1> <h1 onClick={projects}>PROJECTS</h1> </div>
          <div className='d-flex justify-content-end align-items-center pe-3 pt-3'><p>Born in 2000,<br/>in Lisbon, Portugal.<br/>I believe <br/>web development<br/>can be more<br/>diverse and empowering.<br/>With a mission<br/>to explore<br/>the endless possibilities<br/> of web design,<br/>I am dedicated<br/>to pushing boundaries<br/> and creating innovative solutions.<br/>Through constant experimentation<br/>and a passion for coding,<br/>I aim to redefinethe digital landscape<br/>and deliver unique experiences.</p></div>
          <img src={polaroid} alt="polaroid" className='polaroid'/>
        </div>
        </>
      }

    </div>
  )
}

export default Home
