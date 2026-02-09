import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-carniceria.png";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestros cortes", href: "#cortes" },
  { label: "Venta por mayor", href: "#mayorista" },
  { label: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-pattern">
      {/* Main Footer */}
      <div className="dark-pattern py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <img
                src={logo}
                alt="Carnicería Virgen del Valle"
                className="h-24 w-auto mb-4"
              />
              <p className="text-primary-foreground/70 text-sm">
                Carne fresca todos los días<br />
                para familias y comercios<br />
                de Catamarca.
              </p>
            </div>

            {/* Horarios Card */}
            <div className="lg:col-span-1">
              <div className="footer-hours-card bg-primary rounded-xl p-6 text-primary-foreground shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Clock size={28} />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wide">
                      Horarios
                    </h4>
                    <div className="mt-2 space-y-2 text-left text-sm footer-hours">
                      <div className="footer-hours-row">
                        <span className="footer-hours-label">Lun a Sab:</span>
                        <span className="footer-hours-time">9 a 14 hs - 18:30 a 22 hs</span>
                      </div>
                      <div className="footer-hours-row">
                        <span className="footer-hours-label">Dom:</span>
                        <span className="footer-hours-time">9 a 14 hs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>3834 061733</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Av. Virgen del Valle 933</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-4 uppercase tracking-wide">
                Enlaces rapidos
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-4 uppercase tracking-wide">
                ¡Seguinos!
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/virgendelvallecarniceria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary transition-colors rounded-lg flex items-center justify-center"
                >
                  <Instagram size={20} className="text-primary-foreground" />
                </a>
                <a
                  href="tel:+543834061733"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary transition-colors rounded-lg flex items-center justify-center"
                >
                  <Phone size={20} className="text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-charcoal py-4">
        <div className="container text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Carnicería Virgen del Valle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
