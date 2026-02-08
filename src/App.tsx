import { useEffect, useState } from "react";

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
            <h1 className="h1">Turn agility videos into a training timeline — automatically.</h1>
            <p className="lead">
              Upload a session and get attempts, highlights, and coach annotations in minutes.
              Built for clubs, coaches, and handlers.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#request-demo">Request demo</a>
              <a className="btn s" href="#how-it-works">How it works</a>
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

      <section id="request-demo" className="sectionAlt">
        <div className="container grid2">
          <div className="stack">
            <div className="kicker">Request access</div>
            <h2 className="h2">Get a demo and join the pilot</h2>
            <p className="lead">
              Tell us a bit about your training setup. We’ll reply within 48 hours.
            </p>
          </div>

          <div className="card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget as HTMLFormElement);
                const name = String(fd.get("name") || "");
                const email = String(fd.get("email") || "");
                const role = String(fd.get("role") || "");
                const msg = String(fd.get("message") || "");
                const subject = encodeURIComponent("DogMetrics — Demo request");
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${msg}`
                );
                window.location.href = `mailto:demo@dog-metrics.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="stack" style={{ gap: 12 }}>
                <input className="formInput" name="name" placeholder="Name" required />
                <input className="formInput" name="email" placeholder="Email" type="email" required />
                <select className="formInput" name="role" required defaultValue="">
                  <option value="" disabled>I’m a…</option>
                  <option>Coach</option>
                  <option>Club</option>
                  <option>Handler</option>
                  <option>Other</option>
                </select>
                <textarea className="formInput" name="message" placeholder="Message (optional)" rows={4} />
                <button className="btn btnPrimary" type="submit">Send</button>
                <div className="small">
                  By contacting us you agree we’ll use your details to reply. See the Privacy Policy.
                </div>
              </div>
            </form>
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
              <a href="#request-demo">Request demo</a>
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
