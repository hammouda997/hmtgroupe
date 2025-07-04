
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 text-white px-3 py-1 font-bold text-lg">
                HMT
              </div>
              <span className="font-bold text-lg">HMT Sarl</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leader en solutions de marquage laser, découpe laser et impression numérique en Tunisie.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span>Avenue de l'Environnement, 5070 Ksar Hellal, TUNISIA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span>+216 36 264 380</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span>rematex@gnet.tn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Produits</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Produits</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Marquage Laser</li>
              <li>Découpe Laser</li>
              <li>Impression Numérique</li>
              <li>Solutions Industrielles</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Partenaires</h3>
            <div className="space-y-2">
              <div className="bg-white text-gray-900 px-3 py-2 rounded font-bold text-center">GBOS</div>
              <div className="bg-white text-gray-900 px-3 py-2 rounded font-bold text-center">MAYA</div>
              <div className="bg-white text-gray-900 px-3 py-2 rounded font-bold text-center">FLORA</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HMT Sarl. Tous droits réservés. | Conçu avec excellence technique.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
