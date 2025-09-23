import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, RotateCcw, Shield, AlertCircle, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leaf from "@/assets/leaf1.jpg";

const Refund = () => {
  const refundSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Reach out to our customer service within 30 days of purchase",
      icon: Phone
    },
    {
      step: 2,
      title: "Return Authorization",
      description: "We'll provide you with a return authorization number and instructions",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Ship Product Back",
      description: "Send the product back in original packaging with the authorization number",
      icon: RotateCcw
    },
    {
      step: 4,
      title: "Processing",
      description: "We'll process your refund within 5-7 business days after receiving the product",
      icon: Clock
    }
  ];

  const refundConditions = [
    "Product must be in original, unopened packaging",
    "Request must be made within 30 days of purchase",
    "Product must not be damaged or tampered with",
    "Original receipt or order confirmation required",
    "Customer is responsible for return shipping costs"
  ];

  const nonRefundableItems = [
    "Products that have been opened or used",
    "Items purchased more than 30 days ago",
    "Products without original packaging or labels",
    "Damaged products due to misuse"
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
            Refund Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your satisfaction is our priority. Learn about our hassle-free refund process.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Policy Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">30-Day Money Back Guarantee</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We stand behind the quality of our Ayurvedic products. If you're not completely satisfied 
                with your purchase, you can return it within 30 days for a full refund.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Refund Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            How to Request a Refund
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {refundSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Refund Conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                Refund Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {refundConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                Non-Refundable Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {nonRefundableItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-heading">Need Help with a Refund?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              Our customer service team is here to help you with any refund requests or questions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-center gap-2 p-4 bg-muted/50 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 p-4 bg-muted/50 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-muted-foreground">returns@BrainForce.com</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Customer Service
            </Button>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Processing Time</h4>
                <p className="text-sm text-muted-foreground">
                  Refunds are typically processed within 5-7 business days after we receive your returned item. 
                  Please note that it may take an additional 3-5 business days for the refund to appear in your account.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Shipping Costs</h4>
                <p className="text-sm text-muted-foreground">
                  Original shipping costs are non-refundable. Return shipping costs are the responsibility of the customer 
                  unless the return is due to our error.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">International Orders</h4>
                <p className="text-sm text-muted-foreground">
                  For international orders, customers are responsible for any customs duties or taxes that may apply to returns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Refund;