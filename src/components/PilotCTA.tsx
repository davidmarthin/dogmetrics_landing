import { betaApplyUrl, pilotEmailHref } from "../content";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function PilotCTA() {
  const { t } = useI18n();
  return (
    <section id="request-demo" className="pilotCta">
      <div className="container">
        <Reveal className="pilotCtaInner">
          <h2 className="h2">{t.cta.title}</h2>
          <p className="lead">{t.cta.lead}</p>

          <div className="btnRow">
            <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
              {t.nav.apply}
            </a>
          </div>

          <p className="small">
            {t.cta.consent}{" "}
            <a className="textLink" href="/privacy.html">{t.cta.privacy}</a>. {t.cta.emailIntro}{" "}
            <a className="textLink" href={pilotEmailHref}>demo@dog-metrics.com</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
