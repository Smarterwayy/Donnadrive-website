import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import donnaDriveLogo from "@/assets/donna-drive-logo.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={donnaDriveLogo} 
              alt="Donna Drive Logo" 
              className="h-9 w-auto rounded-lg"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          
          <Link to="/book-demo">
            <Button variant="accent" size="sm" className="text-sm px-3 sm:px-4">
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;