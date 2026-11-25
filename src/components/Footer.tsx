import { betaApplyUrl } from "../content";
import { useI18n } from "../i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="siteFooter">
      <div className="container footerRow">
        <div className="small">© {new Date().getFullYear()} DogMetrics</div>
        <div className="footerLinks">
          <a href="/privacy.html">{t.footer.privacy}</a>
          <a href={betaApplyUrl} target="_blank" rel="noreferrer">
            {t.nav.apply}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
