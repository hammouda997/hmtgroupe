
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wrench, HeadphonesIcon, Truck } from "lucide-react";
import { memo, useMemo } from "react";

const ServicesOverview = memo(() => {
  const services = useMemo(() => [
    {
      icon: Settings,
      title: "Installation",
      description: "Installation professionnelle et mise en service de vos équipements avec formation complète."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Contrats de maintenance préventive et curative pour garantir la performance optimale."
    },
    {
      icon: HeadphonesIcon,
      title: "Support Technique",
      description: "Assistance technique dédiée avec intervention rapide et expertise reconnue."
    },
    {
      icon: Truck,
      title: "Livraison",
      description: "Livraison sécurisée partout en Tunisie avec service de déballage et positionnement."
    }
  ], []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Services d'Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement complet de A à Z pour garantir votre succès avec nos solutions technologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group h-full">
              <CardHeader>
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm sm:text-base text-gray-600 flex-1">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesOverview.displayName = 'ServicesOverview';

export default ServicesOverview;
