import { Button } from "@/components/ui/button";
import heroImage from "@/assets/brainS1.png";
import bg1 from "@/assets/bgt1.jpg"

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
