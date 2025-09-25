import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Users, AlertTriangle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using BrainForce products and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service."
      ]
    },
    {
      id: "products",
      title: "Product Information",
      icon: Shield,
      content: [
        "BrainForce Syrup is an Ayurvedic brain tonic formulated with natural herbs and ingredients.",
        "All product information, including ingredients, benefits, and usage instructions, is provided for informational purposes.",
        "Individual results may vary. This product is not intended to diagnose, treat, cure, or prevent any disease.",
        "The product is manufactured in GMP & ISO-certified facilities with FDA, FSSAI & AYUSH approvals."
      ]
    },
    {
      id: "usage",
      title: "Product Usage & Safety",
      icon: AlertTriangle,
      content: [
        "Adults: Take 10-15 ml twice daily after meals",
        "Children (5+ years): Take 5-10 ml twice daily after meals",
        "Children below 5 years: Only as per doctor's advice",
        "Consult a physician before use if pregnant, breastfeeding, or on medication",
        "Discontinue use if allergic reactions occur and consult a healthcare professional",
        "Contains sugar - diabetics should consult a doctor before use"
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Users,
      content: [
        "BrainForce and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages.",
        "Users are responsible for consulting healthcare professionals before using the product.",
        "The company is not responsible for misuse of the product or failure to follow usage instructions.",
        "Any adverse effects should be reported immediately and medical attention sought if necessary."
      ]
    }
  ];

  const additionalTerms = [
    {
      title: "Privacy Policy",
      content: "Your privacy is important to us. We collect and use personal information only as necessary to provide our services and improve user experience."
    },
    {
      title: "Intellectual Property",
      content: "All content, trademarks, and intellectual property on this website belong to BrainForce and are protected by applicable laws."
    },
    {
      title: "Modifications",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website."
    },
    {
      title: "Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of India."
    },
    {
      title: "Contact Information",
      content: "For questions about these terms, please contact us at +91 9936616499 or through our contact page."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using BrainForce products and services
          </p>
          <div className="mt-8 text-sm text-muted-foreground">
            Last updated: September 2024
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.content.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
              Additional Terms
            </h2>
            <div className="grid gap-6">
              {additionalTerms.map((term, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {term.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {term.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium">Phone:</span>
                <span>+91 9936616499</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;