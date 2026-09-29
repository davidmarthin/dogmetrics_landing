import { screens } from "../content";
import { useActiveStep } from "../lib/useActiveStep";
import { Reveal } from "./Reveal";

const layers = [
  { src: screens.rawFootage, alt: "Raw training footage of a dog on the A-frame", caption: "Raw recording" },
  { src: screens.timeline, alt: "The same session inside the DogMetrics timeline, with attempts and events tagged", caption: "Structured session" },
];

export function FastReview() {
  const { active, setStepRef } = useActiveStep(layers.length);

  return (
    <section className="fastReview section">
      <div className="container fastReviewGrid">
        <Reveal className="fastReviewCopy stack">
          <span className="kicker">Training happens fast</span>
          <h2 className="h2">Review shouldn't.</h2>
          <p className="lead">
            A session is full of attempts, decisions and small details — but reviewing it usually
            means scrubbing through one long recording. DogMetrics turns that footage into a
            session you can actually move through.
          </p>

          <div className="stack-sm" style={{ marginTop: 8 }}>
            {layers.map((layer, index) => (
              <div
                key={layer.caption}
                ref={setStepRef(index)}
                data-step-index={index}
                className="small"
                style={{ opacity: active === index ? 1 : 0.4, transition: "opacity 300ms ease" }}
              >
                {layer.caption}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal scale delay={100}>
          <div className="compareStage">
            <div className="stageCaption">{layers[active].caption}</div>
            {layers.map((layer, index) => (
              <div key={layer.src} className={`stageLayer ${index === active ? "is-active" : ""}`}>
                <img src={layer.src} alt={layer.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
