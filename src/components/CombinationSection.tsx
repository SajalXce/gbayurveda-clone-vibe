import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import combinationHero from "@/assets/bgl1.png";

const features = [
  "100% Organic",
  "Best Quality",
  "Hygienic Product",
  "Quality Tested",
  "Health Care",
  "Organic Herbal",
];

const CombinationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              The Combination
              <br />
              <p className="mt-2"> of Nature & Science</p>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              के साथ तैयार किया गया: एलोवेरा (पत्ता), आंवला (फल), ब्राह्मी,
              शंखपुष्पी, जटामांसी, मण्डूकपर्णी, वच, अश्वगंधा, हरड़, तुलसी,
              बहेड़ा, पुनर्नवा, ज्योतिमती, भृंगराज, उस्तखदूस, चीनी
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8"
            >
              View Products
            </Button>
          </div>

          {/* Right Image */}
          <div className="animate-scale-in relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={combinationHero}
                alt="Traditional Ayurvedic herbs and ingredients"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinationSection;
