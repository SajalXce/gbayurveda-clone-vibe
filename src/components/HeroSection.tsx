import { Button } from "@/components/ui/button";
import heroImage from "@/assets/brainS1.png";
import bg1 from "@/assets/bgt1.jpg"
import leafPattern from "@/assets/leaf1.jpg"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered Ayurvedic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-teal-800/90"></div>
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${leafPattern})` }}
      ></div>
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      ></div>
      
      {/* Floating Herbal Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-400/15 to-yellow-600/15 rounded-full blur-xl animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-xl animate-pulse delay-700"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in text-white">
            <p className="text-sm font-medium tracking-wider uppercase mb-4 text-white/90">
              WE'RE THE BEST
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-4">
              Powerful Ayurvedic Brain Tonic
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-6 text-white/95">
              & Ayurvedic Medicine
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              “Crafted with Brahmi, Jatamansi, Ashwagandha and 10+ herbs to
              boost memory, focus and calmness — naturally.”
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
              {/* <img
                src={heroImage}
                alt="Ayurvedic mortar and pestle with herbs and essential oils"
                className="w-2xl h-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
