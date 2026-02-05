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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ExportQualityBanner />
      <WholesaleSection />
      <CorralBanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
