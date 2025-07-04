
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Partners from "@/components/Partners";
import ServicesOverview from "@/components/ServicesOverview";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <ServicesOverview />
      <Partners />
      <ContactCTA />
    </div>
  );
};

export default Index;
