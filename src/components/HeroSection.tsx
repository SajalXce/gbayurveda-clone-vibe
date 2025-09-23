import { Button } from "@/components/ui/button";
import heroImage from "@/assets/brainforce-product.jpg";
import bg1 from "@/assets/brainforce-herbs-nature.jpg"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in text-white">
            <p className="text-sm font-medium tracking-wider uppercase mb-4 text-white/90">
              ANCIENT WISDOM, MODERN SCIENCE
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-4">
              BRAINFORCE Syrup
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-6 text-white/95">
              Sharp Mind, Strong Memory
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              "Complete Ayurvedic brain tonic with Brahmi, Jatamansi, Ashwagandha and 10+ herbs to boost memory, focus and calmness — naturally. Just ₹220."
            </p>

            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-white/90 hover:text-teal-700 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Order Now ₹220
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in lg:animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="BRAINFORCE Syrup - Ayurvedic brain tonic with natural herbs"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;