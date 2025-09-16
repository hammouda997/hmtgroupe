import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { useServices, useCompany } from "@/hooks/useCMS";
import { useContentTranslation } from "@/hooks/useRealTimeTranslation";
import { useTranslationContext } from "@/contexts/TranslationContext";
import { TranslatedText } from "@/components/TranslatedText";

const CMSServicesOverview = () => {
  const { data: services, isLoading } = useServices({ type: 'main' });
  const { data: company } = useCompany();
  const { language } = useTranslationContext();
  const { translatedContent: translatedCompany } = useContentTranslation(company, language);

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  type ServiceCard = { _id?: string; title?: string; description?: string; show?: boolean };
  const sourceCards: ServiceCard[] = (translatedCompany?.homepageSections?.services?.cards?.length
    ? (translatedCompany.homepageSections.services.cards as ServiceCard[])
    : ((services || []).filter((s: { isActive?: boolean }) => s.isActive) as ServiceCard[]));

  const displayServices = (sourceCards || [])
    .filter((c) => (c as { show?: boolean }).show !== false)
    .slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <TranslatedText as="span">
              {translatedCompany?.homepageSections?.services?.title || "Services d'Excellence"}
            </TranslatedText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <TranslatedText as="span">
              {translatedCompany?.homepageSections?.services?.subtitle || 'Un accompagnement complet de A à Z pour garantir votre succès avec nos solutions technologiques.'}
            </TranslatedText>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {displayServices.map((service: ServiceCard, index: number) => (
            <Card key={service._id || index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <Settings className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  <TranslatedText as="span">{service.title}</TranslatedText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  <TranslatedText as="span">{service.description}</TranslatedText>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CMSServicesOverview;


