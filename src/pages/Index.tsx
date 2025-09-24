import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import CombinationSection from "@/components/CombinationSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <BenefitsSection />

        <CombinationSection />
        <FeaturesSection />
        <ProcessSection />
        <ServicesSection />
        <ProductsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
