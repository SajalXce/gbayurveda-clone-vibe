import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Brain, Shield, Users, Clock, Banknote } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "About BRAINFORCE Syrup",
      icon: Brain,
      faqs: [
        {
          question: "What does BRAINFORCE Syrup really do?",
          answer: "BRAINFORCE Syrup is not just a memory booster — it is a complete Ayurvedic brain tonic. Each herb in the formulation plays a specific role in supporting your mental health. Brahmi (Bacopa monnieri) improves memory retention and learning ability by nourishing brain cells. Jatamansi (Nardostachys jatamansi) promotes mental calmness and helps reduce stress & anxiety. Ashwagandha (Withania somnifera) builds resilience against mental fatigue and boosts stamina. Mandukparni (Centella asiatica) enhances concentration and supports overall cognitive performance. Shankhpushpi (Convolvulus pluricaulis) is known as a natural brain rejuvenator that supports clarity and alertness. Tulsi, Peppermint and Lavandula refresh the mind, uplift mood, and promote mental clarity. Together, these powerful herbs help you boost memory, improve focus, reduce stress, and increase mental energy — keeping your mind sharp and balanced, naturally."
        },
        {
          question: "What is BRAINFORCE Syrup?",
          answer: "BRAINFORCE Syrup is a traditional Ayurvedic formulation designed to naturally support brain health. It combines carefully selected herbal juices and standardized extracts — including Brahmi, Shankhpushpi, Jatamansi, Ashwagandha, and Mandukparni — which are known to promote memory, concentration, and mental balance. With regular use, BRAINFORCE Syrup may help improve focus, enhance mental stamina, and support overall cognitive wellness. Crafted with powerful herbs, backed by deep research. BRAINFORCE Syrup is inspired by ancient Ayurvedic wisdom and formulated with some of the most important medicinal herbs known for their benefits on the mind. This time-tested formula, rooted in the traditions of ancient Rishis, has been carefully refined with modern research and dedication — bringing you a natural way to nourish your brain and support sharp memory, calmness, and mental strength."
        },
        {
          question: "What are the ingredients (per 10 ml)?",
          answer: "Juices/Concentrates include Aloe Vera (Leaf) 1 ml and Amla (Fruit) 1 ml. Standardized extracts include Brahmi (Bacopa monnieri, Extract) 400 mg, Shankhpushpi (Convolvulus pluricaulis, Whole plant) 300 mg, Jatamansi (Nardostachys jatamansi, Whole plant) 300 mg, Mandukparni (Centella asiatica, Root) 200 mg, Vach (Acorus calamus, Whole plant) 180 mg, Ashwagandha (Withania somnifera, Root) 150 mg, Harad (Terminalia chebula, Root) 120 mg, Tulsi (Ocimum sanctum, Fruit) 100 mg, Beheda (Terminalia bellirica, Leaf) 80 mg, Punarnava (Boerhaavia diffusa, Fruit) 80 mg, Jyotimati (Celastrus paniculatus, Seed/Stem) 80 mg, Bhringraj (Eclipta alba, Seed) 80 mg, Ustkhadus (Lavandula stoechas, Leaf) 50 mg, Peppermint (Mentha piperita, Stem) 15 mg and Sugar q.s."
        }
      ]
    },
    {
      title: "Who Should Use It",
      icon: Users,
      faqs: [
        {
          question: "Why should I take it?",
          answer: "In today's fast-paced life, your brain works harder than your body. Stress, lack of sleep, and constant multitasking drain your focus and memory. BRAINFORCE Syrup provides daily nourishment for your mind through Ayurvedic herbs like Brahmi, Ashwagandha and Jatamansi — helping you stay sharp, calm, and mentally strong, naturally. Because your mind deserves the same care as your body. BRAINFORCE keeps you sharp, focused, and stress-free — every single day."
        },
        {
          question: "Who needs this?",
          answer: "BRAINFORCE Syrup is beneficial for anyone who wants to keep their mind sharp and active. Students can use it to improve memory, learning power, and concentration. Working professionals can use it to stay focused, reduce stress, and boost productivity. Senior citizens can use it to support mental clarity, alertness, and active brain function. Anyone under stress can take it to promote calmness and reduce mental fatigue."
        },
        {
          question: "Who is the main target audience?",
          answer: "Students who want to boost memory, improve learning power, and stay focused during studies & exams. Working professionals who face high stress, multitasking, and mental fatigue; it helps improve productivity and concentration. Senior citizens who want to maintain mental clarity, alertness, and slow down age-related memory decline. Parents of children 5+ years who wish to naturally support their child's concentration and academic performance. Anyone under stress who wants calmness, balance, and better mental stamina in daily life."
        },
        {
          question: "Who is it for?",
          answer: "Students, professionals, seniors, children (5+ years) and anyone under stress."
        }
      ]
    },
    {
      title: "Usage & Dosage",
      icon: Clock,
      faqs: [
        {
          question: "How and when to take it?",
          answer: "Adults should take 10–15 ml twice daily, preferably after meals. Children above 5 years should take 5–10 ml twice daily after meals. Infants and children below 5 years should only take it as per doctor's advice. Shake well before use. Take with the measuring cup/spoon provided. The best time is morning and evening after food for maximum absorption and effect."
        },
        {
          question: "How should BRAINFORCE Syrup be stored?",
          answer: "It should be stored in a cool, dry place away from direct sunlight. Keep the container tightly closed. Do not refrigerate unless specified on the pack. Keep out of reach of children."
        },
        {
          question: "What precautions and warnings should be followed?",
          answer: "Consult a physician before use if you are pregnant, breastfeeding, on regular medication, or have chronic illnesses. It is not a replacement for prescribed medicines. Discontinue use if allergic reactions or adverse effects occur and consult a healthcare professional. It contains sugar — diabetics should consult a doctor before use."
        }
      ]
    },
    {
      title: "Quality & Pricing",
      icon: Shield,
      faqs: [
        {
          question: "What certifications or lab tests support its claims?",
          answer: "Every bottle is crafted in GMP & ISO-certified facilities, with a formula approved by FDA, FSSAI & AYUSH, ensuring the highest standards of quality and safety. BRAINFORCE Syrup – centuries of wisdom, trusted by generations, helping every mind reach its true potential. Because your brain deserves care, and your dreams deserve focus."
        },
        {
          question: "Why is BRAINFORCE Syrup priced at ₹220?",
          answer: "It is priced at just ₹220 to keep it affordable for everyone. Unlike overpriced brands, the aim is to make centuries of trusted Ayurvedic wisdom accessible without straining your pocket. The goal is not just profit but to genuinely help people. With every bottle, it's about supporting the common man and giving real benefits without burdening hard-earned money."
        },
        {
          question: "What is the brand story of BRAINFORCE Syrup?",
          answer: "In today's fast-paced world, our minds are constantly working, yet stress, pollution, and daily pressures often take a toll on memory, focus, and mental clarity. Many of us struggle quietly, wishing for a natural way to stay sharp and alert. BRAINFORCE Syrup was created with a simple purpose – to empower every mind and support every individual who dreams of being sharper, more focused, and confident in their daily life. Our formula brings centuries of trusted Ayurvedic wisdom, using herbs that have been cherished since the times of Rishi-Munis. We believe in real results, not shortcuts. With consistent use, BRAINFORCE helps improve memory, focus, and mental clarity – giving you the confidence and energy to face life's challenges every day. But BRAINFORCE is more than just a product. It's our way of supporting the common man, ensuring that this priceless wisdom is affordable and accessible without straining hard-earned money. Priced fairly at ₹220, it is made with care and integrity, not for profit alone, but to genuinely help you."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Everything About <span className="text-primary">BRAINFORCE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get comprehensive answers to all your questions about BRAINFORCE Syrup, 
            the Ayurvedic brain tonic that's helping thousands stay sharp and focused.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`} 
                        className="border rounded-lg px-6 bg-background/50"
                      >
                        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;