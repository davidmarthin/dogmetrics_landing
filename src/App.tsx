import { useEffect, useRef, useState } from "react";

const waitingListSubject = encodeURIComponent("DogMetrics — Private Pilot");
const waitingListBody = encodeURIComponent(`Hi DogMetrics team,

I’d like to apply for the DogMetrics Private Pilot.

Name:
Role (handler / coach / club):
Club (optional):
Country / city:
Typical session length:
Use case (training / competition / both):
Interested in DMCam? (yes/no):
Anything else we should know:

Thanks!`);
const waitingListHref = `mailto:demo@dog-metrics.com?subject=${waitingListSubject}&body=${waitingListBody}`;
const ORANGE = "#FF8A3C";
const betaApplyUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7APWCUl56ZMllHzS8pYb7ytD3fessC8VxJLB8Pw6fr4Oszw/viewform?usp=header";

function DemoVideoModal({
  open,
  onClose,
  src,
  title = "DogMetrics Demo",
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ESC para cerrar + bloquear scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Autoplay al abrir (sin forzar: si falla por políticas, ok)
    setTimeout(() => {
      try {
        videoRef.current?.play();
      } catch {}
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Pausar al cerrar
  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        // click en backdrop cierra, click dentro no
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "min(980px, 100%)",
          background: "rgba(20,20,24,0.98)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.92)", fontWeight: 600 }}>
            {title}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 10,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: 14 }}>
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              background: "black",
            }}
          >
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "flex-end",
              marginTop: 12,
            }}
          >
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(255,255,255,0.80)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10,
                padding: "8px 10px",
              }}
            >
              Open in new tab
            </a>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WatchDemoButton({ onClick }: { onClick: () => void }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 999,
        padding: "10px 14px",
        border: `1px solid ${
          hover ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.14)"
        }`,
        background: ORANGE,
        color: "rgba(10,10,12,0.95)",
        cursor: "pointer",
        fontWeight: 700,
        letterSpacing: "0.2px",
        boxShadow: hover
          ? "0 10px 24px rgba(0,0,0,0.30)"
          : "0 8px 18px rgba(0,0,0,0.22)",
        transform: hover ? "translateY(-1px)" : "translateY(0)",
        transition:
          "transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease",
      }}
    >
      ▶ Watch Demo
    </button>
  );
}

 
export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxSrc(null);
    }
    if (lightboxSrc) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <div>
      <header className="section">
        <div className="container grid2">
          <div className="stack">
            <div className="kicker">Dog agility video analysis</div>
            <h1 className="h1">Turn agility training videos into structured feedback and measurable progress.</h1>
            <p className="lead">
              DogMetrics helps handlers and coaches upload training videos, review attempts, tag key events, generate recaps, and track progress across sessions.
            </p>

            <div className="btnRow">
              <a
                className="btn btnPrimary"
                href={betaApplyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Apply for Private Pilot
              </a>
             <a className="btn s" href="#how-it-works">How it works</a>

             <WatchDemoButton onClick={() => setDemoOpen(true)} />

             <DemoVideoModal
               open={demoOpen}
               onClose={() => setDemoOpen(false)}
               src="/video/demo_v03.mp4"
               title="DogMetrics — 90s demo"
             />
            </div>
            <div className="small">
              Early access is limited. Apply for the private pilot and we’ll contact you when spots open.
            </div>
            <div className="small">
              By contacting us you agree we’ll use your details to reply. See the Privacy Policy.
            </div>

            <div className="cardGrid" style={{ marginTop: 8 }}>
              <div className="card"><b>Structured review</b><br />Review attempts, events, and key moments in one timeline.</div>
              <div className="card"><b>Highlights</b><br />Create quick recaps for review and sharing.</div>
              <div className="card"><b>Coach tools</b><br />Notes, markers, and structured feedback.</div>
            </div>
          </div>

          <div className="stack">
            <div className="mediaCard">
              <div className="mediaHead">
                <b>Timeline view</b> <span style={{ opacity: 0.7 }}>— example session</span>
              </div>
              <div className="mediaBody">
                <img
                  src="/screens/timeline.png"
                  alt="DogMetrics timeline view"
                  style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "zoom-in" }}
                  onClick={() => setLightboxSrc("/screens/timeline.png")}
                />
              </div>
            </div>

            <div className="small">
              Early access — we’re onboarding a small number of handlers and coaches for 2026 pilots.
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className="sectionAlt">
        <div className="container stack">
          <div className="kicker">How it works</div>
          <h2 className="h2">From camera to insights</h2>

          <div className="cardGrid">
            <div className="card">
              <div>
                <b>1) Record</b><br />
                Works with your current videos. DMCam is optional.
              </div>

              <img
                className="cardImg"
                src="/screens/how-record.png"
                alt="Record a training session with a fixed camera"
                loading="lazy"
                decoding="async"
                onClick={() => setLightboxSrc("/screens/how-record.png")}
              />
            </div>

            <div className="card">
              <div>
                <b>2) Upload</b><br />
                Send sessions to DogMetrics Cloud.
              </div>

              <img
                className="cardImg"
                src="/screens/how-upload.png"
                alt="Upload your session to DogMetrics Cloud"
                loading="lazy"
                decoding="async"
                onClick={() => setLightboxSrc("/screens/how-upload.png")}
              />
            </div>

            <div className="card">
              <div>
                <b>3) Review</b><br />
                Timeline, highlights, and annotations.
              </div>

              <img
                className="cardImg"
                src="/screens/how-review.png"
                alt="Review timeline, highlights, and annotations"
                loading="lazy"
                decoding="async"
                onClick={() => setLightboxSrc("/screens/how-review.png")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="kicker">Early access includes</div>
          <h2 className="h2">What you get in the private pilot rollout</h2>

          <div className="card">
            <ul style={{ margin: 0, paddingLeft: 20, color: "var(--muted)", lineHeight: 1.8 }}>
              <li>Early access to DogMetrics Cloud (web-based session review and recap workflow)</li>
              <li>Priority support during setup (we’ll help you get your first sessions in)</li>
              <li>A private feedback channel to influence features and workflow</li>
              <li>Access to new exports first (recap + social highlights improvements)</li>
              <li>Preferential pricing when plans launch (locked-in early adopter offer)</li>
              <li>Optional DMCam interest list for field recording trials (limited availability)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="kicker">What you get</div>
          <h2 className="h2">A faster review workflow</h2>

          <div className="cardGrid">
            <div className="mediaCard">
              <div className="mediaHead"><b>Recap</b><span style={{ opacity: 0.7 }}>— share key moments</span></div>
              <div className="mediaBody">
                <img
                  src="/screens/recap.png"
                  alt="Recap video"
                  style={{ width:"100%", height:"100%", objectFit:"cover" , cursor: "zoom-in" }}
                  onClick={() => setLightboxSrc("/screens/recap.png")}
                />
              </div>
            </div>
            <div className="mediaCard">
              <div className="mediaHead"><b>Overlay</b><span style={{ opacity: 0.7 }}>— coaching annotations</span></div>
              <div className="mediaBody">
                <img
                  src="/screens/overlay.png"
                  alt="Overlay annotations"
                  style={{ width:"100%", height:"100%", objectFit:"cover", cursor: "zoom-in" }}
                  onClick={() => setLightboxSrc("/screens/overlay.png")}
                />
              </div>
            </div>
            <div className="mediaCard">
              <div className="mediaHead"><b>Compare</b><span style={{ opacity: 0.7 }}>— side-by-side</span></div>
              <div className="mediaBody">
                <img
                  src="/screens/compare.png"
                  alt="Compare runs"
                  style={{ width:"100%", height:"100%", objectFit:"cover", cursor: "zoom-in" }}
                  onClick={() => setLightboxSrc("/screens/compare.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionAlt">
        <div className="container stack">
          <div className="kicker">Early access</div>
          <h2 className="h2">Choose your track</h2>
          <p className="lead">
            DogMetrics is in early access. Apply for the private pilot and tell us which track fits your setup — we’ll follow up
            when spots open.
          </p>

          <div className="cardGrid">
            <div className="card cardFeatured">
              <b>Solo (Handler)</b>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                For individual handlers who want a faster, more consistent way to review training sessions and track progress.
              </div>
              <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Upload sessions and review attempts</li>
                <li>Tag key events inside each attempt</li>
                <li>Generate a recap and export highlights for social</li>
              </ul>
            </div>

            <div className="card">
              <b>Coach (Reviews)</b>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                For coaches who review multiple teams and want a clear feedback workflow — comments, drawings, and sharing.
              </div>
              <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Share recaps with comments and frame drawing</li>
                 <li>Compare runs and keep feedback organised</li>
                <li>Structured review workflow across athletes</li>
              </ul>
            </div>

            <div className="card">
              <b>Club (Multi-coach)</b>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                For clubs that want a shared space for multiple coaches, multiple teams, and a consistent way to review sessions.
              </div>
              <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Multiple coach accounts and shared access</li>
                <li>Shared session library across teams</li>
                <li>Club workflows (early access, limited)</li>
              </ul>
            </div>
          </div>

          <div className="btnRow" style={{ marginTop: 6 }}>
            <a
              className="btn btnPrimary"
              href={betaApplyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apply for Private Pilot
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="sectionAlt">
        <div className="container stack">
          <div className="kicker">Pricing</div>
          <h2 className="h2">Soft launch plans (Jun–Aug)</h2>
          <p className="lead">
            We’re currently recruiting <b>private pilot testers</b>. Soft launch pricing starts in June with clear weekly quotas.
          </p>

          <div className="cardGrid">
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <b>Starter</b>
                <span className="price">Free</span>
              </div>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                For weekly training review with a simple quota.
              </div>

              <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7, paddingLeft: 18 }}>
                <li><b>1 session / week</b></li>
                <li>Max <b>12 minutes</b> per session</li>
                <li>Recap workflow + review tools</li>
                <li><span style={{ opacity: 0.9 }}>RAW is input-only and removed after recap generation</span></li>
              </ul>
            </div>
  
            <div className="card cardFeatured">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <b>Early Supporter</b>
                <span className="price">€10 / month</span>
              </div>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                Help fund compute/storage and get higher weekly limits.
              </div>

              <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7, paddingLeft: 18 }}>
                <li><b>2 sessions / week</b></li>
                <li>Max <b>12 minutes</b> per session</li>
                <li>Priority onboarding & feedback channel</li>
                <li><b>Price locked for 12 months</b> (early adopters)</li>
              </ul>

              <div style={{ marginTop: 14 }} className="small">
                Planned standard price later: <b>€15 / month</b>.
              </div>
            </div>
          </div>

          <div className="btnRow" style={{ marginTop: 8 }}>
            <a
              className="btn btnPrimary"
              href={betaApplyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apply for Private Pilot
            </a>

            <span className="small" style={{ alignSelf: "center" }}>
              Private pilot spots are limited — we’ll reply with next steps.
            </span>
          </div>
        </div>
      </section>

                
      <section id="request-demo" className="sectionAlt">
        <div className="container grid2">
          <div className="stack">
            <div className="kicker">Private pilot</div>
            <div className="small">
              By contacting us you agree we’ll use your details to reply. See the Privacy Policy.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="kicker">FAQ</div>

          <div className="card">
            <b>Do I need special cameras?</b><br />
            No — you can start with your current setup. DMCam is optional.
          </div>

          <div className="card">
            <b>Is my video private?</b><br />
            Yes. You control access and sharing. See the Privacy Policy for details.
          </div>

          <div className="card">
            <b>When is it available?</b><br />
            We’re onboarding pilots in 2026.
          </div>
        </div>
      </section>

      <footer className="sectionAlt">
        <div className="container footerRow">
          <div className="small">© {new Date().getFullYear()} DogMetrics</div>
            <div className="footerLinks">
              <a href="/privacy.html">Privacy Policy</a>
              <a
                href={betaApplyUrl}
              >
                Apply for Private Pilot
              </a>
            </div>
        </div>
      </footer>
      {lightboxSrc && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            onClick={() => setLightboxSrc(null)}
          >
            <img
              src={lightboxSrc}
              alt="Screenshot enlarged"
              className="lightboxImg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
    </div>
  );
}
