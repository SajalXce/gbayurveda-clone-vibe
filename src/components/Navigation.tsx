"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Leaf, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const pagesRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pagesRef.current &&
        !pagesRef.current.contains(event.target as Node)
      ) {
        setIsPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer space-x-2"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              BrianForce
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>

            {/* Dropdown wrapper */}
            <div className="relative" ref={pagesRef}>
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex items-center gap-1 cursor-pointer text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Pages
                <ChevronDown
                  className={`mt-[2px] transition-transform duration-200 ${
                    isPagesOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {isPagesOpen && (
                <div className="absolute left-0 mt-2 w-44 rounded-xl bg-white shadow-lg animate-fade-in">
                  <a
                    href="/about"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    About Us
                  </a>

                  <a
                    href="/about"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Certifications
                  </a>

                  <a
                    href="/privacy"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Privacy
                  </a>

                  <a
                    href="/refund"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Refund
                  </a>
                </div>
              )}
            </div>

          
            <a
              href="/product"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Products
            </a>
            <a
              href="/contact"
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
                <div className="font-semibold">+91 9936616499</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="/product"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/certifications"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground pt-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 9936616499</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
