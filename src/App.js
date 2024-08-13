import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import Collections from './components/Collections/Collections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Collections/>
    </div>
  );
}

export default App;
