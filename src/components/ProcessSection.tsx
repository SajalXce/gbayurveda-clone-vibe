import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultations with our expert",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Get an appointment",
    number: "02",
  },
  {
    icon: CheckCircle,
    title: "Enjoy your service",
    number: "03",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-natural-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Easy Step To Order The Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proin feugiat diam vitae ligula imperd dapibus vestibul tellus libero, at fermentum mi euismod ut. Vivamvitaey dui vitae turpis sollicitudin rutrum.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border transform translate-x-12" />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button variant="cta" size="lg" className="px-8 py-4">
            Need Help? Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;