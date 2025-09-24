import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      question: "What does BRAINFORCE Syrup really do?",
      answer: "BRAINFORCE Syrup is not just a memory booster — it is a complete Ayurvedic brain tonic. Each herb in the formulation plays a specific role in supporting your mental health. Brahmi improves memory retention, Jatamansi promotes mental calmness, Ashwagandha builds resilience against mental fatigue..."
    },
    {
      question: "Why should I take it?",
      answer: "In today's fast-paced life, your brain works harder than your body. Stress, lack of sleep, and constant multitasking drain your focus and memory. BRAINFORCE Syrup provides daily nourishment for your mind through Ayurvedic herbs..."
    },
    {
      question: "Who needs this?",
      answer: "BRAINFORCE Syrup is beneficial for anyone who wants to keep their mind sharp and active. Students can use it to improve memory, working professionals can stay focused, senior citizens can support mental clarity..."
    },
    {
      question: "How and when to take it?",
      answer: "Adults should take 10–15 ml twice daily, preferably after meals. Children above 5 years should take 5–10 ml twice daily after meals. Shake well before use and take with the measuring cup provided..."
    },
    {
      question: "Why is BRAINFORCE Syrup priced at ₹220?",
      answer: "It is priced at just ₹220 to keep it affordable for everyone. Unlike overpriced brands, the aim is to make centuries of trusted Ayurvedic wisdom accessible without straining your pocket..."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Got Questions About <span className="text-primary">BRAINFORCE</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most common questions about BRAINFORCE Syrup, 
            its benefits, usage, and ingredients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-heading">Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                      <div className="mt-4 pt-4 border-t">
                        <Link to="/faq" className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm">
                          Read complete answer
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-12 pt-8 border-t">
                <p className="text-muted-foreground mb-6">
                  Need more detailed information about BRAINFORCE Syrup?
                </p>
                <Link to="/faq">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    View All FAQs
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;