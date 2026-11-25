import { screens } from "../content";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function ForHandlers({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { t } = useI18n();
  const h = t.handlers;
  return (
    <section id="handlers" className="section">
      <div className="container metricsGrid">
        <Reveal scale className="metricsVisual">
          <img
            src={screens.timeline}
            alt={h.imgAlt}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(screens.timeline)}
          />
        </Reveal>

        <Reveal delay={100} className="stack">
          <span className="kicker">{h.kicker}</span>
          <h2 className="h2">{h.title}</h2>

          <div className="handlerPaths">
            <div className="handlerPath">
              <b>{h.withCoachTitle}</b>
              <p>{h.withCoachBody}</p>
            </div>
            <div className="handlerPath">
              <b>{h.ownTitle}</b>
              <p>{h.ownIntro}</p>
              <ul className="audienceList">
                {h.ownList.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
