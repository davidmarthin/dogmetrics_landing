import { screens } from "../content";
import { useActiveStep } from "../lib/useActiveStep";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

const stepImages = [screens.rawFootage, screens.howReview, screens.timeline, screens.recap, screens.howUpload];

export function ProductShowcase({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { t } = useI18n();
  const steps = t.how.steps.map((s, i) => ({ ...s, img: stepImages[i] }));
  const { active, setStepRef } = useActiveStep(stepImages.length);

  return (
    <section id="how-it-works" className="showcase section">
      <div className="container">
        <Reveal className="sectionHead">
          <span className="kicker">{t.how.kicker}</span>
          <h2 className="h2">{t.how.title}</h2>
        </Reveal>

        <div className="showcaseGrid">
          <div className="showcaseSteps">
            {steps.map((step, index) => (
              <div
                key={step.img}
                ref={setStepRef(index)}
                data-step-index={index}
                className={`showcaseStep ${active === index ? "is-active" : ""}`}
              >
                <span className="showcaseStepNum">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="h3">{step.title}</h3>
                <p className="lead" style={{ marginTop: 8 }}>{step.body}</p>
                <button
                  type="button"
                  className="showcaseStepImg"
                  onClick={() => onImageClick(step.img)}
                  aria-label={`${t.how.enlarge}: ${step.alt}`}
                  style={{ border: "none", padding: 0, background: "none", cursor: "zoom-in" }}
                >
                  <img src={step.img} alt={step.alt} loading="lazy" decoding="async" />
                </button>
              </div>
            ))}
          </div>

          <div className="showcaseVisual">
            {steps.map((step, index) => (
              <div key={step.img} className={`layer ${active === index ? "is-active" : ""}`}>
                <img
                  src={step.img}
                  alt={step.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onClick={() => onImageClick(step.img)}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
