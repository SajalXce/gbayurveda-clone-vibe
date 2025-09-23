import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Shield, Award, Heart, Sparkles } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const benefits = [
  { icon: CheckCircle, text: "100% Organic" },
  { icon: Award, text: "Best Quality" },
  { icon: Shield, text: "Hygienic Product" },
  { icon: Sparkles, text: "Quality Tested" },
  { icon: Heart, text: "Health Care" },
  { icon: Leaf, text: "Organic Herbal" },
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
                Benefit From Choosing The Best
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Duis variurna id convallis elementu exerat tincidunt magna, sepharetra est purus aceleo.
            </p>
            
            <Button variant="cta" size="lg" className="px-8 py-4">
              View All Services
            </Button>
          </div>
          
          {/* Right Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                The Combination of Nature & Science
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Duis variurid convallis elementu exerat tincidun magna, sepharetra estine purus aceleo anfdye element varudios.
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
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;