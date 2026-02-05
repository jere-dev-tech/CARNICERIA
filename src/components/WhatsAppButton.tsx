import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5438341234567"; // Replace with actual number
  const message = encodeURIComponent("Hola! Me gustaría hacer una consulta sobre sus productos.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};