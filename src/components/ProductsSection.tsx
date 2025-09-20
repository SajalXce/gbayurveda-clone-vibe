import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    image: product1,
    title: "Controls Blood Sugar Levels",
    price: "$22.00"
  },
  {
    id: 2,
    image: product2,
    title: "Power of Triphala and Wheatgrass",
    price: "$21.00"
  },
  {
    id: 3,
    image: product3,
    title: "Controlling Blood Pressure",
    price: "$26.00"
  },
  {
    id: 4,
    image: product4,
    title: "Relieves Constipation & Improves Digestion",
    price: "$18.00"
  },
  {
    id: 5,
    image: product1,
    title: "Ayurvedic Capsules for Muscle Gain",
    price: "$17.00"
  },
  {
    id: 6,
    image: product2,
    title: "Ayurvedic Immunity Booster for Kids",
    price: "$13.00"
  },
  {
    id: 7,
    image: product3,
    title: "Herbal Green Tea with lemon Extract",
    price: "$10.00"
  },
  {
    id: 8,
    image: product4,
    title: "Ayurvedic Herbal Green Tea",
    price: "$7.00"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            We Are Here To Give You The<br />
            Best Ayurvedic Products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden animate-scale-in border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-lg font-heading font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </p>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;