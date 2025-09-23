import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Leaf,
  Shield,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";
import { useNavigate } from "react-router-dom";
import brainFade from "@/assets/bgl1.png"



const BenefitsSection = () => {

  const navigate  = useNavigate();
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

            <p className="text-xl mb-8 leading-relaxed">
              हर बूंद में जड़ी-बूटियों की शक्ति है, जिन्हें हमारे पूर्वज,
              ऋषि–मुनि प्राचीन समय से अपने मस्तिष्क को मज़बूत और तेज़ रखने के
              लिए अपनाते थे। वे अपने दिमाग़ से सच्चा प्यार करते थे और यही
              प्राकृतिक जड़ी-बूटियाँ उनकी ताक़त का राज़ थीं।”
            </p>

            <Button variant="cta" size="lg" className="px-8 py-4">
              View All Services
            </Button>
          </div>

          {/* Right Content */}
          <div className="animate-slide-up">
             <div className="animate-scale-in relative">
            <div className="relative rounded-2xl overflow-hidden ">
              <img
                src={brainFade}
                alt="Traditional Ayurvedic herbs and ingredients"
                className="w-full h-auto"
              />
             
            </div>
          </div>

       
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
