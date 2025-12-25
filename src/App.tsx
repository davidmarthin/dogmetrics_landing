import React, { useEffect, useMemo, useRef, useState } from "react";

type Plan = {
  name: string;
  highlight?: string;
  monthly: number;
  annual: number;
  features: string[];
  note?: string;
};

type SectionId = "top" | "como" | "producto" | "features" | "precios" | "faq" | "waitlist";

function euro(n: number) {
  return `${n}€`;
}

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }
      },
      { threshold: 0.14 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useScrollSpy(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("top");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // elegimos la sección más visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id as SectionId);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-25% 0px -60% 0px"
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [sectionIds.join("|")]);

  return active;
}

function useScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const v = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
      setP(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return p;
}

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function IconCheck() {
  return (
    <span className="icheck" aria-hidden="true">
      ✓
    </span>
  );
}

function FeatureCard({
  title,
  desc,
  badge
}: {
  title: string;
  desc: string;
  badge?: string;
}) {
  return (
    <div className="tile" data-reveal>
      <div className="tileTop">
        <h3>{title}</h3>
        {badge ? <span className="badge">{badge}</span> : null}
      </div>
      <p>{desc}</p>
    </div>
  );
}

function PricingCard({
  plan,
  billing
}: {
  plan: Plan;
  billing: "monthly" | "annual";
}) {
  const price = billing === "monthly" ? plan.monthly : plan.annual;

  return (
    <div className={`priceCard ${plan.highlight ? "pop" : ""}`} data-reveal>
      {plan.highlight ? <div className="tag">{plan.highlight}</div> : null}

      <div className="priceHeader">
        <h3>{plan.name}</h3>
        <div className="price">
          {euro(price)} <small>/{billing === "monthly" ? "mes" : "año"}</small>
        </div>
      </div>

      <ul className="list">
        {plan.features.map((f) => (
          <li key={f}>
            <IconCheck />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {plan.note ? <div className="note">{plan.note}</div> : null}

      <a className="btn secondary full" href="#waitlist">
        Empezar
      </a>
    </div>
  );
}

export default function App() {
  useRevealOnScroll();

  const year = useMemo(() => new Date().getFullYear(), []);
  const active = useScrollSpy(["top", "como", "producto", "features", "precios", "faq", "waitlist"]);
  const progress = useScrollProgress();

  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const plans: Plan[] = [
    {
      name: "SOLO",
      monthly: 15,
      annual: 150,
      features: [
        "1 perro",
        "8 entrenos / mes",
        "Competiciones mensuales ilimitadas",
        "Compartir sesiones",
        "Máx. 3 entrenos pendientes sin recap"
      ],
      note: "Ideal si entrenas 1 perro y quieres progreso medible."
    },
    {
      name: "COACH",
      highlight: "Más popular",
      monthly: 25,
      annual: 250,
      features: [
        "2 perros",
        "Sesiones de entrenamiento ilimitadas",
        "Competiciones mensuales ilimitadas",
        "Compartir sesiones",
        "Máx. 3 entrenos pendientes sin recap"
      ],
      note: "Pensado para entrenar mucho o trabajar con alumnos."
    },
    {
      name: "PRO",
      monthly: 39,
      annual: 390,
      features: [
        "1 perro (+5€ / perro extra)",
        "Sesiones de entrenamiento ilimitadas",
        "Competiciones mensuales ilimitadas",
        "Compartir sesiones",
        "Máx. 3 entrenos pendientes sin recap"
      ],
      note: "Para quien compite en serio y quiere archivo a largo plazo."
    }
  ];

  return (
    <>
      <style>{css}</style>

      <div id="top" className="wrap">
        {/* Top progress */}
        <div className="progressBar" style={{ transform: `scaleX(${progress})` }} />

        <header className="topbar">
          <button className="brand" onClick={() => scrollToId("top")} aria-label="Ir arriba">
            <span className="dot" />
            <span className="brandName">DogMetrics</span>
            <Pill>Beta privada</Pill>
          </button>

          <nav className="nav" aria-label="Navegación">
            {(
              [
                ["como", "Cómo funciona"],
                ["producto", "Producto"],
                ["features", "Features"],
                ["precios", "Precios"],
                ["faq", "FAQ"]
              ] as const
            ).map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                {label}
              </a>
            ))}
          </nav>

          <div className="topActions">
            <a className="btn secondary" href="#precios">
              Ver planes
            </a>
            <a className="btn primary" href="#waitlist">
              Unirme
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="heroLeft" data-reveal>
            <div className="kicker">
              <span className="spark" aria-hidden="true" />
              <span>Vídeo + métricas para agility</span>
              <span className="sep" aria-hidden="true" />
              <span className="muted">menos texto, más acción</span>
            </div>

            <h1>
              De “creo que…” a <span className="accent">evidencia clara</span> en segundos.
            </h1>

            <p className="sub">
              Sube tu vídeo, marca el tramo y revisa un informe visual: timeline, métricas clave
              y highlights. Diseñado para decisiones rápidas y entrenos mejores.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#waitlist">
                Entrar en la lista de espera
              </a>
              <a className="btn secondary" href="#producto">
                Ver cómo se ve
              </a>
            </div>

            <div className="quickStats">
              <div className="stat">
                <b>Timeline</b>
                <span>Eventos + navegación pro</span>
              </div>
              <div className="stat">
                <b>Overlay</b>
                <span>Notas/dibujo por frame</span>
              </div>
              <div className="stat">
                <b>Comparación</b>
                <span>Side-by-side entre runs</span>
              </div>
            </div>
          </div>

          <div className="heroRight" data-reveal>
            <div className="mock">
              <div className="mockTop">
                <span className="dotMini red" />
                <span className="dotMini yellow" />
                <span className="dotMini green" />
                <span className="mockTitle">Session recap</span>
              </div>

              <div className="mockBody">
                <div className="mockRow">
                  <div className="chip">attempt_01</div>
                  <div className="bar" />
                  <div className="chip teal">marker</div>
                </div>

                <div className="mockVideo" aria-label="Placeholder de vídeo">
                  <div className="mockPlay">▶</div>
                  <div className="mockOverlay" />
                </div>

                <div className="timeline">
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="tick" />
                  <div className="marker" />
                  <div className="range" />
                </div>

                <div className="mockFooter">
                  <div className="metric">
                    <span className="muted">Tiempo</span>
                    <b>16.42s</b>
                  </div>
                  <div className="metric">
                    <span className="muted">Refusals</span>
                    <b>0</b>
                  </div>
                  <div className="metric">
                    <span className="muted">Bars</span>
                    <b>1</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="heroRightNote">
              <Pill>Hecho para “scroll”</Pill>
              <span className="muted">
                Una idea por bloque. CTA repetido. Pricing visible sin leer un tocho.
              </span>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como" className="section">
          <div className="sectionHead" data-reveal>
            <h2>Cómo funciona</h2>
            <p>3 pasos. Nada más.</p>
          </div>

          <div className="grid3">
            <FeatureCard title="1) Subes tu vídeo" desc="Entreno o competición. Seleccionas el tramo (TC in/out)." badge="rápido" />
            <FeatureCard title="2) Analiza IA" desc="Eventos, intentos y métricas útiles (no “datos por datos”)." badge="objetivo" />
            <FeatureCard title="3) Recap visual" desc="Timeline, métricas y clips destacados para revisar y compartir." badge="accionable" />
          </div>
        </section>

        {/* PRODUCTO / SECCIÓN GRANDE */}
        <section id="producto" className="section">
          <div className="split">
            <div className="card" data-reveal>
              <div className="sectionHead">
                <h2>Producto</h2>
                <p>Una landing debe enseñar, no explicar.</p>
              </div>

              <div className="bullets">
                <div className="bullet">
                  <b>Timeline tipo editor</b>
                  <span className="muted">Marcadores, cortes por intentos y navegación ágil.</span>
                </div>
                <div className="bullet">
                  <b>Overlay preciso</b>
                  <span className="muted">Dibujo/texto por frame para feedback claro.</span>
                </div>
                <div className="bullet">
                  <b>Comparación</b>
                  <span className="muted">Sincroniza momentos para ver diferencias reales.</span>
                </div>
              </div>

              <div className="ctaRow">
                <a className="btn primary" href="#precios">Ver precios</a>
                <a className="btn secondary" href="#waitlist">Quiero acceso</a>
              </div>
            </div>

            <div className="card glass" data-reveal>
              <div className="miniGrid">
                <div className="miniTile">
                  <b>Para guías</b>
                  <span className="muted">Objetivos claros y progreso medible.</span>
                </div>
                <div className="miniTile">
                  <b>Para entrenadores</b>
                  <span className="muted">Feedback con evidencia y contexto.</span>
                </div>
                <div className="miniTile">
                  <b>Para clubs</b>
                  <span className="muted">Valor añadido para alumnos y programas.</span>
                </div>
                <div className="miniTile">
                  <b>Compartir</b>
                  <span className="muted">Sesiones externas para entrenador/alumno.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES (bloques cortos para scroll) */}
        <section id="features" className="section">
          <div className="sectionHead" data-reveal>
            <h2>Features clave</h2>
            <p>Sin pantallas llenas de texto. Scroll y listo.</p>
          </div>

          <div className="grid3">
            <FeatureCard title="Marcadores" desc="Marca errores, comandos y momentos clave. Vuelve a ellos en 1 click." />
            <FeatureCard title="Métricas útiles" desc="No comparamos pistas distintas “por comparar”. Buscamos señales." />
            <FeatureCard title="Highlights" desc="Clips para revisar rápido o enviar a tu entrenador." />
          </div>

          <div className="marquee" aria-label="Marquee">
            <div className="marqueeTrack">
              {[
                "timeline",
                "overlay",
                "side-by-side",
                "markers",
                "attempts",
                "recap",
                "share",
                "training"
              ].map((w, i) => (
                <span key={i} className="marqueeItem">
                  {w}
                </span>
              ))}
              {[
                "timeline",
                "overlay",
                "side-by-side",
                "markers",
                "attempts",
                "recap",
                "share",
                "training"
              ].map((w, i) => (
                <span key={`b-${i}`} className="marqueeItem">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="precios" className="section">
          <div className="sectionHead" data-reveal>
            <h2>Planes</h2>
            <p>3 columnas, comparas en 3 segundos.</p>
          </div>

          <div className="billing" data-reveal>
            <button
              className={`seg ${billing === "monthly" ? "on" : ""}`}
              onClick={() => setBilling("monthly")}
              type="button"
            >
              Mensual
            </button>
            <button
              className={`seg ${billing === "annual" ? "on" : ""}`}
              onClick={() => setBilling("annual")}
              type="button"
            >
              Anual <span className="save">-17%</span>
            </button>
          </div>

          <div className="pricing">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} billing={billing} />
            ))}
          </div>

          <p className="fine" data-reveal>
            “Máx. 3 entrenos pendientes sin recap” = límite de flujo (pendientes a la vez). Ajustable según uso real.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="sectionHead" data-reveal>
            <h2>FAQ</h2>
            <p>Dos líneas, sin ensayo.</p>
          </div>

          <div className="faq">
            <details data-reveal>
              <summary>¿DogMetrics sustituye a un entrenador?</summary>
              <p>No. Añade objetividad: datos, patrones y clips para mejores decisiones.</p>
            </details>

            <details data-reveal>
              <summary>¿Qué significa “máx. 3 entrenos pendientes sin recap”?</summary>
              <p>Es un límite de flujo para mantener el sistema ágil (pendientes a la vez).</p>
            </details>

            <details data-reveal>
              <summary>¿Se puede compartir con entrenador?</summary>
              <p>Sí. La idea es que puedas compartir la sesión y comentar sobre el timeline.</p>
            </details>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="section">
          <div className="card" data-reveal>
            <div className="sectionHead">
              <h2>Lista de espera</h2>
              <p>Te avisamos cuando abramos la beta.</p>
            </div>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias! Te escribiremos pronto.");
              }}
            >
              <input required type="email" placeholder="tu@email.com" />
              <select defaultValue="Guía">
                <option>Guía</option>
                <option>Entrenador</option>
                <option>Club</option>
                <option>Otro</option>
              </select>
              <button className="btn primary" type="submit">
                Apuntarme
              </button>
            </form>

            <div className="smallPrint">
              <span className="muted">Sin spam. Solo updates de beta.</span>
            </div>
          </div>
        </section>

        <footer className="footer" data-reveal>
          <div>© {year} DogMetrics</div>
          <div>
            Contacto: <span className="contact">hello@dogmetrics</span>
          </div>
        </footer>
      </div>
    </>
  );
}

const css = `
:root{
  --blue:#1B3C68;
  --teal:#1CC6B8;
  --orange:#FF8A3C;

  --bg:#070b12;
  --stroke:rgba(255,255,255,.10);
  --card:rgba(255,255,255,.06);
  --card2:rgba(255,255,255,.04);
  --text:rgba(255,255,255,.92);
  --muted:rgba(255,255,255,.70);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--text);
  background:
    radial-gradient(900px 700px at 15% 10%, rgba(28,198,184,.24), transparent 60%),
    radial-gradient(900px 700px at 85% 20%, rgba(255,138,60,.14), transparent 60%),
    radial-gradient(900px 700px at 55% 110%, rgba(27,60,104,.38), transparent 60%),
    var(--bg);
}

a{color:inherit;text-decoration:none}
.wrap{max-width:1120px;margin:0 auto;padding:18px 18px 70px;position:relative}

.progressBar{
  position:fixed;top:0;left:0;height:2px;width:100%;
  transform-origin:left center;
  background: linear-gradient(90deg, rgba(28,198,184,.95), rgba(27,60,104,.95), rgba(255,138,60,.85));
  z-index:9999;
}

.topbar{
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  position:sticky;top:0;z-index:50;
  padding:10px 0;
  background: linear-gradient(180deg, rgba(7,11,18,.85), rgba(7,11,18,.35));
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.brand{
  display:flex;align-items:center;gap:10px;
  background:none;border:none;color:inherit;cursor:pointer;padding:6px 8px;border-radius:12px;
}
.brand:hover{background: rgba(255,255,255,.04)}
.dot{width:10px;height:10px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 6px rgba(28,198,184,.12)}
.brandName{font-weight:900;letter-spacing:.2px}
.pill{
  font-size:12px;color:var(--muted);
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.03);
  padding:7px 10px;border-radius:999px
}
.nav{display:flex;gap:14px;flex-wrap:wrap}
.nav a{font-size:13px;color:var(--muted);padding:8px 10px;border-radius:999px}
.nav a:hover{color:var(--text);background: rgba(255,255,255,.04)}
.nav a.active{color:var(--text);background: rgba(28,198,184,.10);border:1px solid rgba(28,198,184,.20)}

.topActions{display:flex;gap:10px;align-items:center}

.btn{
  display:inline-flex;align-items:center;justify-content:center;
  padding:12px 14px;border-radius:14px;
  border:1px solid var(--stroke);
  font-weight:900;font-size:14px;
  transition: transform .12s ease, filter .12s ease;
  cursor:pointer;
}
.btn:hover{transform: translateY(-1px); filter: brightness(1.03)}
.btn.primary{
  border-color: rgba(28,198,184,.35);
  background: linear-gradient(135deg, rgba(28,198,184,.95), rgba(27,60,104,.95));
}
.btn.secondary{background: rgba(255,255,255,.04)}
.btn.full{width:100%;margin-top:12px}

.section{margin-top:26px}
.sectionHead{display:flex;align-items:end;justify-content:space-between;gap:10px;margin-bottom:12px}
.sectionHead h2{margin:0;font-size:28px;letter-spacing:-.3px}
.sectionHead p{margin:0;color:var(--muted)}

.card{
  border:1px solid var(--stroke);
  background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03));
  border-radius:20px;
  padding:18px;
  backdrop-filter: blur(10px);
}

.hero{
  margin-top:18px;
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap:16px;
}
.heroLeft{
  border:1px solid rgba(255,255,255,.10);
  background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03));
  border-radius:22px;
  padding:20px;
  position:relative;
  overflow:hidden;
}
.heroLeft:before{
  content:"";
  position:absolute;inset:-30%;
  background:
    radial-gradient(closest-side, rgba(28,198,184,.18), transparent 60%),
    radial-gradient(closest-side, rgba(255,138,60,.12), transparent 60%);
  filter: blur(2px);
  animation: floaty 10s ease-in-out infinite alternate;
  opacity:.9;
  pointer-events:none;
}
@keyframes floaty{
  from{transform: translate3d(-2%, -2%, 0) scale(1)}
  to{transform: translate3d(2%, 2%, 0) scale(1.05)}
}

.kicker{
  position:relative;
  display:flex;gap:10px;align-items:center;flex-wrap:wrap;
  color:var(--muted);font-size:13px;
}
.spark{width:9px;height:9px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 6px rgba(255,138,60,.12)}
.sep{width:6px;height:6px;border-radius:50%;background: rgba(255,255,255,.18)}
.muted{color:var(--muted)}

.heroLeft h1{
  position:relative;
  margin:10px 0 0;
  font-size:46px;
  line-height:1.04;
  letter-spacing:-.7px;
}
.accent{color:var(--teal)}
.sub{
  position:relative;
  margin:12px 0 0;
  color:var(--muted);
  line-height:1.65;
  font-size:16px;
  max-width:64ch;
}
.ctaRow{position:relative;display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}

.quickStats{
  position:relative;
  margin-top:16px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:10px;
}
.stat{
  background: rgba(0,0,0,.18);
  border:1px solid rgba(255,255,255,.08);
  border-radius:16px;
  padding:12px;
}
.stat b{display:block;font-size:13px}
.stat span{display:block;color:var(--muted);font-size:12.5px;margin-top:6px;line-height:1.35}

.heroRight{display:flex;flex-direction:column;gap:12px}
.mock{
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius:22px;
  overflow:hidden;
}
.mockTop{
  display:flex;align-items:center;gap:8px;
  padding:10px 12px;
  border-bottom:1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.dotMini{width:10px;height:10px;border-radius:999px;opacity:.95}
.dotMini.red{background:#ff5f56}
.dotMini.yellow{background:#ffbd2e}
.dotMini.green{background:#27c93f}
.mockTitle{margin-left:6px;color:var(--muted);font-size:12px}

.mockBody{padding:12px}
.mockRow{display:flex;gap:10px;align-items:center}
.chip{
  font-size:11px;
  padding:6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: var(--muted);
}
.chip.teal{border-color: rgba(28,198,184,.25); background: rgba(28,198,184,.10); color: rgba(255,255,255,.86)}
.bar{height:10px;flex:1;border-radius:999px;background: linear-gradient(90deg, rgba(27,60,104,.2), rgba(28,198,184,.25), rgba(255,138,60,.18))}

.mockVideo{
  margin-top:12px;
  height:220px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.10);
  background:
    radial-gradient(closest-side at 25% 30%, rgba(28,198,184,.18), transparent 60%),
    radial-gradient(closest-side at 80% 70%, rgba(255,138,60,.14), transparent 60%),
    rgba(0,0,0,.25);
  position:relative;
  overflow:hidden;
}
.mockPlay{
  position:absolute;inset:0;
  display:flex;align-items:center;justify-content:center;
  font-weight:900;font-size:22px;
  color: rgba(255,255,255,.78);
}
.mockOverlay{
  position:absolute;inset:0;
  background:
    linear-gradient(0deg, rgba(0,0,0,.35), transparent 55%);
  pointer-events:none;
}
.timeline{
  margin-top:12px;
  height:36px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  position:relative;
  overflow:hidden;
}
.tick{position:absolute;top:8px;bottom:8px;width:1px;background:rgba(255,255,255,.10)}
.tick:nth-child(1){left:16%}
.tick:nth-child(2){left:33%}
.tick:nth-child(3){left:66%}
.tick:nth-child(4){left:83%}
.marker{
  position:absolute;top:8px;bottom:8px;width:6px;border-radius:999px;
  left:58%;
  background: rgba(28,198,184,.95);
  box-shadow: 0 0 0 6px rgba(28,198,184,.12);
}
.range{
  position:absolute;top:10px;bottom:10px;border-radius:999px;
  left:62%;right:10%;
  background: rgba(255,138,60,.20);
  border: 1px solid rgba(255,138,60,.22);
}

.mockFooter{
  margin-top:12px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:10px;
}
.metric{
  background: rgba(0,0,0,.18);
  border:1px solid rgba(255,255,255,.08);
  border-radius:16px;
  padding:10px;
}
.metric b{display:block;margin-top:3px;font-size:14px}
.heroRightNote{display:flex;gap:10px;align-items:center;justify-content:space-between}

.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.tile{
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius:18px;
  padding:16px;
  transition: transform .14s ease, border-color .14s ease;
}
.tile:hover{transform: translateY(-2px); border-color: rgba(28,198,184,.22)}
.tileTop{display:flex;align-items:center;justify-content:space-between;gap:8px}
.tile h3{margin:0 0 8px;font-size:16px}
.tile p{margin:0;color:var(--muted);line-height:1.6}
.badge{
  font-size:11px;color: rgba(0,0,0,.72);
  background: rgba(28,198,184,.95);
  padding:6px 8px;border-radius:999px;font-weight:900;
}

.split{display:grid;grid-template-columns: 1.05fr .95fr;gap:16px}
.bullets{display:grid;gap:10px;margin-top:12px}
.bullet{padding:12px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background: rgba(0,0,0,.18)}
.bullet b{display:block}
.bullet span{display:block;margin-top:5px}
.glass{background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))}
.miniGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.miniTile{padding:12px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background: rgba(0,0,0,.18)}
.miniTile b{display:block}
.miniTile span{display:block;margin-top:6px}

.marquee{
  margin-top:14px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius:18px;
  overflow:hidden;
}
.marqueeTrack{
  display:flex;gap:10px;
  padding:10px;
  width:max-content;
  animation: marquee 18s linear infinite;
}
@keyframes marquee{
  from{transform: translateX(0)}
  to{transform: translateX(-50%)}
}
.marqueeItem{
  font-size:12px;
  padding:8px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(0,0,0,.18);
  color: var(--muted);
}

.billing{
  display:flex;gap:8px;
  padding:6px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  width: fit-content;
}
.seg{
  padding:10px 12px;border-radius:999px;
  border:1px solid transparent;
  background: transparent;
  color: var(--muted);
  font-weight:900;
  cursor:pointer;
}
.seg.on{
  color: var(--text);
  background: rgba(28,198,184,.12);
  border-color: rgba(28,198,184,.22);
}
.save{
  margin-left:6px;
  font-size:11px;
  padding:4px 8px;
  border-radius:999px;
  background: rgba(255,138,60,.16);
  border:1px solid rgba(255,138,60,.22);
  color: rgba(255,255,255,.85);
}

.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px}
.priceCard{
  border:1px solid rgba(255,255,255,.12);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
  border-radius:20px;
  padding:16px;
  position:relative;
  transition: transform .14s ease, border-color .14s ease, outline-color .14s ease;
}
.priceCard:hover{transform: translateY(-3px); border-color: rgba(28,198,184,.22)}
.priceCard.pop{outline: 2px solid rgba(28,198,184,.35)}
.tag{
  position:absolute;top:14px;right:14px;
  font-size:11px;color:rgba(0,0,0,.75);
  background: rgba(28,198,184,.95);
  padding:6px 8px;border-radius:999px;
  font-weight:900;
}
.priceHeader{display:flex;align-items:end;justify-content:space-between;gap:10px}
.priceCard h3{margin:0;font-size:18px}
.price{margin-top:8px;font-size:34px;font-weight:900;letter-spacing:-.4px}
.price small{font-size:13px;color:var(--muted);font-weight:800}

.list{margin:12px 0 0;padding:0;list-style:none;display:grid;gap:8px}
.list li{display:flex;gap:10px;align-items:flex-start;color:var(--muted);line-height:1.45}
.icheck{
  width:20px;height:20px;border-radius:999px;
  display:inline-flex;align-items:center;justify-content:center;
  background: rgba(28,198,184,.12);
  border:1px solid rgba(28,198,184,.22);
  color: rgba(255,255,255,.86);
  font-weight:900;
  flex: 0 0 auto;
}
.note{margin-top:10px;color:var(--muted);font-size:12.5px;line-height:1.5}
.fine{margin:12px 0 0;color:var(--muted);font-size:12.5px;line-height:1.55}

.form{margin-top:12px;display:flex;gap:10px;flex-wrap:wrap}
.form input,.form select{
  padding:12px 12px;border-radius:14px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.18);
  color:var(--text);
  min-width:220px;
  flex:1;
}
.form select{flex:0;min-width:160px}
.smallPrint{margin-top:10px}

.faq{display:grid;gap:10px}
details{
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius:16px;
  padding:12px 14px;
}
summary{cursor:pointer;font-weight:900}
details p{margin:10px 0 0;color:var(--muted);line-height:1.6}

.footer{
  margin-top:26px;
  display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;
  color:var(--muted);font-size:12px
}
.contact{color:rgba(255,255,255,.85)}

/* Reveal */
[data-reveal]{
  opacity:0;
  transform: translateY(10px);
  transition: opacity .5s ease, transform .5s ease;
}
.is-visible{
  opacity:1;
  transform: translateY(0);
}

@media (max-width:980px){
  .nav{display:none}
  .hero{grid-template-columns:1fr}
  .heroLeft h1{font-size:38px}
  .quickStats,.grid3,.pricing{grid-template-columns:1fr}
  .split{grid-template-columns:1fr}
  .miniGrid{grid-template-columns:1fr}
  .form select{flex:1;min-width:220px}
  .priceHeader{flex-direction:column;align-items:flex-start}
}
`;
