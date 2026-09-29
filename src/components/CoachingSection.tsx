import { screens } from "../content";
import { Reveal } from "./Reveal";

export function CoachingSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  return (
    <section id="coaching" className="coaching section-tight">
      <div className="container coachGrid">
        <Reveal className="stack">
          <span className="kicker is-orange">Coaching</span>
          <h2 className="h2">DogMetrics isn't just video storage.</h2>
          <p className="lead">
            A session becomes something a coach can react to — draw on a frame, leave a
            timestamped comment, and share it back for the next training.
          </p>

          <div className="coachFlow" aria-label="Coaching workflow">
            <span>Handler</span>
            <em>→</em>
            <span>Session</span>
            <em>→</em>
            <span>Coach</span>
            <em>→</em>
            <span>Feedback</span>
            <em>→</em>
            <span>Next training</span>
          </div>
        </Reveal>

        <Reveal scale delay={100} className="coachVisual">
          <img
            src={screens.overlay}
            alt="Coaching review view with a hand-drawn correction on the video frame and timestamped comments"
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(screens.overlay)}
          />
        </Reveal>
      </div>
    </section>
  );
}
