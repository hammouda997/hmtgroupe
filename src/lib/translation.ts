// Universal auto-translation service for ANY text content
class TranslationService {
  private cache = new Map<string, string>();
  private currentLanguage = 'fr';
  private isTranslating = false;
  
  // Simple fallback translations for common terms
  private fallbackTranslations: Record<string, string> = {
    'Services d\'Excellence': 'Excellence Services',
    'Un accompagnement complet de A à Z pour garantir votre succès avec nos solutions technologiques.': 'Complete support from A to Z to guarantee your success with our technological solutions.',
    'Nos Partenaires de Confiance': 'Our Trusted Partners',
    'Nous travaillons avec les leaders mondiaux de la technologie pour vous offrir les meilleures solutions du marché.': 'We work with world technology leaders to offer you the best solutions on the market.',
    'Prêt à Transformer Votre Production ?': 'Ready to Transform Your Production?',
    'Contactez nos experts pour une consultation personnalisée et découvrez comment nos solutions peuvent optimiser votre processus de production.': 'Contact our experts for a personalized consultation and discover how our solutions can optimize your production process.',
    'Demander un Devis': 'Request a Quote',
    'Appeler Maintenant': 'Call Now',
    'Nos Solutions Technologiques': 'Our Technological Solutions',
    'Accompagner nos clients dans leur transformation digitale en proposant des technologies de pointe et un service d\'exception.': 'Supporting our clients in their digital transformation by offering cutting-edge technologies and exceptional service.',
    'Contactez-Nous': 'Contact Us',
    'Notre Leadership': 'Our Leadership',
    'Notre Parcours d\'Excellence': 'Our Excellence Journey',
    'Nos Valeurs': 'Our Values',
    'Ces valeurs guident chacune de nos actions et définissent notre approche unique du service client.': 'These values guide each of our actions and define our unique approach to customer service.',
    'Vision': 'Vision',
    'Mission': 'Mission',
    'Excellence': 'Excellence',
    'Expertise': 'Expertise',
    'Innovation': 'Innovation',
    'Croissance': 'Growth',
    'Téléphone': 'Phone',
    'Email': 'Email',
    'Adresse': 'Address',
    'Horaires': 'Hours',
    'Premium Partner': 'Premium Partner',
    'Certification Qualité': 'Quality Certification',
    'Nos partenariats nous permettent de garantir des standards de qualité internationaux et un support technique de premier niveau.': 'Our partnerships allow us to guarantee international quality standards and first-class technical support.',
    'HMT Technology': 'HMT Technology',
    'Precision Engineering': 'Precision Engineering'
  };

  setLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  getLanguage() {
    return this.currentLanguage;
  }

  // Check if text should be translated (skip URLs, emails, phone numbers, etc.)
  private shouldTranslate(text: string): boolean {
    if (!text || text.trim().length === 0) return false;
    
    // Skip if it's a URL, email, phone number, or very short text
    const urlRegex = /^https?:\/\//;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[0-9\s\-()]+$/;
    const shortText = text.trim().length < 3;
    
    return !urlRegex.test(text) && !emailRegex.test(text) && !phoneRegex.test(text) && !shortText;
  }

  // Auto-translate text using Google Translate API (free tier)
  async translateText(text: string, targetLang: string): Promise<string> {
    if (!text || text.trim() === '' || !this.shouldTranslate(text)) return text;
    
    // Don't translate if already in target language
    if (targetLang === 'fr') return text;
    
    // Check cache first
    const cacheKey = `${text}_${targetLang}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }
    
    // Check fallback translations first
    if (this.fallbackTranslations[text]) {
      const translation = this.fallbackTranslations[text];
      this.cache.set(cacheKey, translation);
      return translation;
    }

    try {
      // Use Google Translate API (free tier allows 100 requests per day)
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (!response.ok) {
        console.warn(`Translation API error: ${response.status} ${response.statusText}`);
        return text;
      }
      
      const responseText = await response.text();
      
      // Check if response is HTML (error page)
      if (responseText.trim().startsWith('<')) {
        console.warn('Translation API returned HTML instead of JSON');
        return text;
      }
      
      const data = JSON.parse(responseText);
      
      if (data && data[0] && data[0][0] && data[0][0][0]) {
        const translation = data[0][0][0];
        this.cache.set(cacheKey, translation);
        return translation;
      }
    } catch (error) {
      console.warn('Translation failed:', error);
    }

    // Fallback: return original text
    return text;
  }

  // Batch translate multiple texts for better performance
  async translateBatch(texts: string[], targetLang: string): Promise<string[]> {
    if (targetLang === 'fr') return texts;
    
    const results: string[] = [];
    const uncachedTexts: string[] = [];
    const uncachedIndices: number[] = [];
    
    // Check cache first
    texts.forEach((text, index) => {
      const cacheKey = `${text}_${targetLang}`;
      if (this.cache.has(cacheKey)) {
        results[index] = this.cache.get(cacheKey)!;
      } else if (this.shouldTranslate(text)) {
        uncachedTexts.push(text);
        uncachedIndices.push(index);
        results[index] = text; // placeholder
      } else {
        results[index] = text; // don't translate
      }
    });
    
    // Translate uncached texts one by one to avoid batch issues
    if (uncachedTexts.length > 0) {
      for (let i = 0; i < uncachedTexts.length; i++) {
        const text = uncachedTexts[i];
        const originalIndex = uncachedIndices[i];
        
        // Check fallback translations first
        if (this.fallbackTranslations[text]) {
          const translation = this.fallbackTranslations[text];
          results[originalIndex] = translation;
          this.cache.set(`${text}_${targetLang}`, translation);
          continue;
        }
        
        // Add delay between API calls to avoid rate limiting
        if (i > 0) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        try {
          const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, {
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });
          
          if (!response.ok) {
            console.warn(`Translation API error: ${response.status} ${response.statusText}`);
            results[originalIndex] = text;
            continue;
          }
          
          const responseText = await response.text();
          
          // Check if response is HTML (error page)
          if (responseText.trim().startsWith('<')) {
            console.warn('Translation API returned HTML instead of JSON');
            results[originalIndex] = text;
            continue;
          }
          
          const data = JSON.parse(responseText);
          
          if (data && data[0] && data[0][0] && data[0][0][0]) {
            const translation = data[0][0][0];
            results[originalIndex] = translation;
            this.cache.set(`${text}_${targetLang}`, translation);
          } else {
            results[originalIndex] = text;
          }
        } catch (error) {
          console.warn('Translation failed for:', text, error);
          results[originalIndex] = text; // fallback to original
        }
      }
    }
    
    return results;
  }

  // Translate an object recursively - handles ANY content dynamically
  async translateObject(obj: unknown, targetLang: string): Promise<unknown> {
    if (typeof obj === 'string') {
      return await this.translateText(obj, targetLang);
    }
    
    if (Array.isArray(obj)) {
      // For arrays, translate each item individually
      const result: unknown[] = [];
      
      for (const item of obj) {
        if (typeof item === 'string') {
          result.push(await this.translateText(item, targetLang));
        } else {
          result.push(await this.translateObject(item, targetLang));
        }
      }
      
      return result;
    }
    
    if (obj && typeof obj === 'object') {
      const translated: Record<string, unknown> = {};
      
      // Translate each property individually
      for (const [key, value] of Object.entries(obj)) {
        // Skip certain keys that shouldn't be translated
        if (['_id', 'id', 'url', 'image', 'images', 'icon', 'link', 'email', 'phone', 'address', 'postalCode', 'country', 'city', 'street', 'cloudinaryPublicId', 'filename', 'originalName', 'mimetype', 'size', 'path', 'publicId'].includes(key)) {
          translated[key] = value;
        } else if (typeof value === 'string') {
          translated[key] = await this.translateText(value, targetLang);
        } else {
          translated[key] = await this.translateObject(value, targetLang);
        }
      }
      
      return translated;
    }
    
    return obj;
  }

  // Real-time translation for any text content
  async translateAnyText(text: string, targetLang: string): Promise<string> {
    return await this.translateText(text, targetLang);
  }
}

export const translationService = new TranslationService();
