import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary" data-testid="text-footer-brand">MYSRAPRODUCTIONS</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Asesoría Financiera Profesional para tu Futuro
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-features"
                >
                  Características
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-faq"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-community-title">Comunidad</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-discord">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-youtube">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-legal-title">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacidad" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-privacy"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/términosycondiciones" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-terms"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
            © {new Date().getFullYear()} MysraProductions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
