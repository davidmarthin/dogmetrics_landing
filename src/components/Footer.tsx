import { betaApplyUrl } from "../content";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerRow">
        <div className="small">© {new Date().getFullYear()} DogMetrics</div>
        <div className="footerLinks">
          <a href="/privacy.html">Privacy Policy</a>
          <a href={betaApplyUrl} target="_blank" rel="noreferrer">
            Apply for Private Pilot
          </a>
        </div>
      </div>
    </footer>
  );
}
