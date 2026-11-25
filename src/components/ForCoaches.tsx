import { screens } from "../content";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function ForCoaches({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { t } = useI18n();
  const c = t.coaches;
  return (
    <section id="coaches" className="coaching section">
      <div className="container stack">
        <div className="coachGrid">
          <Reveal className="stack">
            <span className="kicker is-orange">{c.kicker}</span>
            <h2 className="h2">{c.title}</h2>
            <p className="lead">{c.lead}</p>

            <div className="coachFlow" aria-label={c.flowLabel}>
              {c.flow.map((step, i) => (
                <span key={step} style={{ display: "contents" }}>
                  {i > 0 && <em>→</em>}
                  <span>{step}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal scale delay={100} className="coachVisual">
            <img
              src={screens.course}
              alt={c.imgAlt}
              loading="lazy"
              decoding="async"
              onClick={() => onImageClick(screens.course)}
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="featureGrid">
          {c.points.map((p) => (
            <div className="featureItem" key={p.title}>
              <b>{p.title}</b>
              <p>{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
