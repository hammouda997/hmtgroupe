import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import Collections from '../components/Collections/Collections';

function HomePage() {
  return (
    <div className="Home">
      <HeroSection/>
      <Collections/>
    </div>
  );
}

export default HomePage;
