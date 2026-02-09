import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-[120] w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      aria-label="Volver arriba"
    >
      <ChevronUp size={24} />
    </button>
  );
};
