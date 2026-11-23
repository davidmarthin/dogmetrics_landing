import { screens } from "../content";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function MetricsSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { t } = useI18n();
  const p = t.progress;
  return (
    <section className="section">
      <div className="container metricsGrid">
        <Reveal scale className="metricsVisual">
          <img
            src={screens.compare}
            alt={p.imgAlt}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(screens.compare)}
          />
        </Reveal>

        <Reveal delay={100} className="stack">
          <span className="kicker">{p.kicker}</span>
          <p className="metricsStat">
            {p.statA}
            <b>{p.statBold}</b>
            {p.statC}
          </p>
          <p className="lead">{p.lead}</p>
        </Reveal>
      </div>
    </section>
  );
}
