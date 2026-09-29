import { screens } from "../content";
import { Reveal } from "./Reveal";

export function MetricsSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  return (
    <section className="section">
      <div className="container metricsGrid">
        <Reveal scale className="metricsVisual">
          <img
            src={screens.compare}
            alt="Two runs of the same exercise compared side by side, synced to the same obstacle"
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(screens.compare)}
          />
        </Reveal>

        <Reveal delay={100} className="stack">
          <span className="kicker">Progress</span>
          <p className="metricsStat">
            A video disappears into your camera roll. <b>A DogMetrics session becomes training
            history</b> — one you can pull back up and compare against the next.
          </p>
          <p className="lead">
            Sync two attempts to the same obstacle and play them back side by side, so a change
            in handling or contact behaviour is easy to see rather than easy to forget.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
