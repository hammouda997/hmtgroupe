import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Award, Users } from "lucide-react";
import { useCompany } from "@/hooks/useCMS";
import { useContentTranslation } from "@/hooks/useRealTimeTranslation";
import { useTranslationContext } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/components/TranslatedText";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { memo, useMemo, useEffect } from "react";

const CMSHero = memo(() => {
  const { data: company, isLoading, error } = useCompany();
  const { language } = useTranslationContext();
  const { translatedContent: translatedCompany } = useContentTranslation(company, language);

  // Fallback data in case CMS is not available
  const fallbackData = useMemo(() => ({
    about: {
      description: "HMT Sarl, votre partenaire de confiance pour les solutions de marquage laser, découpe laser et impression numérique en Tunisie. Excellence technique garantie."
    },
    stats: {
      experience: "15+",
      clients: "500+",
      partners: "3"
    }
  }), []);

  const companyData = translatedCompany || fallbackData;

  const carouselSlides = useMemo(() => {
    return (companyData.hero?.slides && companyData.hero.slides.length > 0
      ? companyData.hero.slides
      : [{ image: '' }]
    );
  }, [companyData.hero?.slides]);

  // Preload first few images for faster loading
  useEffect(() => {
    const preloadImages = () => {
      carouselSlides.slice(0, 3).forEach((slide, index) => {
        if (slide.image) {
          const img = new Image();
          img.src = slide.image;
          img.loading = 'eager';
          img.fetchPriority = index === 0 ? 'high' : 'low';
        }
      });
    };

    if (carouselSlides.length > 0) {
      preloadImages();
    }
  }, [carouselSlides]);

  if (isLoading) {
    return (
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <TranslatedText as="span">
                  {companyData.hero?.title || 'Powering Precision with'}
                </TranslatedText>
                <span className="text-red-500 block">
                  <TranslatedText as="span">
                    {companyData.hero?.highlight || 'Innovation'}
                  </TranslatedText>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                <TranslatedText as="span">
                  {companyData.about?.description || "HMT Sarl, votre partenaire de confiance pour les solutions de marquage laser, découpe laser et impression numérique en Tunisie. Excellence technique garantie."}
                </TranslatedText>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg mx-auto mb-2">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">{companyData.stats?.experience || "15+"}</div>
                <div className="text-xs sm:text-sm text-gray-400">
                  <TranslatedText>Années d'expérience</TranslatedText>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg mx-auto mb-2">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">{companyData.stats?.clients || "500+"}</div>
                <div className="text-xs sm:text-sm text-gray-400">
                  <TranslatedText>Clients satisfaits</TranslatedText>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg mx-auto mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">{companyData.stats?.partners || "3"}</div>
                <div className="text-xs sm:text-sm text-gray-400">
                  <TranslatedText>Partenaires premium</TranslatedText>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" asChild>
                <Link to="/products">
                  <TranslatedText>Nos Produits</TranslatedText>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-gray-900 bg-white hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto" asChild>
                <Link to="/contact">
                  <TranslatedText>Demander un Devis</TranslatedText>
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Carousel */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20">
              {carouselSlides.length === 0 || (carouselSlides.length === 1 && !carouselSlides[0].image) ? (
                <div className="aspect-video rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Zap className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">HMT Technology</p>
                  </div>
                </div>
              ) : (
                <Carousel 
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: false,
                    }) as any,
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                <CarouselContent>
                  {carouselSlides.map((slide: { image?: string }, idx: number) => (
                    <CarouselItem key={idx}>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        {slide.image ? (
                          <img 
                            src={slide.image} 
                            alt={`Slide ${idx + 1}`} 
                            className="w-full h-full object-cover"
                            loading={idx === 0 ? "eager" : "lazy"}
                            decoding="async"
                            fetchPriority={idx === 0 ? "high" : "low"}
                            style={{
                              contentVisibility: idx === 0 ? "visible" : "auto"
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                            <div className="text-white text-center">
                              <Zap className="h-12 w-12 mx-auto mb-2 opacity-50" />
                              <p className="text-sm opacity-75">HMT Technology</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2 sm:-left-3 md:-left-4 bg-white/80 text-gray-900 hover:bg-white h-8 w-8 sm:h-10 sm:w-10" />
                <CarouselNext className="-right-2 sm:-right-3 md:-right-4 bg-white/80 text-gray-900 hover:bg-white h-8 w-8 sm:h-10 sm:w-10" />
              </Carousel>
              )}
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-red-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

CMSHero.displayName = 'CMSHero';

export default CMSHero;
