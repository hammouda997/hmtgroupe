import React, { useState } from 'react';
import './Collections.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Collections = () => {
  const collections = [
    {
      src: './images/machine.png',
      alt: 'Collection 1',
      name: 'Collection 1'
    },
    {
      src: './images/machine2.png',
      alt: 'Collection 2',
      name: 'Collection 2'
    },
    {
      src: './images/machine3.png',
      alt: 'Collection 3',
      name: 'Collection 3'
    },
    {
      src: './images/machine4.png',
      alt: 'Collection 4',
      name: 'Collection 4'
    },
    {
      src: './images/machine5.png',
      alt: 'Collection 5',
      name: 'Collection 5'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalItems = collections.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate the new index
      const newIndex = prevIndex - itemsPerPage;
      // If the new index is less than 0, wrap around to the end
      return newIndex < 0 ? totalItems - itemsPerPage : newIndex;
    });
  };
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      // Wrap around to the beginning if the new index exceeds the total number of items
      return newIndex >= totalItems ? 0 : newIndex;
    });
  };
  

  const getVisibleItems = () => {
    return collections.slice(currentIndex, currentIndex + itemsPerPage).concat(
      collections.slice(0, Math.max(currentIndex + itemsPerPage - totalItems, 0))
    );
  };

  return (
    <section className="collections-container">
      <h2 className="collections-title">Collections</h2>
      <div className="collections-navigation">
        <button className="nav-button prev-button" onClick={handlePrev}><FaArrowLeft/></button>
        <div className="collections-grid">
          {getVisibleItems().map((item, index) => (
            <div key={index} className="collection-card">
              <img className="collection-image" src={item.src} alt={item.alt} />
              <h3 className="collection-name">{item.name}</h3>
            </div>
          ))}
        </div>
        <button className="nav-button next-button" onClick={handleNext}><FaArrowRight/></button>
      </div>
    </section>
  );
};

export default Collections;
