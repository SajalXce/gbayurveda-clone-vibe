import { Leaf, Pill, Stethoscope, FlaskConical, Brain, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Herbal",
    description: "Natural herbal remedies and treatments for holistic healing.",
  },
  {
    icon: Pill,
    title: "Herb Products",
    description: "Premium quality herbal products for your wellness journey.",
  },
  {
    icon: Stethoscope,
    title: "Medicine",
    description: "Traditional Ayurvedic medicines prepared with care.",
  },
  {
    icon: FlaskConical,
    title: "Ayurvedic",
    description: "Authentic Ayurvedic treatments and therapies.",
  },
  {
    icon: Brain,
    title: "Theta Healing",
    description: "Advanced healing techniques for mind and body wellness.",
  },
  {
    icon: MessageSquare,
    title: "Consultations",
    description: "Expert consultations with certified Ayurvedic practitioners.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-natural-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 text-center animate-scale-in border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;