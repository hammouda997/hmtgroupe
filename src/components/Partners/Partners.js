import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Partners.css';
import { PrevArrow, NextArrow } from './Arrows'; // Import your custom arrow components

const Partners = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const partners = [
    { name: "Partner 1", logo: "/images/flora-logo.png" },
    { name: "Partner 2", logo: "/images/gbos-logo.png" },
    { name: "Partner 3", logo: "/images/brother_logo.png" },
    { name: "Partner 4", logo: "/images/maya-logo.png" },
    { name: "Partner 6", logo: "/images/juki-logo.png" },
    { name: "Partner 7", logo: "/images/tsudkoma-logo.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enables centering of the active slide
    centerPadding: '0', // Padding around the center slide
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  

  // Function to handle the next slide
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  // Function to handle the previous slide
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="partners-container">
      <Slider {...settings} ref={sliderRef} className="partners-list">
        {partners.map((partner, index) => (
          <div className="partner-item" key={index}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default Partners;
