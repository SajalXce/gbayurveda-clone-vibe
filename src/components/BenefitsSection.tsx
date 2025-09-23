import { Button } from "@/components/ui/button";
import { Brain, Focus, ShieldCheck, Award, Heart, Leaf } from "lucide-react";
import sectionBg from "@/assets/brainforce-herbs-nature.jpg";

const benefits = [
  { icon: Brain, text: "Boosts Memory" },
  { icon: Focus, text: "Improves Focus" },
  { icon: ShieldCheck, text: "Reduces Stress" },
  { icon: Award, text: "Mental Energy" },
  { icon: Heart, text: "Brain Health" },
  { icon: Leaf, text: "Natural Herbs" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${sectionBg})` }}
      />
      <div className="absolute inset-0 bg-feature-gradient" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                BEST FOR YOU
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                Benefits of BRAINFORCE Syrup
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Complete Ayurvedic brain tonic crafted with centuries-old wisdom and modern research to naturally support your mental health.
            </p>
            
            <Button variant="cta" size="lg" className="px-8 py-4">
              Order BRAINFORCE ₹220
            </Button>
          </div>
          
          {/* Right Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Trusted by Students, Professionals & Seniors
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                BRAINFORCE helps boost memory, improve focus, reduce stress, and increase mental energy — keeping your mind sharp and balanced, naturally.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-card-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" size="lg">
              Shop Now ₹220
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;