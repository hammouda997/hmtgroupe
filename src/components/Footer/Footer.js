import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
        <img src="/images/logo3.png" alt="Logo"/>
        </div>
        {/* <div className="footer-quick-links">
          <ul>
            <li><a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service" aria-label="Terms of Service">Terms of Service</a></li>
            <li><a href="/contact-us" aria-label="Contact Us">Contact Us</a></li>
          </ul>
        </div> */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-newsletter">
          <p>Subscribe to our newsletter for updates:</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
