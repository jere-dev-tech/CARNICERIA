import { useEffect, useRef } from "react";

export const ExportQualityBanner = () => {
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
    <section ref={sectionRef} className="dark-pattern py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 fade-in-section">
          
          {/* Quality Badge */}
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary-foreground/30 rounded-full flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-primary-foreground/80 text-xs uppercase tracking-widest mb-1">
                  Desde Catamarca
                </p>

                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

<p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold italic leading-tight -translate-x-1">
  Carne<br />Fresca
</p>

              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground italic mb-3">
              Calidad para tu mesa
            </h2>
            <p className="text-primary-foreground/80 uppercase tracking-widest text-sm">
              Atención diaria a familias y comercios de Catamarca
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
