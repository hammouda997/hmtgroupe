  import React, { useState, useEffect, useRef, useMemo } from 'react';
  import './Inspiration.css';
  import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

  const Inspiration = () => {
    const inspirations = useMemo(() => [
      { 
        images: [
          { src: '/inspiration/insp30.jpeg', alt: 'Inspiration 2-1' },
          { src: '/inspiration/insp31.jpeg', alt: 'Inspiration 2-2' },
          { src: '/inspiration/insp32.jpeg', alt: 'Inspiration 2-3' },
          { src: '/inspiration/insp33.jpeg', alt: 'Inspiration 2-4' }
        ], 
        name: 'Inspiration 3', 
        details: 'Details for Inspiration 3' 
      },
      { 
        images: [
          { src: '../inspiration/insp40.jpeg', alt: 'Inspiration 1-1' },
          { src: './inspiration/insp41.jpeg', alt: 'Inspiration 1-2' },
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
          { src: '/inspiration/insp21.png', alt: 'Inspiration 2-1' },
          { src: '/inspiration/insp22.jpeg', alt: 'Inspiration 2-2' },
          { src: '/inspiration/insp23.jpeg', alt: 'Inspiration 2-3' }
        ], 
        name: 'Inspiration 3', 
        details: 'Details for Inspiration 3' 
      },
      { 
        images: [
          { src: '/inspiration/insp1.png', alt: 'Inspiration 2-1' },
          { src: '/inspiration/insp11.jpeg', alt: 'Inspiration 2-2' },
        ], 
        name: 'Inspiration 3', 
        details: 'Details for Inspiration 3' 
      },
      { 
        images: [
          { src: '/inspiration/insp70.jpeg', alt: 'Inspiration 2-1' },
          { src: '/inspiration/insp71.jpeg', alt: 'Inspiration 2-2' },
          { src: '/inspiration/insp72.jpeg', alt: 'Inspiration 2-2' },

        ], 
        name: 'Inspiration 3', 
        details: 'Details for Inspiration 3' 
      },
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imageIndex, setImageIndex] = useState(0); // For cycling through images on hover

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

    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
      setImageIndex(0); 
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };

    useEffect(() => {
      if (hoveredIndex !== null) {
        const interval = setInterval(() => {
          setImageIndex((prevIndex) => (prevIndex + 1) % inspirations[hoveredIndex].images.length);
        }, 2000); 

        return () => clearInterval(interval);
      }
    }, [hoveredIndex, inspirations]);

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
                  src={hoveredIndex === index ? item.images[imageIndex].src : item.images[0].src} 
                  alt={item.images[0].alt} 
                />
                <h3 className="inspiration-name">{item.name}</h3>
                <div className="inspiration-details">
                  {item.details}
                </div>
                <div className="pagination-dots-insp inspdots">
                  {item.images.map((_, dotIndex) => (
                    <span 
                      key={dotIndex} 
                      className={`dot-insp ${dotIndex === imageIndex ? 'active' : ''}`}
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
