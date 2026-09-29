import { screens } from "../content";
import { Reveal } from "./Reveal";

export function DemoSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section id="demo" className="demoSection section">
      <div className="container">
        <Reveal className="sectionHead align-center">
          <span className="kicker is-orange">See it in motion</span>
          <h2 className="h2">DogMetrics in about a minute.</h2>
        </Reveal>

        <Reveal scale delay={100}>
          <button
            type="button"
            className="demoFrame"
            onClick={onOpen}
            aria-label="Play the DogMetrics demo video"
          >
            <img src={screens.demoPoster} alt="" loading="lazy" decoding="async" />
            <div className="demoPlay">
              <span className="demoPlayBtn" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 4.5v15l14-7.5-14-7.5Z" fill="#1a0d02" />
                </svg>
              </span>
            </div>
          </button>
        </Reveal>

        <p className="demoCaption">A walkthrough of recording, review, and recap — start to finish.</p>
      </div>
    </section>
  );
}
