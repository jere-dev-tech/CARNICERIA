import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-carniceria.png";
import { NavLink } from "@/components/NavLink";

const HamburgerButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      className="relative w-[42px] h-[42px] lg:hidden z-[110]"
      aria-label="Toggle menu"
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <path
          className={`line lineTop ${isOpen ? "open" : ""}`}
          d="M6 11L44 11"
        />
        <path
          className={`line lineMid ${isOpen ? "open" : ""}`}
          d="M6 24H43"
        />
        <path
          className={`line lineBottom ${isOpen ? "open" : ""}`}
          d="M6 37H43"
        />
      </svg>
    </button>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isOpen) {
        setIsOpen(false);
        setOpenSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const setOffset = () => {
      const height = nav.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--navbar-offset",
        `${Math.ceil(height)}px`,
      );
    };

    setOffset();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(setOffset);
      resizeObserver.observe(nav);
    }

    window.addEventListener("resize", setOffset);
    return () => {
      window.removeEventListener("resize", setOffset);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollTarget", href);
      navigate("/");
      closeMenu();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const reloadToHome = () => {
    sessionStorage.setItem("forceTop", "1");
    window.location.replace(`${import.meta.env.BASE_URL}#/`);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        ref={navRef}
        className={`navbar-desktop sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="container">
          <div className="navbar-pad py-4 md:py-6">
            {/* Mobile layout */}
            <div className="flex items-center justify-between relative lg:hidden">
              <button
                className="w-[42px] h-[42px] flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="Carrito"
              >
                <ShoppingCart size={26} />
              </button>

              <NavLink
                to="/"
                className="absolute left-1/2 -translate-x-1/2"
                onClick={reloadToHome}
              >
                <img
                  src={logo}
                  alt="Carnicería Virgen del Valle"
                  className="h-16 w-auto block object-contain"
                />
              </NavLink>

              <HamburgerButton
                isOpen={isOpen}
                toggle={() => setIsOpen(!isOpen)}
              />
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:flex items-center">
              <div className="navbar-inner w-full max-w-[1200px] xl:max-w-[1280px] mx-auto px-8">
                <div className="navbar-grid grid grid-cols-[1fr_auto_1fr] items-center gap-x-10 xl:gap-x-14">
                  <div className="nav-group nav-group-left flex items-center justify-start gap-6 xl:gap-8 pl-2">
                    <NavLink to="/productos" className="nav-link">
                      PRODUCTOS
                    </NavLink>
                    <NavLink to="/carniceria" className="nav-link">
                      CARNICERÍA
                    </NavLink>
                    <NavLink to="/elaborados" className="nav-link">
                      ELABORADOS
                    </NavLink>
                  </div>

                  <NavLink
                    to="/"
                    className="navbar-logo flex items-center justify-center"
                    onClick={reloadToHome}
                  >
                    <img
                      src={logo}
                      alt="Carnicería Virgen del Valle"
                      className="navbar-logo-img h-20 w-auto block object-contain"
                    />
                  </NavLink>

                  <div className="nav-group nav-group-right flex items-center justify-end gap-8 xl:gap-10 pr-18 xl:pr-12">
                    <button
                      onClick={() => scrollToSection("#mayorista")}
                      className="nav-link"
                    >
                      GASTRONÓMICOS
                    </button>
                    <button
                      onClick={() => scrollToSection("#contacto")}
                      className="nav-link"
                    >
                      CONTACTO
                    </button>
                    <button
                      onClick={() => scrollToSection("#quienes-somos")}
                      className="nav-link whitespace-nowrap"
                    >
                      QUIÉNES SOMOS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-[75%] max-w-[300px]
 bg-secondary transform transition-transform duration-300 overflow-y-auto z-[70] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="text-secondary-foreground">
            {/* CARNICERÍA */}
            <button
              onClick={() => toggleSection("carniceria")}
              className="w-full flex items-center justify-between px-6 py-5 border-b border-white/10 font-bold tracking-wide"
            >
              CARNICERÍA
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openSection === "carniceria" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`bg-white/10 transition-all duration-300 overflow-hidden ${
                openSection === "carniceria" ? "max-h-96" : "max-h-0"
              }`}
            >
              <NavLink
                to="/carniceria"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                VER TODO EN CARNICERÍA
              </NavLink>
              <NavLink
                to="/carniceria/vacuna"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                Carne Vacuna
              </NavLink>
              <NavLink
                to="/carniceria/cerdo"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                Carne de Cerdo
              </NavLink>
              <NavLink
                to="/carniceria/pollo"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                Pollo
              </NavLink>
              <NavLink
                to="/carniceria/menudencias"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                Menudencias
              </NavLink>
            </div>

            {/* ELABORADOS */}
            <button
              onClick={() => toggleSection("elaborados")}
              className="w-full flex items-center justify-between px-6 py-5 border-b border-white/10 font-bold tracking-wide"
            >
              ELABORADOS
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openSection === "elaborados" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`bg-white/10 transition-all duration-300 overflow-hidden ${
                openSection === "elaborados" ? "max-h-96" : "max-h-0"
              }`}
            >
              <NavLink
                to="/elaborados"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                VER TODO EN ELABORADOS
              </NavLink>
              <NavLink
                to="/elaborados/propia"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                Elaboración propia
              </NavLink>
              <NavLink
                to="/elaborados/embutidos"
                className="block w-full text-left px-8 py-4 border-b border-white/10"
                onClick={closeMenu}
              >
                Embutidos
              </NavLink>
              <NavLink
                to="/elaborados/congelados"
                className="block w-full text-left px-8 py-4"
                onClick={closeMenu}
              >
                Congelados
              </NavLink>
            </div>

            <NavLink
              to="/productos"
              className="block w-full text-left px-6 py-5 border-b border-white/10 font-bold"
              onClick={closeMenu}
            >
              PRODUCTOS
            </NavLink>

            {/* Links simples */}
            <button
              onClick={() => scrollToSection("#mayorista")}
              className="w-full text-left px-6 py-5 border-b border-white/10 font-bold"
            >
              GASTRONÓMICOS
            </button>

            <button
              onClick={() => scrollToSection("#contacto")}
              className="w-full text-left px-6 py-5 border-b border-white/10 font-bold"
            >
              CONTACTO
            </button>

            <button
              onClick={() => scrollToSection("#quienes-somos")}
              className="w-full text-left px-6 py-5 border-b border-white/10 font-bold"
            >
              QUIÉNES SOMOS
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
