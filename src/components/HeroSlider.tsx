import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "CALIDAD Y",
    titleAccent: "PRECIO",
    subtitle: "La mejor calidad y el mejor precio en cortes de cerdo y vaca.",
  },
  {
    image: heroSlide2,
    title: "CARNE",
    titleAccent: "FRESCA",
    subtitle: "Selección premium de carnes directamente del campo a su mesa.",
  },
  {
    image: heroSlide3,
    title: "SABOR",
    titleAccent: "AUTÉNTICO",
    subtitle: "Tradición y calidad en cada corte que ofrecemos.",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#quienes-somos");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
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
          className={`max-w-3xl mx-auto transition-all duration-500 ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground text-shadow-lg mb-6">
            {slides[currentSlide].title}{" "}
            <span className="text-primary italic">
              {slides[currentSlide].titleAccent}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 text-shadow max-w-xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
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
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 scroll-arrow"
      >
        <ChevronDown className="w-10 h-10 text-primary-foreground/70" />
      </button>
    </section>
  );
};
