import React, { useRef } from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Collections from '../components/Collections/Collections';
import FeaturedProducts from '../components/Feature/feature';
import Inspiration from '../components/Inspiration/Inspiration';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import CustomerFeedback from '../components/CustomerFeedback/CustomerFeedback';
import Partners from '../components/Partners/Partners';
import ContactSection from '../components/ContactSection/ContactSection';
import SidebarIndicator from '../components/SidebarIndicator/SidebarIndicator'; 
import Advantages from '../components/Advantages/Advantages';
import Identity from '../components/AboutUs/Identity';
import Equipement from '../components/Equipement/Equipement';

const sections = [
  { id: 'hero-section', label: 'Home' },
  { id: 'services', label: 'Services' },

  { id: 'aboutus', label: 'About us' },

  { id: 'equipement', label: 'Equipement' },

  { id: 'partners', label: 'Partners' },
  { id: 'collections', label: 'Collections' },
  { id: 'avantage', label: 'Avantage' },
  { id: 'featured-products', label: 'Featured Products' },

  { id: 'contact-section', label: 'Contact Us' },

];

function HomePage() {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <SidebarIndicator sections={sections} />
      <div id="hero-section">
        <HeroSection />
      </div>
   
      <div id="services">
        <Services scrollToContact={scrollToContact} />
      </div>
      <div id="aboutus">
        <Identity />
      </div>
      <div id="equipement">
      <Equipement />
      </div>
   
      {/* <div id="inspiration">
        <Inspiration />
      </div> */}
      <div id="partners">
        <Partners />
      </div>
  
      <div id="collections">
        <Collections />
      </div>
   
      <div id="avantage">
        <Advantages />
      </div>
      <div id="featured-products">
        <FeaturedProducts />
      </div>
           {/* <div id="customer-feedback">
        <CustomerFeedback />
      </div> */}
      {/* <div id="about-us">
        <AboutUs />
      </div> */}
      <div id="contact-section" ref={contactSectionRef}>
        <ContactSection />
      </div>
      <div id="footer-section"></div>
    </div>
  );
}

export default HomePage;
