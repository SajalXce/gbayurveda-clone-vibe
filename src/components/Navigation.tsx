import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Leaf } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              Ayurved
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Pages
            </a>
            <a
              href="#blog"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Phone Number & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3 text-foreground">
              <Phone className="w-4 h-4" />
              <div className="text-sm">
                <div className="text-muted-foreground text-xs">Call Us Now</div>
                <div className="font-semibold">123 456 7890</div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pages
              </a>
              <a
                href="#blog"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground pt-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">123 456 7890</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;