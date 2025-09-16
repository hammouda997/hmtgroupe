
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import { useTranslationContext } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/components/TranslatedText";

const ContactCTA = () => {
  const { t } = useTranslationContext();
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <TranslatedText as="span">Prêt à Transformer Votre Production ?</TranslatedText>
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          <TranslatedText as="span">Contactez nos experts pour une consultation personnalisée et découvrez comment nos solutions peuvent optimiser votre processus de production.</TranslatedText>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-red-600" asChild>
            <Link to="/contact">
              <TranslatedText>{t('requestQuote')}</TranslatedText>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
            <a href="tel:+21636264380">
              <Phone className="mr-2 h-5 w-5" />
              <TranslatedText>Appeler Maintenant</TranslatedText>
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Phone className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">
              <TranslatedText as="span">Contact Direct</TranslatedText>
            </h3>
            <p className="mb-2">+216 36 264 380</p>
            <p>+216 22 721 372</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Mail className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">
              <TranslatedText as="span">Email</TranslatedText>
            </h3>
            <p>contact@hmtgroupe.com</p>
            <p className="text-sm opacity-80 mt-2">
              <TranslatedText as="span">Réponse sous 24h garantie</TranslatedText>
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MapPin className="h-8 w-8 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">
              <TranslatedText as="span">Localisation</TranslatedText>
            </h3>
            <p className="text-sm mb-2">Avenue de l'Environnement</p>
            <p className="text-sm">5070 Ksar Hellal, TUNISIA</p>
            <a 
              href="https://maps.app.goo.gl/rWDzsgjLwfKjNCRx8?g_st=ipc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <TranslatedText as="span">Voir sur Maps →</TranslatedText>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
