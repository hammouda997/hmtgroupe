
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Prêt à Transformer Votre Production ?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Contactez nos experts pour une consultation personnalisée et découvrez 
          comment nos solutions peuvent optimiser votre processus de production.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
            <Link to="/contact">
              Demander un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
            <a href="tel:+21636264380">
              <Phone className="mr-2 h-5 w-5" />
              Appeler Maintenant
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Phone className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Contact Direct</h3>
            <p className="mb-2">+216 36 264 380</p>
            <p>+216 22 721 372</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Mail className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p>rematex@gnet.tn</p>
            <p className="text-sm opacity-80 mt-2">Réponse sous 24h garantie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
