import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

function Landing() {
  const [loadingHeight, setLoadingHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingHeight(prevHeight => prevHeight + 70);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      clearInterval(interval); // Clear the interval
      navigate("/home"); // Redirect to a new page
    }, 13000);


    return () => clearInterval(interval);
  }, []);





  return (
    <>
      <div className='landing-header'></div>
      <div className='loading-header' style={{ height: `${loadingHeight}px`, transition: 'height 0.5s ease' }}></div>
    </>
  );
}

export default Landing;
