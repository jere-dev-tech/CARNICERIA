import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "CARNICERÍA",
    titleAccent: "VIRGEN DEL VALLE",
    subtitle:
      "Carne fresca todos los días para las familias y comercios de Catamarca.",
  },
  {
    image: heroSlide2,
    title: "CORTES",
    titleAccent: "DE CALIDAD",
    subtitle:
      "Variedad de cortes de cerdo y vaca, seleccionados con los mejores estándares.",
  },
  {
    image: heroSlide3,
    title: "ATENCIÓN",
    titleAccent: "DE CONFIANZA",
    subtitle:
      "Precios justos y productos frescos para tu mesa todos los días.",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#beneficios");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCortes = () => {
    const cortes = document.querySelector("#cortes");
    if (cortes) {
      cortes.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-[80vh] md:h-[90vh]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

{/* Content */}
<div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
  <div
    key={currentSlide}
    className="max-w-3xl mx-auto animate-hero-fade"
  >
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground text-shadow-lg mb-6">
      {slides[currentSlide].title}{" "}
      <span className="text-black italic">
        {slides[currentSlide].titleAccent}
      </span>
    </h1>

    <p className="text-lg md:text-xl text-primary-foreground/90 text-shadow max-w-xl mx-auto mb-8">
      {slides[currentSlide].subtitle}
    </p>

    {/* Botón Ver Cortes */}
    <button
      onClick={scrollToCortes}
      className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-dark-red transition-all duration-300"
    >
      VER CORTES
    </button>
  </div>
</div>


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="slider-arrow left-4 md:left-8"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="slider-arrow right-4 md:right-8"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Scroll Arrow */}
      <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center">
        <button onClick={scrollToNext} className="scroll-arrow">
          <ChevronDown className="w-10 h-10 text-primary-foreground/70" />
        </button>
      </div>
    </section>
  );
};
