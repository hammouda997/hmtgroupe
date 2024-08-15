import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Inspiration.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Inspiration = () => {
  const inspirations = useMemo(() => [
    { 
      images: [
        { src: '/inspiration/insp30.jpeg', alt: 'Inspiration 3-1' },
        { src: '/inspiration/insp31.jpeg', alt: 'Inspiration 3-2' },
        { src: '/inspiration/insp32.jpeg', alt: 'Inspiration 3-3' },
        { src: '/inspiration/insp33.jpeg', alt: 'Inspiration 3-4' }
      ], 
      name: 'Inspiration 3', 
      details: 'Details for Inspiration 3' 
    },
    { 
      images: [
        { src: '/inspiration/insp40.jpeg', alt: 'Inspiration 1-1' },
        { src: '/inspiration/insp41.jpeg', alt: 'Inspiration 1-2' },
      ], 
      name: 'Inspiration 1', 
      details: 'Details for Inspiration 1' 
    },
    { 
      images: [
        { src: '/inspiration/insp50.jpeg', alt: 'Inspiration 2-1' },
        { src: '/inspiration/insp51.jpeg', alt: 'Inspiration 2-2' },
        { src: '/inspiration/insp52.jpeg', alt: 'Inspiration 2-3' }
      ], 
      name: 'Inspiration 2', 
      details: 'Details for Inspiration 2' 
    },
    { 
      images: [
        { src: '/inspiration/insp21.png', alt: 'Inspiration 3-1' },
        { src: '/inspiration/insp22.jpeg', alt: 'Inspiration 3-2' },
        { src: '/inspiration/insp23.jpeg', alt: 'Inspiration 3-3' }
      ], 
      name: 'Inspiration 3', 
      details: 'Details for Inspiration 3' 
    },
    { 
      images: [
        { src: '/inspiration/insp1.png', alt: 'Inspiration 4-1' },
        { src: '/inspiration/insp11.jpeg', alt: 'Inspiration 4-2' },
      ], 
      name: 'Inspiration 4', 
      details: 'Details for Inspiration 4' 
    },
    { 
      images: [
        { src: '/inspiration/insp70.jpeg', alt: 'Inspiration 5-1' },
        { src: '/inspiration/insp71.jpeg', alt: 'Inspiration 5-2' },
        { src: '/inspiration/insp72.jpeg', alt: 'Inspiration 5-3' },
      ], 
      name: 'Inspiration 5', 
      details: 'Details for Inspiration 5' 
    },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageIndexes, setImageIndexes] = useState({});
  const [intervalIds, setIntervalIds] = useState({}); 

  const itemsPerPage = 3;
  const totalItems = inspirations.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };

  const getVisibleItems = () => {
    return inspirations.slice(currentIndex, currentIndex + itemsPerPage).concat(
      inspirations.slice(0, Math.max(currentIndex + itemsPerPage - totalItems, 0))
    );
  };

  const inspirationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.inspiration-card');
          cards.forEach((card) => {
            card.classList.add('visible');
          });
        }
      });
    }, { threshold: 0.1 });

    if (inspirationRef.current) {
      observer.observe(inspirationRef.current);
    }

    return () => {
      if (inspirationRef.current) {
        observer.unobserve(inspirationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const intervalId = intervalIds[hoveredIndex];
      if (intervalId) {
        clearInterval(intervalId);
      }
      const newIntervalId = setInterval(() => {
        setImageIndexes((prevIndexes) => {
          const newIndex = (prevIndexes[hoveredIndex] + 1) % inspirations[hoveredIndex].images.length;
          return { ...prevIndexes, [hoveredIndex]: newIndex };
        });
      }, 2000);

      setIntervalIds((prevIds) => ({ ...prevIds, [hoveredIndex]: newIntervalId }));

      return () => clearInterval(newIntervalId);
    }
  }, [hoveredIndex, inspirations, intervalIds]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setImageIndexes((prevIndexes) => ({ ...prevIndexes, [index]: 0 }));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDotClick = (dotIndex) => {
    if (hoveredIndex !== null) {
      setImageIndexes((prevIndexes) => ({ ...prevIndexes, [hoveredIndex]: dotIndex }));
      const intervalId = intervalIds[hoveredIndex];
      if (intervalId) {
        clearInterval(intervalId);
      }
      const newIntervalId = setInterval(() => {
        setImageIndexes((prevIndexes) => {
          const newIndex = (prevIndexes[hoveredIndex] + 1) % inspirations[hoveredIndex].images.length;
          return { ...prevIndexes, [hoveredIndex]: newIndex };
        });
      }, 2000);

      setIntervalIds((prevIds) => ({ ...prevIds, [hoveredIndex]: newIntervalId }));
    }
  };

  return (
    <section className="inspiration-container" ref={inspirationRef}>
      <h2 className="inspiration-title">Inspiration</h2>
      <div className="inspiration-navigation">
        <button className="insp-prev-button" onClick={handlePrev}><FaArrowLeft /></button>
        <div className="inspiration-grid">
          {getVisibleItems().map((item, index) => (
            <div 
              key={index} 
              className="inspiration-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                className="inspiration-image" 
                src={hoveredIndex === index ? item.images[imageIndexes[index] || 0]?.src : item.images[0]?.src} 
                alt={item.images[0]?.alt} 
              />
              <h3 className="inspiration-name">{item.name}</h3>
              <div className="inspiration-details">
                {item.details}
              </div>
              <div className="pagination-dots-insp">
                {item.images.map((_, dotIndex) => (
                  <span 
                    key={dotIndex} 
                    className={`dot-insp ${dotIndex === imageIndexes[index] ? 'active' : ''}`}
                    onClick={() => handleDotClick(dotIndex)}
                  ></span>
                ))}
              </div>
              <button className="details-button">Show Details</button>
            </div>
          ))}
        </div>
        <button className="insp-next-button" onClick={handleNext}><FaArrowRight /></button>
      </div>
    </section>
  );
};

export default Inspiration;
