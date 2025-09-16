
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Settings, Wrench, HeadphonesIcon, Truck, Clock, Shield, Award } from "lucide-react";
import { TranslatedText } from "@/components/TranslatedText";
import { useQuery } from "@tanstack/react-query";
import { cmsAPI } from "@/lib/cms-api";

const Services = () => {
  // Fetch services from database
  const { data: servicesResponse, isLoading: servicesLoading } = useQuery({
    queryKey: ['services'],
    queryFn: () => cmsAPI.getServices()
  });

  const services = servicesResponse?.data;


  // Icon mapping for emoji icons from database
  const getIconComponent = (iconEmoji: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      '⚡': Settings,
      '🔧': Wrench,
      '📦': Truck,
      '🛠️': Wrench,
      '⚙️': Settings,
      '🔨': Wrench,
      '📋': CheckCircle,
      '🎯': Award,
      '💡': Award,
      '🚀': Award,
      '⭐': Award,
      '🔍': CheckCircle,
      '📊': CheckCircle,
      '🛡️': Shield
    };
    return iconMap[iconEmoji] || Settings;
  };

  // Fallback hardcoded services if no data from CMS
  const fallbackServices = [
    {
      icon: Settings,
      title: "Installation & Mise en Service",
      description: "Installation professionnelle de vos équipements avec formation complète de vos équipes",
      features: [
        "Installation par techniciens certifiés",
        "Formation complète du personnel",
        "Mise en service et tests",
        "Documentation technique",
        "Garantie d'installation"
      ],
      duration: "2-5 jours selon équipement"
    },
    {
      icon: Wrench,
      title: "Maintenance Préventive",
      description: "Contrats de maintenance pour garantir la performance optimale de vos machines",
      features: [
        "Maintenance préventive planifiée",
        "Diagnostic complet périodique",
        "Remplacement pièces d'usure",
        "Mise à jour logiciels",
        "Rapport détaillé d'intervention"
      ],
      duration: "Contrats annuels"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Technique",
      description: "Assistance technique dédiée avec intervention rapide et expertise reconnue",
      features: [
        "Hotline technique 6j/7",
        "Télémaintenance sécurisée",
        "Intervention sur site",
        "Pièces détachées garanties",
        "Support multilingue"
      ],
      duration: "Réponse sous 4h"
    },
    {
      icon: Truck,
      title: "Livraison & Logistique",
      description: "Livraison sécurisée partout en Tunisie avec service complet",
      features: [
        "Livraison sécurisée",
        "Déballage et positionnement",
        "Assurance transport",
        "Suivi en temps réel",
        "Coordination installation"
      ],
      duration: "24-48h en Tunisie"
    }
  ];


  const guarantees = [
    {
      icon: Clock,
      title: "Réactivité Garantie",
      description: "Intervention sous 4h en zone Tunis, 24h dans toute la Tunisie"
    },
    {
      icon: Shield,
      title: "Qualité Certifiée",
      description: "Techniciens certifiés constructeurs et process qualité ISO 9001"
    },
    {
      icon: Award,
      title: "Satisfaction Client",
      description: "Plus de 95% de satisfaction client avec garantie de résultat"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <TranslatedText as="span">Nos Services</TranslatedText>
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              <TranslatedText as="span">Un accompagnement complet de A à Z pour garantir votre succès avec nos solutions technologiques. 
              Excellence technique et service client d'exception.</TranslatedText>
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <TranslatedText as="span">Services Professionnels</TranslatedText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatedText as="span">De l'installation à la maintenance, nous vous accompagnons tout au long du cycle de vie de vos équipements.</TranslatedText>
            </p>
          </div>

          {servicesLoading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
              <p className="mt-2 text-gray-600">Chargement des services...</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {(services && services.length > 0 ? services.filter(s => s.type === 'main') : fallbackServices).map((service, index) => {
              const IconComponent = service.icon && typeof service.icon === 'string' 
                ? getIconComponent(service.icon) 
                : (service.icon || Settings);
              
              return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      {typeof service.icon === 'string' ? (
                        <span className="text-2xl">{service.icon}</span>
                      ) : (
                        <IconComponent className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        <TranslatedText as="span">{service.title}</TranslatedText>
                      </CardTitle>
                      <p className="text-sm text-red-600 font-medium">
                        <TranslatedText as="span">{service.duration}</TranslatedText>
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 mt-4">
                    <TranslatedText as="span">{service.description}</TranslatedText>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        <TranslatedText as="span">{feature}</TranslatedText>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              );
            })}
            </div>
          )}
        </div>
      </section>


      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <TranslatedText as="span">Nos Garanties</TranslatedText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatedText as="span">Nous nous engageons sur des standards de qualité et de service exceptionnels.</TranslatedText>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <guarantee.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    <TranslatedText as="span">{guarantee.title}</TranslatedText>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    <TranslatedText as="span">{guarantee.description}</TranslatedText>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
