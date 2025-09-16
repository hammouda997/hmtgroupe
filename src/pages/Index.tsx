
import CMSHero from "@/components/CMSHero";
import CMSProductShowcase from "@/components/CMSProductShowcase";
import Partners from "@/components/Partners";
import CMSServicesOverview from "@/components/CMSServicesOverview";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CMSHero />
      <CMSProductShowcase />
      <CMSServicesOverview />
      <Partners />
      <ContactCTA />
    </div>
  );
};

export default Index;
