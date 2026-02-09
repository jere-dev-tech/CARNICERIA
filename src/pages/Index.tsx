import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ExportQualityBanner } from "@/components/ExportQualityBanner";
import { WholesaleSection } from "@/components/WholesaleSection";
import { CorralBanner } from "@/components/CorralBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";


const Index = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceTop = sessionStorage.getItem("forceTop");
    const targetSelector = sessionStorage.getItem("scrollTarget");
    if (forceTop) {
      sessionStorage.removeItem("forceTop");
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (!targetSelector) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    sessionStorage.removeItem("scrollTarget");
    window.setTimeout(() => {
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-primary text-primary-foreground">
        <div className="container py-2 text-center text-xs font-semibold uppercase tracking-widest">
          <span className="block sm:inline">Lun a Sab: 9 a 14 hs / 18:30 a 22 hs</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">Dom: 9 a 14 hs</span>
        </div>
      </div>
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ExportQualityBanner />
      <WholesaleSection />
      <CorralBanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;

