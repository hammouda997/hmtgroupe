import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-content">
        <img 
          src="https://www.suntech-machine.com/uploads/image/20230507/20230507204259_89901.jpg" 
          alt="HMT Groupe" 
          className="about-us-image"
        />
        <p className="about-us-text">
          Welcome to HMT Groupe! We specialize in providing high-quality textile machinery and solutions tailored to your manufacturing needs. Our commitment to excellence drives us to offer a wide range of advanced equipment, ensuring you have the best tools to achieve outstanding results.
        </p>
        <p className="about-us-text">
          Our mission is to support your business with top-notch machinery and expert advice. Whether you’re looking for innovative embroidery machines, production equipment, or comprehensive manufacturing solutions, HMT Groupe is here to deliver the right solutions to enhance your operations.
        </p>
        <p className="about-us-text">
          Thank you for choosing HMT Groupe. We are dedicated to helping you optimize your textile manufacturing processes and achieve success with our reliable and efficient machinery.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
