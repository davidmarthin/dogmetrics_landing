import { betaApplyUrl, pilotEmailHref } from "../content";
import { Reveal } from "./Reveal";

export function PilotCTA() {
  return (
    <section id="request-demo" className="pilotCta">
      <div className="container">
        <Reveal className="pilotCtaInner">
          <h2 className="h2">Train. Review. Learn. Repeat.</h2>
          <p className="lead">
            We're inviting a small group of handlers and coaches to test the workflow and give
            direct feedback.
          </p>

          <div className="btnRow">
            <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
              Apply for Private Pilot
            </a>
          </div>

          <p className="small">
            By contacting us you agree we'll use your details to reply. See the{" "}
            <a className="textLink" href="/privacy.html">Privacy Policy</a>. Prefer email?{" "}
            <a className="textLink" href={pilotEmailHref}>Write to us directly</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
