import { betaApplyUrl, screens } from "../content";
import { Reveal } from "./Reveal";

export function Hero({ onWatchDemo }: { onWatchDemo: () => void }) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="heroTop">
          <Reveal className="kicker">Dog agility, on video</Reveal>
          <Reveal delay={80}>
            <h1 className="display">See more in every training session.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead-lg">
              DogMetrics turns your agility recordings into a structured session — attempts you
              can find, moments you can mark, and a recap you can share with your coach.
            </p>
          </Reveal>

          <Reveal delay={240} className="btnRow">
            <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
              Apply for Private Pilot
            </a>
            <button className="btn btnPlay" onClick={onWatchDemo}>
              <span className="playDot" aria-hidden="true">▶</span>
              Watch demo
            </button>
          </Reveal>

          <Reveal as="p" delay={300} className="heroNote">
            Early access — onboarding a small number of handlers and coaches for 2026 private
            pilots.
          </Reveal>
        </div>

        <Reveal scale delay={120}>
          <div className="heroVisual">
            <img
              src={screens.rawFootage}
              alt="A dog descending the A-frame contact obstacle during a recorded training session"
            />
            <div className="heroVisualTag">
              <b>Attempt start · 176.60s</b>
              <span>Contacts — A-frame</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
