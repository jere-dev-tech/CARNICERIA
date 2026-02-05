import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-carniceria.png";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestros cortes", href: "#cortes" },
  { label: "Venta por mayor", href: "#mayorista" },
  { label: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-pattern">
      {/* Top Bar */}
      <div className="bg-primary py-3">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 text-primary-foreground text-sm">
            <span>Lun - Sab: 8a 13:00hs / 17:30 21hs.</span>
            <span>Dom: 9 a 13:00hs...</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="dark-pattern py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <img src={logo} alt="Carnicería Virgen del Valle" className="h-24 w-auto mb-4" />
              <p className="text-primary-foreground/70 text-sm">
                EXPORTAMOS A TODO CERDO<br />
                CALIDAD DE EXPORTACIÓN<br />
                Venta mayorista y minoristas
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-4 uppercase tracking-wide">
                Horarios
              </h4>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Lun - Sab: 8 a 13:00hs / 17:30 21hs.<br />
                Dom: 9 a 13:00hs...
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+5438341234567"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone size={16} className="text-primary" />
                  351 260 1310
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <MapPin size={16} className="text-primary" />
                  Av. Pueyrredon, Catamarca
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary-foreground font-bold mb-4 uppercase tracking-wide">
                Páginas
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
                ¡Síguenos!
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary transition-colors rounded-lg flex items-center justify-center"
                >
                  <Facebook size={20} className="text-primary-foreground" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary transition-colors rounded-lg flex items-center justify-center"
                >
                  <Instagram size={20} className="text-primary-foreground" />
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