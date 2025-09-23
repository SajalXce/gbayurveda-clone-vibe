import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Users, Award, Target, Shield } from "lucide-react";
import brainforceHerbs from "@/assets/leaf1.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${brainforceHerbs})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-white"> Our Story</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Empowering every mind with centuries of trusted Ayurvedic wisdom,
              making mental wellness accessible to all
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Why <span className="text-primary">BrainForce</span> Exists
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8">
              <p className="text-lg">
                In today's fast-paced world, our minds are constantly working,
                yet stress, pollution, and daily pressures often take a toll on
                memory, focus, and mental clarity. Many of us struggle quietly,
                wishing for a natural way to stay sharp and alert.
              </p>

              <p className="text-lg">
                <strong className="text-foreground">
                  BrainForce Syrup was created with a simple purpose
                </strong>{" "}
                – to empower every mind and support every individual who dreams
                of being sharper, more focused, and confident in their daily
                life.
              </p>

              <p className="text-lg">
                Our formula brings centuries of trusted Ayurvedic wisdom, using
                herbs that have been cherished since the times of Rishi-Munis.
                We believe in real results, not shortcuts. With consistent use,
                BrainForce helps improve memory, focus, and mental clarity –
                giving you the confidence and energy to face life's challenges
                every day.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-lg font-medium text-foreground">
                  "But BrainForce is more than just a product. It's our way of
                  supporting the common man, ensuring that this priceless wisdom
                  is affordable and accessible without straining hard-earned
                  money."
                </p>
              </div>

              <p className="text-lg">
                Priced fairly at <strong className="text-primary">₹220</strong>,
                it is made with care and integrity, not for profit alone, but to
                genuinely help you. BrainForce Syrup – centuries of wisdom,
                trusted by generations, helping every mind reach its true
                potential.
              </p>

              <p className="text-lg font-medium text-foreground">
                Because your brain deserves care, and your dreams deserve focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Ancient Wisdom
                </h3>
                <p className="text-muted-foreground">
                  Rooted in centuries-old Ayurvedic traditions, trusted by
                  generations of healers and sages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Affordable Care
                </h3>
                <p className="text-muted-foreground">
                  Making premium Ayurvedic wellness accessible to everyone,
                  without straining your budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  People First
                </h3>
                <p className="text-muted-foreground">
                  Supporting the common man with genuine care, not just
                  profit-driven motives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Quality Assured
                </h3>
                <p className="text-muted-foreground">
                  GMP & ISO certified facilities with FDA, FSSAI & AYUSH
                  approvals for highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Real Results
                </h3>
                <p className="text-muted-foreground">
                  No shortcuts, just proven herbs that deliver genuine
                  improvements in mental wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Trust & Integrity
                </h3>
                <p className="text-muted-foreground">
                  Crafted with care and transparency, every bottle reflects our
                  commitment to your wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To make centuries of trusted Ayurvedic wisdom accessible to every
              individual, empowering minds to reach their true potential through
              natural, affordable wellness solutions.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/product" className="flex items-center gap-2">
                Discover BrainForce
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
