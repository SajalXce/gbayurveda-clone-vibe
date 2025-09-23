import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/p1.jpg";
import product3 from "@/assets/p2.jpg";
import product4 from "@/assets/p3.jpg";

// Products data - Each image represents a different product
const PRODUCTS_DATA = {
  0: {
    id: 1,
    name: "BrainForce Memory Booster",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 247,
    inStock: true,
    image: product1,
    description:
      "Advanced Ayurvedic formula designed to enhance memory, focus, and cognitive function naturally.",
    ingredients: [
      "Brahmi",
      "Mandukaparni",
      "Shankhpushpi",
      "Ashwagandha",
      "Jatamansi",
    ],
    benefits: [
      "Enhanced memory retention",
      "Improved focus and concentration",
      "Reduced mental fatigue",
      "Better cognitive performance",
      "Natural stress relief",
    ],
    dosage: "Take 1-2 capsules twice daily with water, preferably after meals.",
    features: [
      "100% Natural Ingredients",
      "No Side Effects",
      "Clinically Tested",
      "GMP Certified",
      "30-Day Money Back Guarantee",
    ],
  },
  1: {
    id: 2,
    name: "Ayurvedic Focus Tonic",
    price: 799,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 189,
    inStock: true,
    image: product2,
    description:
      "Natural herbal tonic formulated to improve concentration and mental clarity using time-tested Ayurvedic herbs.",
    ingredients: [
      "Ginkgo Biloba",
      "Brahmi",
      "Gotu Kola",
      "Rosemary",
      "Green Tea Extract",
    ],
    benefits: [
      "Sharpened mental focus",
      "Enhanced cognitive clarity",
      "Improved attention span",
      "Reduced brain fog",
      "Increased mental energy",
    ],
    dosage: "Take 10ml (2 teaspoons) twice daily, preferably on empty stomach.",
    features: [
      "Liquid Formula for Better Absorption",
      "Sugar-Free",
      "Preservative-Free",
      "Ayush Approved",
      "15-Day Money Back Guarantee",
    ],
  },
  2: {
    id: 3,
    name: "Stress Relief Capsules",
    price: 649,
    originalPrice: 899,
    rating: 4.7,
    reviews: 312,
    inStock: true,
    image: product3,
    description:
      "Powerful adaptogenic blend designed to combat stress, anxiety, and promote overall mental wellbeing naturally.",
    ingredients: [
      "Ashwagandha",
      "Rhodiola Rosea",
      "Holy Basil",
      "Lemon Balm",
      "Passionflower",
    ],
    benefits: [
      "Reduced stress and anxiety",
      "Better mood regulation",
      "Improved sleep quality",
      "Enhanced emotional balance",
      "Increased stress resilience",
    ],
    dosage:
      "Take 1 capsule twice daily with meals, or as directed by healthcare professional.",
    features: [
      "Adaptogenic Formula",
      "Non-Habit Forming",
      "Vegan Capsules",
      "Third-Party Tested",
      "60-Day Satisfaction Guarantee",
    ],
  },
  3: {
    id: 4,
    name: "Mental Clarity Syrup",
    price: 549,
    originalPrice: 749,
    rating: 4.5,
    reviews: 156,
    inStock: false,
    image: product4,
    description:
      "Delicious herbal syrup that supports mental clarity and cognitive function, perfect for students and professionals.",
    ingredients: [
      "Brahmi",
      "Shankhpushpi",
      "Saraswatarishta",
      "Honey",
      "Natural Flavors",
    ],
    benefits: [
      "Enhanced learning ability",
      "Better memory recall",
      "Improved concentration",
      "Reduced mental exhaustion",
      "Supports brain health",
    ],
    dosage: "Take 15ml (1 tablespoon) twice daily after meals.",
    features: [
      "Great Taste",
      "Easy to Consume",
      "No Artificial Colors",
      "Suitable for All Ages",
      "45-Day Return Policy",
    ],
  },
};

const productImages = [product1, product2, product3, product4];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get current product based on selected image
  const product = PRODUCTS_DATA[selectedImage];

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  const getRelatedProducts = (currentIndex) => {
    return Object.values(PRODUCTS_DATA)
      .filter((_, index) => index !== currentIndex)
      .slice(0, 3);
  };

  const relatedProducts = getRelatedProducts(selectedImage);

  // Remove the ProductSelector component as it's no longer needed

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/#products" className="hover:text-primary">
            Products
          </a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                    setQuantity(1); // Reset quantity when changing product
                  }}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <Badge variant={product.inStock ? "default" : "secondary"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
              <Badge variant="secondary" className="text-green-600">
                Save ₹{product.originalPrice - product.price}
              </Badge>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 rounded-xl"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4 text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span>Easy Returns</span>
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
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Dosage Instructions:</h3>
                    <p className="text-muted-foreground">{product.dosage}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Natural Ingredients:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Health Benefits:</h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold">{product.rating}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                      Based on {product.reviews} reviews
                    </span>
                  </div>
                </div>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Detailed reviews will be displayed here.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Customer reviews and ratings system coming soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <Card
                key={relatedProduct.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => {
                  // Find the index of this product in the productImages array
                  const productIndex = Object.values(PRODUCTS_DATA).findIndex(
                    (p) => p.id === relatedProduct.id
                  );
                  setSelectedImage(productIndex);
                  setQuantity(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <CardContent className="p-4">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-primary">
                      ₹{relatedProduct.price}
                    </p>
                    <p className="text-sm text-muted-foreground line-through">
                      ₹{relatedProduct.originalPrice}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(relatedProduct.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({relatedProduct.reviews})
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
