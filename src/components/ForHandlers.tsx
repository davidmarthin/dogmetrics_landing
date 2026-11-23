import { screens } from "../content";
import { Reveal } from "./Reveal";

export function ForHandlers({ onImageClick }: { onImageClick: (src: string) => void }) {
  return (
    <section id="handlers" className="section">
      <div className="container metricsGrid">
        <Reveal scale className="metricsVisual">
          <img
            src={screens.timeline}
            alt="A training session in the DogMetrics timeline, with attempts and events tagged"
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(screens.timeline)}
          />
        </Reveal>

        <Reveal delay={100} className="stack">
          <span className="kicker">For handlers</span>
          <h2 className="h2">Get more out of every training video.</h2>

          <div className="handlerPaths">
            <div className="handlerPath">
              <b>Training with a DogMetrics coach?</b>
              <p>
                Your coach invites you to their Course. Upload your sessions from each Lesson, send
                them for review and get feedback right on your video.
              </p>
            </div>
            <div className="handlerPath">
              <b>Training on your own?</b>
              <p>With the Handler plan you can:</p>
              <ul className="audienceList">
                <li>Upload sessions and keep a history by dog and date</li>
                <li>Mark attempts and key moments: starts, ends, contacts</li>
                <li>Build a short recap of the attempts that matter</li>
                <li>Share it with anyone who coaches you</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
