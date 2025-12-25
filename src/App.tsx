import React, { useMemo } from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
  highlight?: string;
  features: string[];
  note?: string;
};

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const plans: Plan[] = [
    {
      name: "SOLO",
      price: "15€",
      period: "/ mes",
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
      price: "25€",
      period: "/ mes",
      highlight: "Más popular",
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
      price: "39€",
      period: "/ mes",
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

      <div className="wrap">
        <header className="topbar">
          <div className="brand">
            <span className="dot" />
            <div className="brandText">
              <span className="brandName">DogMetrics</span>
              <span className="pill">Beta privada</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#como">Cómo funciona</a>
            <a href="#features">Features</a>
            <a href="#precios">Precios</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="btn secondary" href="#waitlist">
            Unirme
          </a>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="card heroLeft">
            <h1>
              Convierte tus entrenos en{" "}
              <span className="accent">datos claros</span> y decisiones concretas.
            </h1>
            <p className="sub">
              En agility todo ocurre en décimas de segundo. DogMetrics analiza tus
              vídeos con IA y te devuelve un informe visual: timeline, métricas
              clave y clips destacados para entender qué pasó realmente.
            </p>

            <div className="cta">
              <a className="btn primary" href="#waitlist">
                Entrar en la lista de espera
              </a>
              <a className="btn secondary" href="#precios">
                Ver planes
              </a>
            </div>

            <div className="mini">
              <div className="miniCard">
                <b>Timeline interactivo</b>
                <span>Eventos, intentos, errores y navegación rápida.</span>
              </div>
              <div className="miniCard">
                <b>Vídeo + métricas</b>
                <span>Tiempos, patrones y evolución entre sesiones.</span>
              </div>
              <div className="miniCard">
                <b>Timing de órdenes</b>
                <span>Relación entre tu voz y las decisiones del perro.</span>
              </div>
            </div>
          </div>

          <div className="card heroRight">
            <h3>Qué es DogMetrics</h3>
            <ul>
              <li>Una herramienta de análisis, no otra app de cronómetro.</li>
              <li>Especializada en agility: perro, guía y obstáculos.</li>
              <li>Objetividad + memoria: datos y clips siempre accesibles.</li>
            </ul>

            <div className="hr" />

            <h3>MVP (v1)</h3>
            <ul>
              <li>Subida de vídeo + recorte (TC in/out).</li>
              <li>Timeline con marcadores.</li>
              <li>Overlay de dibujo/texto por frame.</li>
              <li>Compartir sesiones con entrenador.</li>
            </ul>
          </div>
        </section>

        {/* CÓMO */}
        <section id="como" className="card section">
          <div className="sectionTitle">
            <h2>Cómo funciona</h2>
            <span>Una idea por pantalla. Scroll rápido.</span>
          </div>

          <div className="grid3">
            <div className="tile">
              <h3>1) Subes tu vídeo</h3>
              <p>Entreno o competición. Seleccionas el tramo y listo.</p>
            </div>
            <div className="tile">
              <h3>2) Analizamos con IA</h3>
              <p>Organizamos eventos y medimos métricas útiles.</p>
            </div>
            <div className="tile">
              <h3>3) Recibes el informe</h3>
              <p>Timeline, métricas y highlights para revisar con calma.</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section grid2">
          <div className="card">
            <div className="sectionTitle">
              <h2>Features clave</h2>
              <span>Diseñado para entrenar con criterio</span>
            </div>

            <div className="grid3">
              <div className="tile">
                <h3>Marcadores</h3>
                <p>Señala momentos clave y navega como en un editor pro.</p>
              </div>
              <div className="tile">
                <h3>Overlay</h3>
                <p>Dibujo y texto sincronizados al frame.</p>
              </div>
              <div className="tile">
                <h3>Comparación</h3>
                <p>Side-by-side entre intentos o runs para ver diferencias.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="sectionTitle">
              <h2>Para quién</h2>
              <span>Guías · Entrenadores · Clubs</span>
            </div>

            <div className="grid3">
              <div className="tile">
                <h3>Guías</h3>
                <p>Objetivos claros. Menos “creo que…”, más evidencia.</p>
              </div>
              <div className="tile">
                <h3>Entrenadores</h3>
                <p>Feedback preciso con vídeo marcado y métricas explicables.</p>
              </div>
              <div className="tile">
                <h3>Clubs</h3>
                <p>Valor añadido para alumnos y programas de entreno.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="precios" className="card section">
          <div className="sectionTitle">
            <h2>Planes</h2>
            <span>Comparación rápida, sin texto infinito</span>
          </div>

          <div className="pricing">
            {plans.map((p) => (
              <div key={p.name} className={`priceCard ${p.highlight ? "pop" : ""}`}>
                {p.highlight && <div className="tag">{p.highlight}</div>}
                <h3>{p.name}</h3>
                <div className="price">
                  {p.price} <small>{p.period}</small>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {p.note && <div className="note">{p.note}</div>}
              </div>
            ))}
          </div>

          <p className="fine">
            Nota: “máx. 3 entrenos pendientes sin recap” es un límite de flujo (pendientes a la
            vez). Ajustable según uso real.
          </p>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="card section">
          <div className="sectionTitle">
            <h2>Lista de espera</h2>
            <span>Te avisamos cuando abramos la beta</span>
          </div>

          <p className="sub" style={{ marginTop: 0 }}>
            Déjanos tu email y cuéntanos si eres guía, entrenador o club. (Placeholder:
            luego lo conectamos a un formulario real).
          </p>

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
        </section>

        {/* FAQ */}
        <section id="faq" className="card section">
          <div className="sectionTitle">
            <h2>FAQ</h2>
            <span>Respuestas rápidas</span>
          </div>

          <div className="faq">
            <details>
              <summary>¿Qué significa “máx. 3 entrenos pendientes sin recap”?</summary>
              <p>
                Es un límite de flujo: puedes subir sesiones, pero solo mantener un número
                reducido pendientes de procesar para mantener el sistema ágil.
              </p>
            </details>

            <details>
              <summary>¿DogMetrics sustituye a un entrenador?</summary>
              <p>
                No. DogMetrics añade objetividad: datos, patrones y clips para que tú (y tu
                entrenador) toméis mejores decisiones.
              </p>
            </details>

            <details>
              <summary>¿Para qué sirve el análisis de órdenes?</summary>
              <p>
                Para entender el timing real: si la orden llega tarde, si el perro ya tomó
                una decisión o si hay puntos donde la comunicación se rompe.
              </p>
            </details>
          </div>
        </section>

        <footer className="footer">
          <div>© {year} DogMetrics</div>
          <div>
            Contacto: <span className="contact">hello@dogmetrics</span> (cámbialo)
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
    radial-gradient(1200px 700px at 15% 0%, rgba(28,198,184,.22), transparent 55%),
    radial-gradient(900px 600px at 85% 10%, rgba(255,138,60,.14), transparent 60%),
    radial-gradient(900px 700px at 60% 100%, rgba(27,60,104,.35), transparent 55%),
    var(--bg);
}

a{color:inherit;text-decoration:none}
.wrap{max-width:1120px;margin:0 auto;padding:28px 18px 70px}

.topbar{
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  position:sticky;top:0;z-index:50;
  padding:10px 0;
  backdrop-filter: blur(10px);
}
.brand{display:flex;align-items:center;gap:10px}
.dot{width:10px;height:10px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 6px rgba(28,198,184,.12)}
.brandText{display:flex;align-items:center;gap:10px}
.brandName{font-weight:900;letter-spacing:.2px}
.pill{
  font-size:12px;color:var(--muted);
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.03);
  padding:7px 10px;border-radius:999px
}
.nav{display:flex;gap:14px;flex-wrap:wrap}
.nav a{font-size:13px;color:var(--muted)}
.nav a:hover{color:var(--text)}

.card{
  border:1px solid var(--stroke);
  background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03));
  border-radius:20px;
  padding:18px;
  backdrop-filter: blur(10px);
}

.hero{
  margin-top:12px;
  display:grid;
  grid-template-columns: 1.35fr .65fr;
  gap:16px;
}
.heroLeft h1{
  margin:0;
  font-size:44px;
  line-height:1.03;
  letter-spacing:-.6px;
}
.accent{color:var(--teal)}
.sub{
  margin:12px 0 0;
  color:var(--muted);
  line-height:1.6;
  font-size:16px;
  max-width:62ch;
}
.cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}

.btn{
  display:inline-flex;align-items:center;justify-content:center;
  padding:12px 14px;border-radius:14px;
  border:1px solid var(--stroke);
  font-weight:800;font-size:14px;
  transition: transform .12s ease, filter .12s ease;
}
.btn:hover{transform: translateY(-1px); filter: brightness(1.02)}
.btn.primary{
  border-color: rgba(28,198,184,.35);
  background: linear-gradient(135deg, rgba(28,198,184,.95), rgba(27,60,104,.95));
}
.btn.secondary{background: rgba(255,255,255,.04)}

.mini{
  margin-top:16px;
  display:grid;grid-template-columns:repeat(3,1fr);gap:10px
}
.miniCard{
  background:rgba(0,0,0,.18);
  border:1px solid rgba(255,255,255,.08);
  border-radius:16px;
  padding:12px;
}
.miniCard b{display:block;font-size:13px}
.miniCard span{display:block;color:var(--muted);font-size:12.5px;margin-top:6px;line-height:1.35}

.heroRight h3{margin:0 0 10px;font-size:16px}
.heroRight ul{margin:0;padding-left:18px;color:var(--muted);line-height:1.85}
.hr{height:1px;background:rgba(255,255,255,.10);margin:14px 0}

.section{margin-top:18px}
.sectionTitle{display:flex;align-items:end;justify-content:space-between;gap:10px;margin-bottom:10px}
.sectionTitle h2{margin:0;font-size:24px}
.sectionTitle span{color:var(--muted);font-size:13px}

.grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.tile{
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius:18px;
  padding:16px;
}
.tile h3{margin:0 0 8px;font-size:16px}
.tile p{margin:0;color:var(--muted);line-height:1.6}

.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.priceCard{
  border:1px solid rgba(255,255,255,.12);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
  border-radius:20px;
  padding:16px;
  position:relative;
}
.priceCard.pop{outline: 2px solid rgba(28,198,184,.35)}
.tag{
  position:absolute;top:14px;right:14px;
  font-size:11px;color:rgba(0,0,0,.75);
  background: rgba(28,198,184,.95);
  padding:6px 8px;border-radius:999px;
  font-weight:900;
}
.priceCard h3{margin:0;font-size:18px}
.price{margin-top:8px;font-size:34px;font-weight:900;letter-spacing:-.4px}
.price small{font-size:14px;color:var(--muted);font-weight:700}
.priceCard ul{margin:12px 0 0;padding-left:18px;color:var(--muted);line-height:1.85}
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
  margin-top:24px;
  display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;
  color:var(--muted);font-size:12px
}
.contact{color:rgba(255,255,255,.85)}

@media (max-width:980px){
  .nav{display:none}
  .hero{grid-template-columns:1fr}
  .heroLeft h1{font-size:38px}
  .mini,.grid2,.grid3,.pricing{grid-template-columns:1fr}
  .form select{flex:1;min-width:220px}
}
`;
