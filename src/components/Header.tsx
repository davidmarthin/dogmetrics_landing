import { useEffect, useState } from "react";
import { betaApplyUrl } from "../content";
import { useI18n } from "../i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useI18n();
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
          <a href="#coaches">{t.nav.coaches}</a>
          <a href="#handlers">{t.nav.handlers}</a>
          <a href="#how-it-works">{t.nav.how}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>

        <div className="navCta">
          <LanguageSwitcher />
          <a className="btn btnPrimary navApply" href={betaApplyUrl} target="_blank" rel="noreferrer">
            {t.nav.apply}
          </a>
        </div>
      </div>
    </header>
  );
}
