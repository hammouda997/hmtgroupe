import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">Have questions or need help with an order? Reach out to us!</p>
          <p className="contact-details">Email: info@yourbrand.com</p>
          <p className="contact-details">Phone: +1 234 567 890</p>
          <p className="contact-details">Address: 123 Embroidery Lane, Craft City, CA 12345</p>
        </div>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" className="contact-input" />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" />
          <textarea name="message" placeholder="Your Message" className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
