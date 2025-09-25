import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, MapPin, Shield, Phone, Package } from "lucide-react";

const ShippingPolicy = () => {
  const shippingOptions = [
    {
      title: "Standard Delivery",
      duration: "5-7 Business Days",
      cost: "Free on orders above ₹500",
      icon: Truck,
      description: "Delivered to your doorstep via trusted courier partners"
    },
    {
      title: "Express Delivery",
      duration: "2-3 Business Days",
      cost: "₹50 extra charges",
      icon: Clock,
      description: "Faster delivery for urgent requirements"
    },
    {
      title: "Same Day Delivery",
      duration: "Same Day",
      cost: "Available in select cities",
      icon: MapPin,
      description: "Available in major metro cities only"
    }
  ];

  const policyDetails = [
    {
      title: "Order Processing Time",
      icon: Package,
      points: [
        "Orders are processed within 1-2 business days",
        "Orders placed on weekends are processed on Monday",
        "You'll receive a confirmation email with tracking details",
        "Processing may take longer during festival seasons"
      ]
    },
    {
      title: "Delivery Coverage",
      icon: MapPin,
      points: [
        "We deliver across India to all serviceable PIN codes",
        "Remote areas may have extended delivery times",
        "Cash on Delivery (COD) available in most locations",
        "Online payment preferred for faster processing"
      ]
    },
    {
      title: "Packaging & Safety",
      icon: Shield,
      points: [
        "Products are carefully packed to prevent damage",
        "Temperature-controlled packaging for sensitive items",
        "Eco-friendly packaging materials used wherever possible",
        "Each package is sealed and quality-checked before dispatch"
      ]
    }
  ];

  const importantNotes = [
    "Delivery times may vary during festivals, monsoons, or unforeseen circumstances",
    "We are not responsible for delays caused by natural disasters or government restrictions",
    "Please ensure correct address and contact details to avoid delivery delays",
    "Someone must be available to receive the package during delivery hours",
    "For any delivery issues, contact us immediately with your order number"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Truck className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Shipping Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fast, safe, and reliable delivery of BrainForce products to your doorstep across India
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Delivery Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {shippingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {option.duration}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {option.cost}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Shipping Details
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {policyDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      {detail.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {detail.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
              Delivery Zones & Timeline
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Zone A - Metro Cities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong>Cities:</strong> Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Delivery Time:</strong> 2-4 business days
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Same Day Delivery:</strong> Available in select areas
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Zone B - Other Cities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong>Coverage:</strong> All other tier 2 & tier 3 cities
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Delivery Time:</strong> 5-7 business days
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Remote Areas:</strong> 7-10 business days
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
              Important Notes
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {importantNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {note}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Need Help with Your Order?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our customer support team is here to help you track your order and answer any shipping questions.
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">+91 9936616499</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Customer support available: Monday to Saturday, 9 AM - 6 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;