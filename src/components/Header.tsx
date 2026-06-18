import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import donnaDriveLogo from "@/assets/donna-drive-logo.png";

const Header = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

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
            {isHome ? (
              <>
                <a href="#features" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">Features</a>
                <a href="#how-it-works" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">How It Works</a>
                <a href="#pricing" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">Pricing</a>
                <a href="#faq" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">FAQ</a>
              </>
            ) : (
              <Link to="/" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">Home</Link>
            )}
            <Link to="/blog" className={`text-sm lg:text-base transition-colors ${pathname.startsWith('/blog') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
              Blog
            </Link>
            <Link to="/get-onboard" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Get Onboard
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/book-demo">
              <Button variant="accent" size="sm" className="text-sm px-3 sm:px-4">
                Book a Demo
              </Button>
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-3/4 sm:max-w-sm">
                <nav className="flex flex-col gap-6 mt-10">
                  {isHome ? (
                    <>
                      <SheetClose asChild>
                        <a href="#features" className="text-lg text-foreground hover:text-primary transition-colors">Features</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#how-it-works" className="text-lg text-foreground hover:text-primary transition-colors">How It Works</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#pricing" className="text-lg text-foreground hover:text-primary transition-colors">Pricing</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#faq" className="text-lg text-foreground hover:text-primary transition-colors">FAQ</a>
                      </SheetClose>
                    </>
                  ) : (
                    <SheetClose asChild>
                      <Link to="/" className="text-lg text-foreground hover:text-primary transition-colors">Home</Link>
                    </SheetClose>
                  )}
                  <SheetClose asChild>
                    <Link to="/blog" className={`text-lg transition-colors ${pathname.startsWith('/blog') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                      Blog
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;