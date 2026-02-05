import { useEffect, useRef } from "react";
import aboutMeat from "@/assets/about-meat.jpg";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="pt-20 pb-20 bg-background"
    >
      <div className="container">

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          <a
            href="#cortes"
            className="bg-primary hover:bg-dark-red transition-all duration-300 p-6 rounded-lg flex items-center gap-4 shadow-lg group"
          >
            <div className="w-14 h-14 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-primary-foreground font-bold text-lg">
                CORTES DE CERDO
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Ofrecemos variedad y primeros cortes con la mejor calidad de productos.
              </p>
            </div>
          </a>

          <a
            href="#cortes"
            className="bg-cream hover:bg-muted transition-all duration-300 p-6 rounded-lg flex items-center gap-4 shadow-lg group"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-foreground font-bold text-lg">
                CORTES DE VACA
              </h3>
              <p className="text-muted-foreground text-sm">
                Los mejores cortes de carne vacuna con calidad de exportación.
              </p>
            </div>
          </a>
        </div>

        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in-section">
            <p className="section-subtitle text-primary mb-2">QUIÉNES SOMOS</p>
            <h2 className="section-title text-foreground mb-6">
              Carne de <span className="text-primary">Calidad</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos una empresa cordobesa dedicada a la{" "}
              <span className="text-primary font-semibold">
                venta mayorista y minorista
              </span>{" "}
              de cortes frescos y vacíos finos de cerdo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nuestra misión principal es acercar la dieta la{" "}
              <span className="text-primary font-semibold">
                mejor calidad
              </span>{" "}
              en cortes de cerdo a nuestra mesa, el mejor de los estándares de calidad.
            </p>
            <p className="text-xl font-display text-foreground font-semibold">
              ¡Visitanos!
            </p>
          </div>

          {/* Image */}
          <div className="fade-in-section relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutMeat}
                alt="Carne de calidad"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
