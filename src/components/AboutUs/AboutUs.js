import React from 'react';
import './AboutUs.css';
import Advantages from '../Advantages/Advantages';
import Identity from './Identity';
const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89JRMI6uIJvtLZSebYYNLn3Yaxh36gYmGoA&s")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <>
      <div style={backgroundStyle}>
        <div>
          Votre productivité, votre qualité, et votre réussite sont notre mission.
        </div>
      </div>
  <Identity/>
      <Advantages/>
    </>
  );
};

export default AboutUs;
