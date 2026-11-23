import { betaApplyUrl, launchLabel, screens } from "../content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="heroTop">
          <Reveal className="kicker">Video coaching for dog agility</Reveal>
          <Reveal delay={80}>
            <h1 className="display">Coach agility online. Feedback your students can see.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead-lg">
              Your students upload their training. You get the attempts that matter, not an hour of
              raw video, and answer right on the frame: comments, drawings and voice notes they
              can come back to before the next session.
            </p>
          </Reveal>

          <Reveal delay={240} className="btnRow">
            <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
              Apply for early access
            </a>
            <a className="btn btnGhost" href="#coaches">I'm a coach</a>
            <a className="btn btnGhost" href="#handlers">I'm a handler</a>
          </Reveal>

          <Reveal as="p" delay={300} className="heroNote">
            {launchLabel}. Early access is open now for a small group of coaches and their students.
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
