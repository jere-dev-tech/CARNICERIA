import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import deliveryTruck from "@/assets/delivery-truck.png";

export const WholesaleSection = () => {
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

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="mayorista" ref={sectionRef} className="py-16 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="fade-in-section">
            <p className="section-subtitle text-primary mb-2">
              SERVICIO PARA COMERCIOS
            </p>
            <h2 className="section-title text-foreground mb-6">
              Venta por <span className="text-primary italic">mayor</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En <span className="text-primary font-bold">Carnicería Virgen del Valle</span> 
              abastecemos a comercios gastronómicos y revendedores de toda la zona 
              con cortes frescos, buena calidad y precios competitivos.
            </p>

            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">
                ESTE SERVICIO ES IDEAL PARA:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Restaurantes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Parrillas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Hoteles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Servicios de catering
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Carnicerías
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Despensas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Eventos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Emprendimientos gastronómicos
                  </li>
                </ul>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-dark-red text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Consultar por mayor
            </Button>
          </div>

          {/* Truck Image */}
          <div className="fade-in-section">
            <div className="relative">
              <img
                src={deliveryTruck}
                alt="Entrega de pedidos"
                className="w-full rounded-lg shadow-xl"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <p className="text-xs uppercase tracking-wider">
                  Atención a
                </p>
                <p className="font-bold">Comercios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
