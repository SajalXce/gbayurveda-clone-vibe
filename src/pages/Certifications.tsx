import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Star, Users, Calendar, FlaskConical, Building2, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leaf from "@/assets/leaf1.jpg"

const Certifications = () => {
  const certifications = [
    {
      title: "FDA Approved Formula",
      description: "Our BRAINFORCE formula is approved by the Food and Drug Administration, ensuring safety and efficacy for cognitive enhancement.",
      date: "Valid till 2027",
      authority: "Food and Drug Administration (FDA)",
      icon: Shield,
      status: "Approved",
      certNumber: "FDA-AYU-2024-0156"
    },
    {
      title: "FSSAI Licensed",
      description: "Licensed by Food Safety and Standards Authority of India for manufacturing and distribution of nutraceutical products.",
      date: "Valid till 2026",
      authority: "Food Safety and Standards Authority of India",
      icon: CheckCircle,
      status: "Active",
      certNumber: "FSSAI-LIC-10012345678901"
    },
    {
      title: "AYUSH Ministry Certification",
      description: "Officially certified by the Ministry of Ayush, Government of India for authentic Ayurvedic formulations using traditional wisdom.",
      date: "Valid till 2026",
      authority: "Ministry of AYUSH, Govt. of India",
      icon: Leaf,
      status: "Certified",
      certNumber: "AYUSH-CERT-2024-BF001"
    },
    {
      title: "ISO 9001:2015 Quality Management",
      description: "International standard for quality management systems ensuring consistent product quality and manufacturing excellence.",
      date: "Valid till 2025",
      authority: "International Organization for Standardization",
      icon: Award,
      status: "Certified",
      certNumber: "ISO-9001-2024-IN-BF"
    },
    {
      title: "GMP (Good Manufacturing Practice)",
      description: "WHO-GMP certification for maintaining the highest standards in manufacturing processes, quality control, and safety protocols.",
      date: "Valid till 2025",
      authority: "WHO-GMP Standards Authority",
      icon: Building2,
      status: "Certified",
      certNumber: "WHO-GMP-2024-IND-789"
    },
    {
      title: "Third-Party Lab Testing",
      description: "Every batch undergoes rigorous testing by independent laboratories for purity, potency, heavy metals, and microbial safety.",
      date: "Ongoing Testing",
      authority: "Certified Independent Laboratories",
      icon: FlaskConical,
      status: "Active",
      certNumber: "LAB-TEST-BF-2024"
    }
  ];

  const achievements = [
    {
      title: "50,000+",
      subtitle: "Satisfied Customers",
      icon: Users,
      description: "Trusted minds across India and beyond"
    },
    {
      title: "15+",
      subtitle: "Years of Excellence",
      icon: Calendar,
      description: "Serving cognitive wellness since 2009"
    },
    {
      title: "99.8%",
      subtitle: "Purity Standards",
      icon: FlaskConical,
      description: "Exceptional quality in every bottle"
    },
    {
      title: "100%",
      subtitle: "Natural Formula",
      icon: Leaf,
      description: "Centuries of Ayurvedic wisdom"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark py-16"
         style={{ backgroundImage: `url(${leaf})` }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Certifications
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            BrianForce is committed to delivering the highest quality Ayurvedic products. 
            Our certifications reflect our dedication to excellence, safety, and authenticity.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Certifications Grid */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Official Certifications & Approvals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our BRAINFORCE products are backed by prestigious certifications from recognized authorities, 
                ensuring quality, safety, and authenticity in every bottle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{cert.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Authority:</span>
                          <span className="font-medium">{cert.authority}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Validity:</span>
                          <span className="font-medium text-green-600">{cert.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Cert. No:</span>
                          <span className="font-mono text-xs text-primary">{cert.certNumber}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Our Achievements</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that speak for our commitment to excellence and customer satisfaction in cognitive wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-2">
                        {achievement.title}
                      </h3>
                      <p className="font-semibold mb-2">{achievement.subtitle}</p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-primary-dark/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Our Quality Promise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">100% Natural</h3>
                    <p className="text-sm text-muted-foreground">
                      No artificial additives, preservatives, or harmful chemicals. Pure Ayurvedic wisdom in every drop.
                    </p>
                  </div>
                  <div>
                    <FlaskConical className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Lab Tested</h3>
                    <p className="text-sm text-muted-foreground">
                      Every batch undergoes rigorous testing for purity, potency, heavy metals, and microbial safety
                    </p>
                  </div>
                  <div>
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Expert Formulated</h3>
                    <p className="text-sm text-muted-foreground">
                      Developed by experienced Ayurvedic practitioners and modern researchers for cognitive wellness
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Manufacturing Standards */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Manufacturing Excellence</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our state-of-the-art manufacturing facility adheres to the highest international standards for cognitive wellness products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">GMP Clean Room Environment</h3>
                  <p className="text-sm text-muted-foreground">
                    Sterile manufacturing environment with controlled air quality meeting WHO-GMP standards
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">ISO-Certified Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern machinery ensuring precise formulation and consistency in every bottle
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Stage Quality Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Rigorous quality checks at every step from raw material sourcing to final packaging
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certifications;