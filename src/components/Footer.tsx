
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { TranslatedText } from "@/components/TranslatedText";
import { useCompany } from "@/hooks/useCMS";
import { memo, useMemo } from "react";

const Footer = memo(() => {
  const { data: company } = useCompany();
  const partners = useMemo(() => company?.partners || [], [company?.partners]);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="bg-red-600 text-white px-2 sm:px-3 py-1 font-bold text-base sm:text-lg">
                HMT
              </div>
              <span className="font-bold text-base sm:text-lg">HMT Sarl</span>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              <TranslatedText as="span">Leader en solutions de marquage laser, découpe laser et impression numérique en Tunisie.</TranslatedText>
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/rWDzsgjLwfKjNCRx8?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="break-words hover:text-red-400 transition-colors"
                >
                  Avenue de l'Environnement, 5070 Ksar Hellal, TUNISIA
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 flex-shrink-0" />
                <span>+216 36 264 380</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 flex-shrink-0" />
                <span>contact@hmtgroupe.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              <TranslatedText as="span">Liens Rapides</TranslatedText>
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"><TranslatedText as="span">Accueil</TranslatedText></Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"><TranslatedText as="span">À Propos</TranslatedText></Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"><TranslatedText as="span">Produits</TranslatedText></Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"><TranslatedText as="span">Services</TranslatedText></Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"><TranslatedText as="span">Contact</TranslatedText></Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              <TranslatedText as="span">Nos Produits</TranslatedText>
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><TranslatedText as="span">Marquage Laser</TranslatedText></li>
              <li><TranslatedText as="span">Découpe Laser</TranslatedText></li>
              <li><TranslatedText as="span">Impression Numérique</TranslatedText></li>
              <li><TranslatedText as="span">Solutions Industrielles</TranslatedText></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              <TranslatedText as="span">Nos Partenaires</TranslatedText>
            </h3>
            <div className="space-y-2">
              {partners.length > 0 ? (
                partners.map((partner: any, index: number) => (
                  <div key={index} className="bg-white text-gray-900 px-2 sm:px-3 py-1.5 sm:py-2 rounded font-bold text-center flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                    {partner.logo && partner.logo.startsWith('http') ? (
                      <>
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-4 sm:h-6 w-auto object-contain"
                          loading="lazy"
                        />
                        <span>{partner.name || 'Partner'}</span>
                      </>
                    ) : (
                      <span>{partner.name || 'Partner'}</span>
                    )}
                  </div>
                ))
              ) : (
                // Fallback to hardcoded partners if no data from CMS
                <>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded font-bold text-center">GBOS</div>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded font-bold text-center">MAYA</div>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded font-bold text-center">FLORA</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">
            <span>&copy; 2024 HMT Sarl. <TranslatedText as="span">Tous droits réservés. | Conçu avec excellence technique.</TranslatedText></span>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
