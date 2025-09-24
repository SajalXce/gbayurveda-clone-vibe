import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-heading font-bold">
                BrainForce
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Experience the best in Ayurveda and natural healing. 100% organic products, expert consultations, and traditional medicine.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#blog" className="text-background/80 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Herbal Treatment</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Ayurvedic Medicine</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Consultations</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Theta Healing</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Herb Products</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">+91 9936616499</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">info@BrainForce.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/80">Bela Pratapgarh<br />Uttar Pradesh , India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2025 BrainForce. All rights reserved. | Designed with for natural healing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;