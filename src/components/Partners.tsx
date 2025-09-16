
import { useCompany } from "@/hooks/useCMS";
import { useContentTranslation } from "@/hooks/useRealTimeTranslation";
import { useTranslationContext } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/components/TranslatedText";

const Partners = () => {
  const { data: company } = useCompany();
  const { language } = useTranslationContext();
  const { translatedContent: translatedCompany } = useContentTranslation(company, language);
  // Partner names should not be translated, so use original company data
  const partners = company?.partners || [];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <TranslatedText as="span">Nos Partenaires de Confiance</TranslatedText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <TranslatedText as="span">Nous travaillons avec les leaders mondiaux de la technologie pour vous offrir les meilleures solutions du marché.</TranslatedText>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner: any, index: number) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-lg p-8 mb-4 hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  {partner.logo && (partner.logo.startsWith('http') || partner.logo.startsWith('/')) ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 w-auto mx-auto object-contain mb-3"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <div 
                    className="text-4xl font-bold text-gray-900 mb-3"
                    style={{ display: partner.logo && (partner.logo.startsWith('http') || partner.logo.startsWith('/')) ? 'none' : 'block' }}
                  >
                    {partner.name?.[0] || 'P'}
                  </div>
                  {/* Always show partner name */}
                  <div className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {partner.name}
                  </div>
                  <div className="text-red-600 font-semibold">
                    <TranslatedText as="span">Premium Partner</TranslatedText>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                <TranslatedText as="span">{partner.description}</TranslatedText>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              <TranslatedText as="span">{translatedCompany?.certificationsSection?.title || 'Certification Qualité'}</TranslatedText>
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              <TranslatedText as="span">{translatedCompany?.certificationsSection?.subtitle || "Nos partenariats nous permettent de garantir des standards de qualité internationaux et un support technique de premier niveau."}</TranslatedText>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {(translatedCompany?.certificationsSection?.badges || ['ISO 9001', 'CE Certified', 'Made in Europe']).map((badge, idx) => (
                <div key={idx} className="bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                  <span className="font-bold text-sm sm:text-base">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
