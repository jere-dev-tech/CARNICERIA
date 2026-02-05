import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ciudad: "",
    mensaje: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" ref={sectionRef} className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10 fade-in-section">
          <h2 className="section-title text-primary italic">Contáctanos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="fade-in-section">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    NOMBRES COMPLETOS *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre y Apellido"
                    className="contact-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    TELÉFONO/CELULAR *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-sm text-muted-foreground">
                      🇦🇷 +54
                    </span>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="1157976543"
                      className="contact-input rounded-l-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@gmail.com"
                    className="contact-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    CIUDAD/PROVINCIA
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    placeholder="Ciudad/Provincia"
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  MENSAJE *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Déjanos tus consultas..."
                  rows={4}
                  className="contact-input resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-dark-red text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Enviar
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              * Al enviar este formulario usted acepta nuestra política de privacidad y 
              Condiciones de Privacidad de Datos.
            </p>
          </div>

          {/* Map */}
          <div className="fade-in-section">
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54707.85445936656!2d-65.80917055!3d-28.46957175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9424266b20f9e6db%3A0x3e3d21f1fb1f7c06!2sSan%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1706745000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Carnicería Virgen del Valle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};