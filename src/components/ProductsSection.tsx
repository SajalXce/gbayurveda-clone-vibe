import { Button } from "@/components/ui/button";
import brainforceProduct from "@/assets/brainforce-product.jpg";

const products = [
  {
    id: 1,
    image: brainforceProduct,
    title: "BRAINFORCE Syrup 200ml",
    price: 220,
    name: "BRAINFORCE Syrup"
  },
  {
    id: 2,
    image: brainforceProduct,
    title: "BRAINFORCE Syrup (Pack of 2)",
    price: 400,
    name: "BRAINFORCE Syrup Pack"
  },
  {
    id: 3,
    image: brainforceProduct,
    title: "BRAINFORCE Syrup (Family Pack)",
    price: 800,
    name: "BRAINFORCE Family Pack"
  },
  {
    id: 4,
    image: brainforceProduct,
    title: "BRAINFORCE Syrup (Monthly Supply)",
    price: 1200,
    name: "BRAINFORCE Monthly Pack"
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            BRAINFORCE Syrup<br />
            Sharp Mind, Strong Memory
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
                  ₹{product.price}
                </p>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  onClick={() => window.location.href = '/cart'}
                >
                  🛒 Add to Cart
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