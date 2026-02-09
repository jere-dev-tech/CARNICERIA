import { useEffect, useRef } from "react";
import aboutMeat from "@/assets/about-meat.jpg";
import { BenefitCards } from "@/components/BenefitCards";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Fade-in observer
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
  ref={sectionRef}
  className="pt-12 md:pt-20 pb-20 bg-background"
>

      <div className="container">
        {/* Benefit Cards */}
        <BenefitCards className="mb-12" />

        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
        <div id="quienes-somos" className="fade-in-section scroll-mt-24">
          <div id="carne-calidad" className="scroll-mt-24">

            <p className="section-subtitle text-primary mb-2">
              QUIÉNES SOMOS
            </p>
            <h2 className="section-title text-foreground mb-6">
              Carne de <span className="text-primary">Calidad</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos una carnicería familiar de{" "}
              <span className="text-primary font-semibold">
                Catamarca
              </span>
              , dedicada a la{" "}
              <span className="text-primary font-semibold">
                venta mayorista y minorista
              </span>{" "}
              de cortes frescos de cerdo y vaca, seleccionados con los mejores estándares de calidad.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Trabajamos todos los días para ofrecer productos frescos, buena atención y precios justos,
              acompañando a las familias y comercios de la provincia con carne confiable y de excelente sabor.
            </p>

            <p className="text-xl font-display text-foreground font-semibold">
              ¡Te esperamos en nuestro local!
            </p>
            </div>
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
