import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src="https://easyodm.tech/wp-content/uploads/2023/06/ai-in-textile-manufacturing.webp" alt="Machines Sales" className="service-image" />
          <h3 className="service-title">Machines Sales</h3>
          <p className="service-description">
            Discover our range of high-quality machines for various textile manufacturing needs. We assist you in selecting the right equipment for your business and ensure timely delivery to your location.
          </p>
        </div>
        <div className="service-item">
          <img src="https://www.fournisseur-textile.com/wp-content/uploads/2024/03/atelier-textile-tunisie.jpg" alt="Embroidery Solutions" className="service-image" />
          <h3 className="service-title">Embroidery Solutions</h3>
          <p className="service-description">
            We offer expert guidance on selecting and using embroidery machines. Enhance your textile products with our professional advice and support.
          </p>
        </div>
        <div className="service-item">
          <img src="https://www.redwood-ttm.com/img/img-uploads/service_banner/specialist-textile-manufacturing.1632231986.jpg" alt="Manufacturing Solutions" className="service-image" />
          <h3 className="service-title">Manufacturing Solutions</h3>
          <p className="service-description">
            Receive comprehensive support for various aspects of textile manufacturing. Our team provides tailored solutions to optimize your production processes and improve efficiency.
          </p>
        </div>
        <button className="request-quote-button">Request a Quote</button>

      </div>
    </div>
  );
};

export default Services;
