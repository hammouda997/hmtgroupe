import React from 'react';
import './ContactSection.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const ContactSection = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="contact-container">
      <h2 className="contact-heading">{t('contactSection.heading')}</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">{t('contactSection.text')}</p>
          <p className="contact-details">
            <strong>{t('contactSection.emailLabel')}:</strong> <a href="mailto:rematex@gnet.tn">rematex@gnet.tn</a>
          </p>
          <p className="contact-details">
            <strong>{t('contactSection.phoneLabel')}:</strong> <a href="tel:+21636264380">+216 36 264 380</a>
          </p>
          <p className="contact-details">{t('contactSection.address')}: 123 Embroidery Lane, Craft City, CA 12345</p>
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
          <input type="text" name="name" placeholder={t('contactSection.placeholderName')} className="contact-input" />
          <input type="email" name="email" placeholder={t('contactSection.placeholderEmail')} className="contact-input" />
          <textarea name="message" placeholder={t('contactSection.placeholderMessage')} className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">{t('contactSection.sendMessage')}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
