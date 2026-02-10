import { useEffect, useState } from "react";

const waitingListSubject = encodeURIComponent("DogMetrics — Waiting list");
const waitingListBody = encodeURIComponent(`Hi DogMetrics team,

I’d like to join the waiting list.

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

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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
            <h1 className="h1">Turn long agility sessions into a structured review workflow.</h1>
            <p className="lead">
              DogMetrics helps you review attempts, tag key events, generate a recap, and export
              highlight videos — so you spend less time scrubbing and more time training.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href={waitingListHref}>Join the waiting list</a>
              <a className="btn s" href="#how-it-works">How it works</a>
            </div>
            <div className="small">
              Early access is limited. Join the waiting list and we’ll contact you when spots open.
            </div>
            <div className="small">
              By contacting us you agree we’ll use your details to reply. See the Privacy Policy.
            </div>

            <div className="cardGrid" style={{ marginTop: 8 }}>
              <div className="card"><b>Auto segmentation</b><br />Find attempts inside long recordings.</div>
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
              Early access — we’re onboarding a small number of clubs and coaches for 2026 pilots.
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className="sectionAlt">
        <div className="container stack">
          <div className="kicker">How it works</div>
          <h2 className="h2">From camera to insights</h2>

          <div className="cardGrid">
            <div className="card"><b>1) Record</b><br />Use DMCam or your current camera setup.</div>
            <div className="card"><b>2) Upload</b><br />Send sessions to DogMetrics Cloud.</div>
            <div className="card"><b>3) Review</b><br />Timeline, highlights, and annotations.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="kicker">Early access includes</div>
          <h2 className="h2">What you get in the waiting list rollout</h2>

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
          <div className="kicker">Plans</div>
          <h2 className="h2">Start with a pilot</h2>
          <p className="lead">
            We’re onboarding early access users. Pick the track that fits you — we’ll help you set it up.
          </p>

          <div className="cardGrid">
            <div className="card cardFeatured">
              <b>Pilot (Clubs & Coaches)</b>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                Best for clubs running regular training sessions and coaches who review multiple teams.
                </div>
                <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Onboarding call + setup guidance</li>
                <li>Timeline + highlights workflow</li>
                <li>Coach annotations & sharing</li>
              </ul>
            </div>

            <div className="card">
              <b>Solo (Handlers)</b>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                For individual handlers who want faster review and progress tracking.
              </div>
              <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Upload sessions and review attempts</li>
                <li>Highlights + recap sharing</li>
                <li>Personal library (coming soon)</li>
              </ul>
            </div>

            <div className="card">
              <b>Club (Multi-coach)</b>
              <div style={{ marginTop: 8, color: "var(--muted)" }}>
                A shared space for clubs: multiple coaches, multiple teams, and shared datasets.
                </div>
                <ul style={{ marginTop: 12, marginBottom: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                <li>Multiple coach accounts</li>
                <li>Shared session library</li>
                <li>Club workflows (in pilot)</li>
              </ul>
            </div>
          </div>

          <div className="btnRow" style={{ marginTop: 6 }}>
            <a className="btn btnPrimary" href={waitingListHref}>Join the waiting list</a>
            <span className="small">No public pricing yet — pilots are tailored to your setup.</span>
          </div>
        </div>
      </section>

      <section id="request-demo" className="sectionAlt">
        <div className="container grid2">
          <div className="stack">
            <div className="kicker">Waiting list</div>
            <h2 className="h2">Join the waiting list</h2>
            <p className="lead">
              Tell us about your sessions and goals — we’ll contact you when spots open.
            </p>
            <div className="btnRow">
              <a className="btn btnPrimary" href={waitingListHref}>Join the waiting list</a>
            </div>
            <div className="small">
              Early access is limited. Join the waiting list and we’ll contact you when spots open.
            </div>
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
              <a href={waitingListHref}>Join the waiting list</a>
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
