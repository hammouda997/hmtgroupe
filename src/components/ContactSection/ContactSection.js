import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">Have questions or need help with an order? Reach out to us!</p>
          <p className="contact-details">
            <strong>Email:</strong> <a href="mailto:rematex@gnet.tn">rematex@gnet.tn</a>
          </p>
          <p className="contact-details">
            <strong>Phone:</strong> <a href="tel:+21636264380">+216 36 264 380</a>
          </p>
          <p className="contact-details">Address: 123 Embroidery Lane, Craft City, CA 12345</p>
          <div className="map-container">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12860.09076915256!2d10.8821156!3d35.6537729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3d56e4f6cb49b%3A0xa273dbe592a89257!2s123%20Embroidery%20Lane%2C%20Craft%20City%2C%20CA%2012345!5e0!3m2!1sen!2sus!4v1693999904087!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
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
