
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Scissors, Printer, ArrowRight } from "lucide-react";
import { memo, useMemo } from "react";

const ProductShowcase = memo(() => {
  const products = useMemo(() => [
    {
      id: 1,
      title: "Marquage Laser",
      description: "Solutions précises de marquage laser pour l'identification et la personnalisation industrielle.",
      icon: Zap,
      features: ["Haute précision", "Vitesse optimisée", "Matériaux multiples"],
      image: "photo-1518770660439-4636190af475"
    },
    {
      id: 2,
      title: "Découpe Laser",
      description: "Découpe laser professionnelle avec technologie GBOS pour tous types de matériaux.",
      icon: Scissors,
      features: ["Découpe précise", "Épaisseurs variables", "Finition parfaite"],
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Impression Numérique",
      description: "Systèmes d'impression numérique MAYA et FLORA pour vos besoins professionnels.",
      icon: Printer,
      features: ["Qualité HD", "Formats multiples", "Production rapide"],
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ], []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nos Solutions Technologiques
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de solutions laser et d'impression numérique, 
            conçues pour répondre aux exigences les plus strictes de l'industrie moderne.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-red-600 transition-colors">
                  <product.icon className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                <div className="aspect-video rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <img 
                    src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardDescription className="text-sm sm:text-base text-gray-600 flex-1">
                  {product.description}
                </CardDescription>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" asChild>
            <Link to="/products">
              Voir Tous Nos Produits
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
});

ProductShowcase.displayName = 'ProductShowcase';

export default ProductShowcase;
