import { useState, useEffect, useCallback } from 'react';
import { translationService } from '@/lib/translation';

export const useAutoTranslate = <T>(data: T, language: string): T => {
  const [translatedData, setTranslatedData] = useState<T>(data);
  const [isTranslating, setIsTranslating] = useState(false);

  const translateData = useCallback(async () => {
    if (!data || language === 'fr') {
      setTranslatedData(data);
      return;
    }

    setIsTranslating(true);
    try {
      const translated = await translationService.translateObject(data, language);
      setTranslatedData(translated);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedData(data);
    } finally {
      setIsTranslating(false);
    }
  }, [data, language]);

  useEffect(() => {
    translateData();
  }, [translateData]);

  return translatedData;
};

export const useTranslation = () => {
  const [language, setLanguage] = useState('fr');
  
  const changeLanguage = useCallback((lang: string) => {
    setLanguage(lang);
    translationService.setLanguage(lang);
  }, []);

  return {
    language,
    changeLanguage,
    t: (key: string) => {
      // Simple translation function for static keys
      const translations: Record<string, Record<string, string>> = {
        fr: {
          requestQuote: 'Demander un Devis',
          home: 'Accueil',
          about: 'À Propos',
          products: 'Produits',
          services: 'Services',
          contact: 'Contact'
        },
        en: {
          requestQuote: 'Request a Quote',
          home: 'Home',
          about: 'About',
          products: 'Products',
          services: 'Services',
          contact: 'Contact'
        }
      };
      return translations[language]?.[key] || key;
    }
  };
};
