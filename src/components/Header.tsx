import { useEffect, useState } from "react";
import { betaApplyUrl } from "../content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`siteHeader ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-wide">
        <a href="#top" className="brand">
          <span className="brandMark" aria-hidden="true" />
          DogMetrics
        </a>

        <nav className="navLinks" aria-label="Primary">
          <a href="#coaches">For coaches</a>
          <a href="#handlers">For handlers</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="navCta">
          <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
            Apply for early access
          </a>
        </div>
      </div>
    </header>
  );
}
