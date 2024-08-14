import React, { useState, useEffect, useRef } from 'react';
import './Inspiration.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Inspiration = () => {
  const inspirations = [
    { src: './images/machine.png', alt: 'Inspiration 1', name: 'Inspiration 1', details: 'Details for Inspiration 1' },
    { src: './images/machine2.png', alt: 'Inspiration 2', name: 'Inspiration 2', details: 'Details for Inspiration 2' },
    { src: './images/machine3.png', alt: 'Inspiration 3', name: 'Inspiration 3', details: 'Details for Inspiration 3' },
    { src: './images/machine4.png', alt: 'Inspiration 4', name: 'Inspiration 4', details: 'Details for Inspiration 4' },
    { src: './images/machine5.png', alt: 'Inspiration 5', name: 'Inspiration 5', details: 'Details for Inspiration 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalItems = inspirations.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? totalItems - itemsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= totalItems ? 0 : newIndex;
    });
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

  return (
    <section className="inspiration-container" ref={inspirationRef}>
      <h2 className="inspiration-title">Inspiration</h2>
      <div className="inspiration-navigation">
        <button className="insp-prev-button" onClick={handlePrev}><FaArrowLeft /></button>
        <div className="inspiration-grid">
          {getVisibleItems().map((item, index) => (
            <div key={index} className="inspiration-card">
              <img className="inspiration-image" src={item.src} alt={item.alt} />
              <h3 className="inspiration-name">{item.name}</h3>
              <div className="inspiration-details">
                {item.details}
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
