import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Collections from '../components/Collections/Collections';
import FeaturedProducts from '../components/Feature/feature';
import Inspiration from '../components/Inspiration/Inspiration';
function HomePage() {
  return (
    <div >
      <HeroSection  />
      <Inspiration  />
      <Collections  />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
