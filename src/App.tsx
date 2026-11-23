import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ForCoaches } from "./components/ForCoaches";
import { ForHandlers } from "./components/ForHandlers";
import { FastReview } from "./components/FastReview";
import { ProductShowcase } from "./components/ProductShowcase";
import { MetricsSection } from "./components/MetricsSection";
import { PricingSection } from "./components/PricingSection";
import { PilotCTA } from "./components/PilotCTA";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxSrc(null);
    }
    if (lightboxSrc) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ForCoaches onImageClick={setLightboxSrc} />
        <ForHandlers onImageClick={setLightboxSrc} />
        <FastReview />
        <ProductShowcase onImageClick={setLightboxSrc} />
        <MetricsSection onImageClick={setLightboxSrc} />
        <PricingSection />
        <PilotCTA />
        <FAQSection />
      </main>
      <Footer />

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
}
