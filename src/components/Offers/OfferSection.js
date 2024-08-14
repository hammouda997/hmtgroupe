import React from 'react';
import './OffersSection.css'; // Ensure you create and style this CSS file

const OffersSection = () => {
  return (
    <div className="deal-of-the-week">
      <div className="deal-content">
        <p className="deal-tagline">Deal of the Week</p>
        <h2 className="deal-title">Curved Collection for Your Bedroom Get 25% Off</h2>
        <p className="deal-description">
          Subscribe to our Newsletter and get all the latest information and offers
        </p>
        <button className="deal-button">Shop Now</button>
      </div>
      <div className="deal-image">
        <img src="./images/machine4.png" alt="DealImage" />
      </div>
    </div>
  );
};

export default OffersSection;
