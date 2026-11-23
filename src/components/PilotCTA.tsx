import { betaApplyUrl, launchLabel, pilotEmailHref } from "../content";
import { Reveal } from "./Reveal";

export function PilotCTA() {
  return (
    <section id="request-demo" className="pilotCta">
      <div className="container">
        <Reveal className="pilotCtaInner">
          <h2 className="h2">Train. Review. Learn. Repeat.</h2>
          <p className="lead">
            {launchLabel}. We're inviting a small group of coaches, and the handlers they train,
            to start early and shape what comes next.
          </p>

          <div className="btnRow">
            <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
              Apply for early access
            </a>
          </div>

          <p className="small">
            By contacting us you agree we'll use your details to reply. See the{" "}
            <a className="textLink" href="/privacy.html">Privacy Policy</a>. Prefer email? Write to{" "}
            <a className="textLink" href={pilotEmailHref}>demo@dog-metrics.com</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
