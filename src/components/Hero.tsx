import { betaApplyUrl, screens } from "../content";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="heroTop">
          <Reveal className="kicker">{h.kicker}</Reveal>
          <Reveal delay={80}>
            <h1 className="display">{h.title}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead-lg">{h.lead}</p>
          </Reveal>

          <Reveal delay={240} className="btnRow">
            <a className="btn btnPrimary" href={betaApplyUrl} target="_blank" rel="noreferrer">
              {t.nav.apply}
            </a>
            <a className="btn btnGhost" href="#coaches">{h.coach}</a>
            <a className="btn btnGhost" href="#handlers">{h.handler}</a>
          </Reveal>

          <Reveal as="p" delay={300} className="heroNote">
            {h.note}
          </Reveal>
        </div>

        <Reveal scale delay={120}>
          <div className="heroVisual">
            <img src={screens.overlay} alt={h.imgAlt} />
            <div className="heroVisualTag">
              <b>{h.tagTitle}</b>
              <span>{h.tagSub}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
