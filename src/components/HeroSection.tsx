import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mortar-pestle.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-400 to-emerald-400 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in text-white">
            <p className="text-sm font-medium tracking-wider uppercase mb-4 text-white/90">
              WE'RE THE BEST IN
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-4">
              AYURVEDA
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-6 text-white/95">
              & Ayurvedic Medicine
            </h2>
            
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              Duis variur convls eleme exera tincid magna sed phares purus acelao.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-white/90 hover:text-teal-700 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Discover More
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in lg:animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Ayurvedic mortar and pestle with herbs and essential oils"
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;