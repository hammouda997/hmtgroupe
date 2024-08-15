import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "/images/flora-logo.png" },
    { name: "Partner 2", logo: "/images/gbos-logo.png" },
    { name: "Partner 3", logo: "/images/maya-logo.png" },
  ];

  return (
    <div className="partners-container">
      <h2 className="partners-heading">Our Partners</h2>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div className="partner-item" key={index}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
