import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BenefitCardsProps = {
  className?: string;
};

export const BenefitCards = ({ className }: BenefitCardsProps) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardsRef.current &&
        !cardsRef.current.contains(event.target as Node)
      ) {
        setActiveCard(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getCardClasses = (id: string) => {
    const isActive = activeCard === id;

    return `benefit-card p-6 rounded-lg flex items-center gap-4 shadow-lg cursor-pointer transition-all duration-300 transform
      ${
        isActive
          ? "is-active bg-primary text-primary-foreground scale-105"
          : "bg-cream text-foreground hover:scale-[1.02]"
      }`;
  };

  const getIconClasses = (id: string) => {
    const isActive = activeCard === id;

    return `w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
      ${
        isActive
          ? "bg-primary-foreground/20 text-primary-foreground"
          : "bg-primary/20 text-primary"
      }`;
  };

  const getTextClasses = (id: string) => {
    const isActive = activeCard === id;
    return isActive
      ? "text-primary-foreground/80 text-sm"
      : "text-muted-foreground text-sm";
  };

  return (
    <div
      id="beneficios"
      ref={cardsRef}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto scroll-mt-24",
        className,
      )}
    >
      <div onClick={() => setActiveCard("envios")} className={getCardClasses("envios")}>
        <div className={getIconClasses("envios")}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 4h13v10H3V4zm13 2h4l1 3v5h-5V6zM7 18a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">ENVÍOS A DOMICILIO</h3>
          <p className={`benefit-card-text ${getTextClasses("envios")}`}>
            Entregas en distintos puntos de Catamarca.
          </p>
        </div>
      </div>

      <div onClick={() => setActiveCard("pagos")} className={getCardClasses("pagos")}>
        <div className={getIconClasses("pagos")}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 5h20v14H2V5zm2 2v2h16V7H4zm0 4v6h16v-6H4z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">PAGÁ COMO QUIERAS</h3>
          <p className={`benefit-card-text ${getTextClasses("pagos")}`}>
            Aceptamos efectivo, transferencias y tarjetas.
          </p>
        </div>
      </div>

      <div
        onClick={() => setActiveCard("seguridad")}
        className={getCardClasses("seguridad")}
      >
        <div className={getIconClasses("seguridad")}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 016 0v3H9z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">SITIO SEGURO</h3>
          <p className={`benefit-card-text ${getTextClasses("seguridad")}`}>
            Protegemos tus datos y tu información.
          </p>
        </div>
      </div>
    </div>
  );
};
