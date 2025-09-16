import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    common: {
      requestQuote: 'Demander un Devis',
      home: 'Accueil',
      about: 'À Propos',
      products: 'Produits',
      services: 'Services',
      contact: 'Contact',
      heroTitle: 'Powering Precision with',
      heroHighlight: 'Innovation',
      heroDescription: "HMT Sarl, votre partenaire de confiance pour les solutions de marquage laser, découpe laser et impression numérique en Tunisie. Excellence technique garantie.",
      statsExperience: "Années d'expérience",
      statsClients: 'Clients satisfaits',
      statsPartners: 'Partenaires premium',
      ctaProducts: 'Nos Produits',
      viewAllProducts: 'Voir Tous Nos Produits',
      productsSectionTitle: 'Nos Solutions Technologiques',
      productsSectionSubtitle: "Découvrez notre gamme complète de solutions laser et d'impression numérique, conçues pour répondre aux exigences les plus strictes de l'industrie moderne.",
      servicesSectionTitle: "Services d'Excellence",
      servicesSectionSubtitle: "Un accompagnement complet de A à Z pour garantir votre succès avec nos solutions technologiques.",
      partnersTitle: 'Nos Partenaires de Confiance',
      partnersSubtitle: 'Nous travaillons avec les leaders mondiaux de la technologie pour vous offrir les meilleures solutions du marché.',
      contactCtaTitle: 'Prêt à Transformer Votre Production ?',
      contactCtaSubtitle: 'Contactez nos experts pour une consultation personnalisée et découvrez comment nos solutions peuvent optimiser votre processus de production.'
    }
  },
  en: {
    common: {
      requestQuote: 'Request a Quote',
      home: 'Home',
      about: 'About',
      products: 'Products',
      services: 'Services',
      contact: 'Contact',
      heroTitle: 'Powering Precision with',
      heroHighlight: 'Innovation',
      heroDescription: 'HMT Sarl, your trusted partner for laser marking, cutting and digital printing in Tunisia. Technical excellence guaranteed.',
      statsExperience: 'Years of experience',
      statsClients: 'Happy clients',
      statsPartners: 'Premium partners',
      ctaProducts: 'Our Products',
      viewAllProducts: 'View All Products',
      productsSectionTitle: 'Our Technology Solutions',
      productsSectionSubtitle: 'Discover our complete range of laser and digital printing solutions, designed to meet the highest standards of modern industry.',
      servicesSectionTitle: 'Excellence Services',
      servicesSectionSubtitle: 'End-to-end support to guarantee your success with our technology solutions.',
      partnersTitle: 'Our Trusted Partners',
      partnersSubtitle: 'We work with global technology leaders to deliver the best solutions.',
      contactCtaTitle: 'Ready to Transform Your Production?',
      contactCtaSubtitle: 'Contact our experts for a personalized consultation and discover how our solutions can optimize your production process.'
    }
  }
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }
  });

export default i18n;


