import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = ({ scrollToContact }) => {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <h2 className="services-heading">{t('services.heading')}</h2>
      <div className="services-list">
        <div className="service-item">
          <img
            src="https://easyodm.tech/wp-content/uploads/2023/06/ai-in-textile-manufacturing.webp"
            alt={t('services.machinesSales.title')}
            className="service-image"
          />
          <h3 className="service-title">{t('services.machinesSales.title')}</h3>
          <p className="service-description">
            {t('services.machinesSales.description')}
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://www.fournisseur-textile.com/wp-content/uploads/2024/03/atelier-textile-tunisie.jpg"
            alt={t('services.embroiderySolutions.title')}
            className="service-image"
          />
          <h3 className="service-title">{t('services.embroiderySolutions.title')}</h3>
          <p className="service-description">
            {t('services.embroiderySolutions.description')}
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://www.redwood-ttm.com/img/img-uploads/service_banner/specialist-textile-manufacturing.1632231986.jpg"
            alt={t('services.manufacturingSolutions.title')}
            className="service-image"
          />
          <h3 className="service-title">{t('services.manufacturingSolutions.title')}</h3>
          <p className="service-description">
            {t('services.manufacturingSolutions.description')}
          </p>
        </div>
        <button className="request-quote-button" onClick={scrollToContact}>
          {t('services.requestQuote')}
        </button>
      </div>
    </div>
  );
};

export default Services;
