import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, HelpCircle, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const faqs = [
    {
      question: "What does BRAINFORCE Syrup really do?",
      answer: "BRAINFORCE Syrup is not just a memory booster — it is a complete Ayurvedic brain tonic. Each herb in the formulation plays a specific role in supporting your mental health. Brahmi improves memory retention, Jatamansi promotes mental calmness, Ashwagandha builds resilience against mental fatigue...",
      gradient: "from-purple-500/10 to-blue-500/10"
    },
    {
      question: "Why should I take it?",
      answer: "In today's fast-paced life, your brain works harder than your body. Stress, lack of sleep, and constant multitasking drain your focus and memory. BRAINFORCE Syrup provides daily nourishment for your mind through Ayurvedic herbs...",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      question: "Who needs this?",
      answer: "BRAINFORCE Syrup is beneficial for anyone who wants to keep their mind sharp and active. Students can use it to improve memory, working professionals can stay focused, senior citizens can support mental clarity...",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      question: "How and when to take it?",
      answer: "Adults should take 10–15 ml twice daily, preferably after meals. Children above 5 years should take 5–10 ml twice daily after meals. Shake well before use and take with the measuring cup provided...",
      gradient: "from-cyan-500/10 to-teal-500/10"
    },
    {
      question: "Why is BRAINFORCE Syrup priced at ₹220?",
      answer: "It is priced at just ₹220 to keep it affordable for everyone. Unlike overpriced brands, the aim is to make centuries of trusted Ayurvedic wisdom accessible without straining your pocket...",
      gradient: "from-pink-500/10 to-rose-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
            <HelpCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
            Got Questions About <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">BRAINFORCE</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Find answers to the most common questions about BRAINFORCE Syrup, 
            its benefits, usage, and ingredients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group border rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-r ${faq.gradient} backdrop-blur-sm border-white/20 hover:border-primary/30`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setOpenItem(openItem === `item-${index}` ? null : `item-${index}`)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        {openItem === `item-${index}` ? (
                          <Minus className="w-4 h-4 text-primary animate-in spin-in-180 duration-300" />
                        ) : (
                          <Plus className="w-4 h-4 text-primary animate-in spin-in-180 duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItem === `item-${index}` 
                      ? 'max-h-96 opacity-100 mt-4' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-primary/10 pt-4">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <Link 
                        to="/faq" 
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group/link transition-all duration-300 hover:translate-x-1"
                      >
                        Read complete answer
                        <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 pt-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px" />
              <div className="relative bg-background px-8">
                <p className="text-muted-foreground mb-6">
                  Need more detailed information about BRAINFORCE Syrup?
                </p>
                <Link to="/faq">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    View All FAQs
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;