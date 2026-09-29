import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FastReview } from "./components/FastReview";
import { ProductShowcase } from "./components/ProductShowcase";
import { CoachingSection } from "./components/CoachingSection";
import { MetricsSection } from "./components/MetricsSection";
import { DemoSection } from "./components/DemoSection";
import { AudienceSection } from "./components/AudienceSection";
import { PricingSection } from "./components/PricingSection";
import { PilotCTA } from "./components/PilotCTA";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";
import { DemoVideoModal } from "./components/DemoVideoModal";

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

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
        <Hero onWatchDemo={() => setDemoOpen(true)} />
        <FastReview />
        <ProductShowcase onImageClick={setLightboxSrc} />
        <CoachingSection onImageClick={setLightboxSrc} />
        <MetricsSection onImageClick={setLightboxSrc} />
        <DemoSection onOpen={() => setDemoOpen(true)} />
        <AudienceSection />
        <PricingSection />
        <PilotCTA />
        <FAQSection />
      </main>
      <Footer />

      <DemoVideoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        title="DogMetrics — 90s demo"
      />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
}
