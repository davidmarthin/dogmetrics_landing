import { screens } from "../content";
import { useActiveStep } from "../lib/useActiveStep";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Record or upload",
    body: "Record with your phone or the camera you already use, then upload the session to DogMetrics.",
    img: screens.rawFootage,
    alt: "Raw training footage of a dog on the A-frame",
  },
  {
    title: "Find and review attempts",
    body: "Scrub the timeline frame by frame and jump straight to the parts of the session that matter.",
    img: screens.howReview,
    alt: "Session player with frame-by-frame controls and the attempts on the recap timeline",
  },
  {
    title: "Mark what matters",
    body: "Tag attempt starts, ends, and contact-zone touches as you watch — no separate notebook.",
    img: screens.timeline,
    alt: "Labelling a zone touch: paw position, contact result, handler side and depth",
  },
  {
    title: "Build the recap",
    body: "Turn a marked-up session into a short recap you can watch back or hand to a coach.",
    img: screens.recap,
    alt: "A recap of 13 attempts with voice command and zone touch events listed",
  },
  {
    title: "Keep the history",
    body: "Every session stays in your library — by dog, by date, training and competition alike.",
    img: screens.howUpload,
    alt: "Session library with training, competitions and shared sessions, filters and recap badges",
  },
];

export function ProductShowcase({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { active, setStepRef } = useActiveStep(steps.length);

  return (
    <section id="how-it-works" className="showcase section">
      <div className="container">
        <Reveal className="sectionHead">
          <span className="kicker">How it works</span>
          <h2 className="h2">From one recording to a review you can use.</h2>
        </Reveal>

        <div className="showcaseGrid">
          <div className="showcaseSteps">
            {steps.map((step, index) => (
              <div
                key={step.title}
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
                  aria-label={`Enlarge: ${step.alt}`}
                  style={{ border: "none", padding: 0, background: "none", cursor: "zoom-in" }}
                >
                  <img src={step.img} alt={step.alt} loading="lazy" decoding="async" />
                </button>
              </div>
            ))}
          </div>

          <div className="showcaseVisual">
            {steps.map((step, index) => (
              <div key={step.title} className={`layer ${active === index ? "is-active" : ""}`}>
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
