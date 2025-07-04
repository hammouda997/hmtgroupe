
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Settings, Wrench, HeadphonesIcon, Truck, Clock, Shield, Award } from "lucide-react";

const Services = () => {
  const mainServices = [
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

  const maintenancePlans = [
    {
      name: "Plan Essentiel",
      price: "À partir de 1200 DT/an",
      features: [
        "2 interventions préventives/an",
        "Support téléphonique",
        "Pièces d'usure incluses",
        "Rapport annuel"
      ]
    },
    {
      name: "Plan Premium",
      price: "À partir de 2400 DT/an",
      features: [
        "4 interventions préventives/an",
        "Support prioritaire",
        "Toutes pièces incluses",
        "Télémaintenance",
        "Mise à jour logiciels"
      ]
    },
    {
      name: "Plan Enterprise",
      price: "Sur devis",
      features: [
        "Maintenance illimitée",
        "Technicien dédié",
        "Intervention 24h/7j",
        "Formation continue",
        "Garantie performance"
      ]
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Un accompagnement complet de A à Z pour garantir votre succès avec nos solutions technologiques. 
              Excellence technique et service client d'exception.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Professionnels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'installation à la maintenance, nous vous accompagnons tout au long du cycle de vie de vos équipements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <p className="text-sm text-red-600 font-medium">{service.duration}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plans de Maintenance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le plan de maintenance adapté à vos besoins pour garantir la performance optimale de vos équipements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${index === 1 ? 'ring-2 ring-red-600' : ''}`}>
                <CardHeader className="text-center">
                  {index === 1 && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium w-fit mx-auto mb-4">
                      Le Plus Populaire
                    </div>
                  )}
                  <CardTitle className="text-xl text-gray-900">{plan.name}</CardTitle>
                  <div className="text-2xl font-bold text-red-600 mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                    Choisir ce Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Garanties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons sur des standards de qualité et de service exceptionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <guarantee.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {guarantee.description}
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
