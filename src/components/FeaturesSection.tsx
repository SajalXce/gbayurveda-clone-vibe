import { Leaf, FlaskConical, CheckCircle, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Duis variu convls eleme exera tincid magna.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Less",
    description: "Duis variu convls eleme exera tincid magna.",
  },
  {
    icon: CheckCircle,
    title: "Tested Product",
    description: "Duis variu convls eleme exera tincid magna.",
  },
  {
    icon: Award,
    title: "Pure Ayurveda",
    description: "Duis variu convls eleme exera tincid magna.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose Pure Ayurveda
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;