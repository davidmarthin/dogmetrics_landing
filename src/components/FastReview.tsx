import { screens } from "../content";
import { useActiveStep } from "../lib/useActiveStep";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function FastReview() {
  const { t } = useI18n();
  const f = t.fast;
  const layers = [
    { src: screens.rawFootage, alt: f.rawAlt, caption: f.rawCaption },
    { src: screens.timeline, alt: f.structuredAlt, caption: f.structuredCaption },
  ];
  const { active, setStepRef } = useActiveStep(2);

  return (
    <section className="fastReview section">
      <div className="container fastReviewGrid">
        <Reveal className="fastReviewCopy stack">
          <span className="kicker">{f.kicker}</span>
          <h2 className="h2">{f.title}</h2>
          <p className="lead">{f.lead}</p>

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
