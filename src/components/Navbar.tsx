import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-carniceria.png";

const navLinks = [
  { label: "INICIO", href: "#inicio" },
  { label: "NUESTROS CORTES", href: "#cortes" },
  { label: "VENTAS POR MAYOR", href: "#mayorista" },
  { label: "CONTACTO", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-1 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+543834123456" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span className="hidden sm:inline">Consultas Online</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contacto" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <MapPin size={14} />
              <span>Síguenos</span>
            </a>
            <span className="hidden md:inline">ES</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-secondary"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-2">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-secondary-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

            {/* Left Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0">
              <img src={logo} alt="Carnicería Virgen del Valle" className="h-16 md:h-20 w-auto" />
            </a>

            {/* Right Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Placeholder for mobile alignment */}
            <div className="lg:hidden w-10" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-secondary transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-secondary-foreground">
              <X size={28} />
            </button>
          </div>
          <nav className="px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-4 text-secondary-foreground text-lg font-bold tracking-wide hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};