import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/generated_images/MysraProductions_financial_advisory_logo_ad84a9ab.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="MysraProductions" className="w-10 h-10 rounded-md" />
            <div className="text-xl font-bold text-primary">MYSRA<span className="text-foreground">PRODUCTIONS</span></div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-faq"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-team"
            >
              Equipo
            </button>
            <Button
              onClick={() => window.open(import.meta.env.VITE_CALCOM_BOOKING_URL, '_blank')}
              className="bg-chart-2 text-white border-none"
              data-testid="button-book-consultation"
            >
              Reservar tu consultoría gratis
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="link-features-mobile"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="link-pricing-mobile"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="link-faq-mobile"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="link-team-mobile"
            >
              Equipo
            </button>
            <Button
              onClick={() => window.open(import.meta.env.VITE_CALCOM_BOOKING_URL, '_blank')}
              className="w-full bg-chart-2 text-white border-none"
              data-testid="button-book-consultation-mobile"
            >
              Reservar tu consultoría gratis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
