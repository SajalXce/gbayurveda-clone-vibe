import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leaf from "@/assets/leaf1.jpg";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          details: "We collect information you provide directly, such as your name, email address, phone number, shipping address, and payment information when you make a purchase or create an account."
        },
        {
          subtitle: "Usage Information", 
          details: "We automatically collect information about how you use our website, including your IP address, browser type, pages visited, and time spent on our site."
        },
        {
          subtitle: "Cookies and Tracking",
          details: "We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Order Processing",
          details: "We use your personal information to process and fulfill your orders, communicate about your purchases, and provide customer support."
        },
        {
          subtitle: "Marketing Communications",
          details: "With your consent, we may send you promotional emails about new products, special offers, and health tips related to Ayurvedic wellness."
        },
        {
          subtitle: "Website Improvement",
          details: "We analyze usage data to improve our website functionality, user experience, and product offerings."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Users,
      content: [
        {
          subtitle: "Service Providers",
          details: "We share information with trusted third-party service providers who help us operate our business, such as payment processors and shipping companies."
        },
        {
          subtitle: "Legal Requirements",
          details: "We may disclose information when required by law, to protect our rights, or to ensure the safety of our users and the public."
        },
        {
          subtitle: "Business Transfers",
          details: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          details: "We use industry-standard SSL encryption to protect your personal and payment information during transmission."
        },
        {
          subtitle: "Secure Storage",
          details: "Your data is stored on secure servers with appropriate technical and organizational measures to prevent unauthorized access."
        },
        {
          subtitle: "Access Controls",
          details: "We limit access to your personal information to employees and contractors who need it to perform their duties."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-primary to-primary-dark py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${leaf})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Our Commitment to Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                At Ayurved, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
              <div className="text-center text-sm text-muted-foreground">
                <p><strong>Last Updated:</strong> September 22, 2025</p>
                <p><strong>Effective Date:</strong> September 22, 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h4 className="font-semibold text-foreground mb-2">{item.subtitle}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Your Rights Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Access and Update</h4>
                <p className="text-sm text-muted-foreground">
                  You can access and update your personal information by logging into your account or contacting us directly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Marketing Opt-out</h4>
                <p className="text-sm text-muted-foreground">
                  You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in our emails.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Deletion</h4>
                <p className="text-sm text-muted-foreground">
                  You can request deletion of your personal information, subject to legal and operational requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Cookie Preferences</h4>
                <p className="text-sm text-muted-foreground">
                  You can manage cookie preferences through your browser settings or our cookie preference center.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-xl">Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your experience on our website. Here's how we use them:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-semibold mb-2">Essential Cookies</h5>
                  <p className="text-sm text-muted-foreground">Required for basic website functionality and security.</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-semibold mb-2">Analytics Cookies</h5>
                  <p className="text-sm text-muted-foreground">Help us understand how visitors use our website.</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h5 className="font-semibold mb-2">Marketing Cookies</h5>
                  <p className="text-sm text-muted-foreground">Used to deliver relevant advertisements and content.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              Contact Us About Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please don't hesitate to contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">privacy@ayurved.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-muted-foreground">
                  123 Wellness Street<br />
                  Ayurveda City, State 123456<br />
                  India
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9 AM - 6 PM<br />
                  Saturday: 10 AM - 4 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. 
              We will notify you of any significant changes by posting the updated policy on our website and updating the 
              "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;