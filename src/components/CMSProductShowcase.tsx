import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Scissors, Printer, ArrowRight } from "lucide-react";
import { useProducts, useCompany } from "@/hooks/useCMS";
import { useContentTranslation } from "@/hooks/useRealTimeTranslation";
import { useTranslationContext } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/components/TranslatedText";

interface Product {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  icon?: string | React.ComponentType;
  features?: string[];
  images?: { main?: string };
  image?: string;
}

const CMSProductShowcase = () => {
  const { data: products, isLoading, error } = useProducts();
  const { data: company } = useCompany();
  const { language } = useTranslationContext();
  const { translatedContent: translatedCompany } = useContentTranslation(company, language);

  // Fallback data in case CMS is not available
  const fallbackProducts = [
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
  ];

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: typeof Zap } = {
      'laser-marking': Zap,
      'laser-cutting': Scissors,
      'digital-printing': Printer
    };
    return icons[category] || Zap;
  };

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      'laser-marking': 'Machine à broderie',
      'laser-cutting': 'Découpe Laser',
      'digital-printing': 'Machine d\'impression'
    };
    return titles[category] || category;
  };

  // Group products by category and take the first product from each category
  const groupedProducts = products?.reduce((acc: Record<string, Product>, product: Product) => {
    if (product.category && !acc[product.category]) {
      acc[product.category] = product;
    }
    return acc;
  }, {}) || {};

  const displayProducts = Object.values(groupedProducts).slice(0, 3);

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  const productsToShow: Product[] = (translatedCompany?.homepageSections?.products?.cards?.length
    ? translatedCompany.homepageSections.products.cards as Product[]
    : displayProducts.length > 0
      ? displayProducts
      : fallbackProducts);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <TranslatedText as="span">
              {translatedCompany?.homepageSections?.products?.title || 'Nos Solutions Technologiques'}
            </TranslatedText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <TranslatedText as="span">
              {translatedCompany?.homepageSections?.products?.subtitle || "Découvrez notre gamme complète de solutions laser et d'impression numérique, conçues pour répondre aux exigences les plus strictes de l'industrie moderne."}
            </TranslatedText>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {productsToShow.map((product: Product, index: number) => {
            const iconMap: Record<string, typeof Zap> = { Zap, Scissors, Printer };
            const IconComponent = product.icon
              ? (typeof product.icon === 'string' ? (iconMap[product.icon] || Zap) : product.icon)
              : product.category
                ? getCategoryIcon(product.category)
                : Zap;
            const title = product.title || (product.category ? getCategoryTitle(product.category) : '');
            
            return (
              <Card key={product._id || product.id || index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <IconComponent className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    <TranslatedText as="span">{title}</TranslatedText>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={
                        product.images?.main || product.image ||
                        (product.image ? `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=80` : '')
                      }
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardDescription className="text-gray-600">
                    <TranslatedText as="span">{product.description}</TranslatedText>
                  </CardDescription>
                  <ul className="space-y-2">
                    {(product.features || []).slice(0, 3).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        <TranslatedText as="span">{feature}</TranslatedText>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
            <Link to="/products">
              <TranslatedText>Voir Tous Nos Produits</TranslatedText>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CMSProductShowcase;
