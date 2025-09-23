import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Shield, Truck, RotateCcw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import brainforceProduct from "@/assets/brainforce-product.jpg";
import elderlyCouple from "@/assets/brainforce-elderly-couple.jpg";
import professionalImage from "@/assets/brainforce-professional.jpg";
import herbsNature from "@/assets/brainforce-herbs-nature.jpg";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "BRAINFORCE Syrup",
    price: 220,
    originalPrice: 299,
    rating: 4.9,
    reviews: 1247,
    inStock: true,
    images: [brainforceProduct, elderlyCouple, professionalImage, herbsNature],
    description: "BRAINFORCE Syrup is a traditional Ayurvedic formulation designed to naturally support brain health. It combines carefully selected herbal juices and standardized extracts — including Brahmi, Shankhpushpi, Jatamansi, Ashwagandha, and Mandukparni — which are known to promote memory, concentration, and mental balance.",
    ingredients: [
      "Brahmi (Bacopa monnieri) - 400mg",
      "Shankhpushpi (Convolvulus pluricaulis) - 300mg", 
      "Jatamansi (Nardostachys jatamansi) - 300mg",
      "Mandukparni (Centella asiatica) - 200mg",
      "Ashwagandha (Withania somnifera) - 150mg",
      "Vach (Acorus calamus) - 180mg",
      "Harad (Terminalia chebula) - 120mg",
      "Tulsi (Ocimum sanctum) - 100mg",
      "Aloe Vera (Leaf) - 1ml",
      "Amla (Fruit) - 1ml",
      "Peppermint (Mentha piperita) - 15mg",
      "Lavandula (Lavandula stoechas) - 50mg"
    ],
    benefits: [
      "Boosts memory retention and learning ability",
      "Improves focus and concentration", 
      "Reduces stress and anxiety naturally",
      "Increases mental energy and stamina",
      "Promotes mental calmness and clarity",
      "Supports overall cognitive performance",
      "Helps with mental fatigue",
      "Natural brain rejuvenation"
    ],
    dosage: "Adults: Take 10-15 ml twice daily, preferably after meals. Children (5+ years): Take 5-10 ml twice daily after meals. Shake well before use.",
    features: [
      "FDA, FSSAI & AYUSH Approved",
      "GMP & ISO Certified Facilities",
      "100% Natural Ayurvedic Formula",
      "No Side Effects",
      "Suitable for Students, Professionals & Seniors",
      "Affordable at Just ₹220",
      "Backed by Ancient Wisdom & Modern Research"
    ],
    targetAudience: [
      "Students who want to boost memory and concentration",
      "Working professionals facing high stress and mental fatigue",
      "Senior citizens wanting to maintain mental clarity",
      "Parents of children 5+ years for academic performance",
      "Anyone under stress seeking calmness and mental balance"
    ],
    precautions: [
      "Consult physician if pregnant or breastfeeding",
      "Not a replacement for prescribed medicines",
      "Diabetics should consult doctor before use (contains sugar)",
      "Discontinue if allergic reactions occur",
      "Keep out of reach of children",
      "Store in cool, dry place away from sunlight"
    ]
  };

  const relatedProducts = [
    { id: 2, name: "BRAINFORCE Pack of 2", price: 400, image: brainforceProduct },
    { id: 3, name: "BRAINFORCE Family Pack", price: 800, image: brainforceProduct },
    { id: 4, name: "BRAINFORCE Monthly Supply", price: 1200, image: brainforceProduct }
  ];

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} BRAINFORCE Syrup to cart!`);
    // In a real app, this would add to cart state/context
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl border border-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted'}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <Badge variant="secondary" className="mb-4">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</span>
                  <Badge variant="destructive">Save ₹{product.originalPrice - product.price}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Inclusive of all taxes • Free shipping above ₹500</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decrementQuantity}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={incrementQuantity}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={handleAddToCart} className="md:col-span-2" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </Button>
              </div>

              <Button variant="outline" className="w-full" size="lg">
                <Share2 className="w-5 h-5 mr-2" />
                Share Product
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">FDA Approved</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Free Delivery</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="usage">Usage & Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What is BRAINFORCE Syrup?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    With regular use, BRAINFORCE Syrup may help improve focus, enhance mental stamina, and support overall cognitive wellness. Crafted with powerful herbs, backed by deep research. BRAINFORCE Syrup is inspired by ancient Ayurvedic wisdom and formulated with some of the most important medicinal herbs known for their benefits on the mind.
                  </p>
                  <h4 className="text-lg font-semibold mb-4">Who needs this?</h4>
                  <ul className="space-y-2">
                    {product.targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Natural Ingredients (Per 10ml)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-start space-x-2 p-3 bg-muted/30 rounded-lg">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    All ingredients are standardized extracts and natural juices, carefully sourced and processed in GMP & ISO certified facilities.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What does BRAINFORCE Syrup really do?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    BRAINFORCE Syrup is not just a memory booster — it is a complete Ayurvedic brain tonic. Each herb in the formulation plays a specific role in supporting your mental health.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                        </span>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">How and when to take it?</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {product.dosage}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        The best time is morning and evening after food for maximum absorption and effect.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Precautions & Warnings</h4>
                      <ul className="space-y-2">
                        {product.precautions.map((precaution, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{precaution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Certifications & Quality</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
              Related Products
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">₹{relatedProduct.price}</p>
                    <Button className="w-full">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;