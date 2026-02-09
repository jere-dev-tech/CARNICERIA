import { useEffect, useRef, useState } from "react";
import whatsappIcon from "@/assets/whatsapp-svgrepo.svg";

export const WhatsAppButton = () => {
  const phoneNumber = "5438341234567";
  const message = encodeURIComponent(
    "Hola! Me gustaría hacer una consulta sobre sus productos."
  );

  const [visible, setVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipTimeoutRef = useRef<number | null>(null);
  const tooltipIntervalRef = useRef<number | null>(null);

  const showTooltip = () => {
    setTooltipVisible(true);
    if (tooltipTimeoutRef.current) {
      window.clearTimeout(tooltipTimeoutRef.current);
    }
    tooltipTimeoutRef.current = window.setTimeout(() => {
      setTooltipVisible(false);
    }, 4000);
  };

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth < 768) {
        setVisible(true);
        return;
      }

      const servicios = document.getElementById("servicios");
      if (!servicios) {
        setVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else if (window.scrollY < servicios.offsetTop) {
            setVisible(false);
          }
        },
        { threshold: 0.25 },
      );

      observer.observe(servicios);
      return () => observer.disconnect();
    };

    const cleanup = updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => {
      if (typeof cleanup === "function") {
        cleanup();
      }
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const qualitySection = document.getElementById("carne-calidad");
    if (!qualitySection) {
      return;
    }

    let hasTriggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          showTooltip();
          tooltipIntervalRef.current = window.setInterval(showTooltip, 30000);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(qualitySection);

    return () => {
      observer.disconnect();
      if (tooltipIntervalRef.current) {
        window.clearInterval(tooltipIntervalRef.current);
      }
      if (tooltipTimeoutRef.current) {
        window.clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float group ${visible ? "is-visible" : ""}`}
      aria-label="WhatsApp"
    >
      <span className="pulse" />
      <span
        className={`whatsapp-tooltip ${tooltipVisible ? "is-visible" : ""}`}
      >
        Te asesoramos por WhatsApp
      </span>
      <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7" />
    </a>
  );
};
