import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import productBife from "@/assets/product-bife.png";
import productBocado from "@/assets/product-bocado.png";
import productBondiola from "@/assets/product-bondiola.png";
import productChorizo from "@/assets/product-chorizo.png";
import productAsado from "@/assets/product-asado.png";
import productLomo from "@/assets/product-lomo.png";
import productVacio from "@/assets/product-vacio.png";
import productEntrana from "@/assets/product-entrana.png";

const porkProducts = [
  { name: "Bife", image: productBife },
  { name: "Bocado", image: productBocado },
  { name: "Bondiola", image: productBondiola },
  { name: "Chorizo", image: productChorizo },
];

const beefProducts = [
  { name: "Asado", image: productAsado },
  { name: "Lomo", image: productLomo },
  { name: "Vacío", image: productVacio },
  { name: "Entraña", image: productEntrana },
];

export const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<"cerdo" | "vaca">("cerdo");
  const sectionRef = useRef<HTMLElement>(null);

  const products = activeTab === "cerdo" ? porkProducts : beefProducts;

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
    <section id="cortes" ref={sectionRef} className="py-16 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 fade-in-section">
          <p className="section-subtitle mb-2">
            EN <span className="text-primary font-bold"> CARNICERIA VIRGEN DEL VALLE</span> TENEMOS
          </p>
          <h2 className="section-title text-foreground">TODOS LOS CORTES</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 fade-in-section">
          <div className="inline-flex border-b-2 border-border">
            <button
              onClick={() => setActiveTab("cerdo")}
              className={`tab-btn ${
                activeTab === "cerdo"
                  ? "active"
                  : "text-muted-foreground"
              }`}
            >
              CORTES DE CERDO
            </button>
            <button
              onClick={() => setActiveTab("vaca")}
              className={`tab-btn ${
                activeTab === "vaca"
                  ? "active"
                  : "text-muted-foreground"
              }`}
            >
              CORTES DE VACA
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {products.map((product) => (
            <div
              key={`${activeTab}-${product.name}`}
              className="product-card p-4 text-center"
            >
              <div className="aspect-square mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="text-center mt-10">
          <Link
            to="/productos"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-dark-red transition-all duration-300"
          >
            VER TODOS LOS PRODUCTOS
          </Link>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveTab("cerdo")}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeTab === "cerdo" ? "bg-primary" : "bg-border"
            }`}
            aria-label="Ver cortes de cerdo"
          />
          <button
            onClick={() => setActiveTab("vaca")}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeTab === "vaca" ? "bg-primary" : "bg-border"
            }`}
            aria-label="Ver cortes de vaca"
          />
        </div>
      </div>
    </section>
  );
};
