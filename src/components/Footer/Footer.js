import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com"><FaFacebookF /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span><a href="/privacy-policy">Privacy & Policy</a> | 
               <a href="/terms-of-service">Terms of Service</a></span> 
        <span>Designed and Developed by Zemton Studio</span> 
      </div> 
    </footer> 
  );
};

export default Footer;
