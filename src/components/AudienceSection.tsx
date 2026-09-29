import { useState } from "react";
import { Reveal } from "./Reveal";

const audiences = {
  handler: {
    label: "Handler",
    lead: "For handlers who want a faster, more consistent way to review training sessions.",
    points: [
      "Upload sessions and review attempts",
      "Tag key events inside each attempt",
      "Generate a recap and export highlights",
    ],
  },
  coach: {
    label: "Coach",
    lead: "For coaches reviewing multiple teams who want a clear, structured feedback workflow.",
    points: [
      "Share recaps with comments and frame drawing",
      "Compare runs and keep feedback organised",
      "A consistent review workflow across athletes",
    ],
  },
};

type AudienceKey = keyof typeof audiences;

export function AudienceSection() {
  const [active, setActive] = useState<AudienceKey>("handler");
  const current = audiences[active];

  return (
    <section className="section">
      <div className="container stack">
        <Reveal className="sectionHead">
          <span className="kicker">Who it's for</span>
          <h2 className="h2">Built around the review, not the roster.</h2>
        </Reveal>

        <Reveal>
          <div className="audienceSwitch" role="tablist" aria-label="Choose your role">
            {(Object.keys(audiences) as AudienceKey[]).map((key) => (
              <button
                key={key}
                id={`audience-tab-${key}`}
                role="tab"
                aria-selected={active === key}
                aria-controls={`audience-panel-${key}`}
                className={active === key ? "is-active" : ""}
                onClick={() => setActive(key)}
              >
                {audiences[key].label}
              </button>
            ))}
          </div>

          <div
            className="audiencePanel"
            style={{ marginTop: 24 }}
            role="tabpanel"
            id={`audience-panel-${active}`}
            aria-labelledby={`audience-tab-${active}`}
          >
            <p className="lead">{current.lead}</p>
            <ul className="audienceList">
              {current.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <p className="audienceFootnote">
            Running a club? Multi-coach, shared-library access is available in early access with
            limited spots — apply and mention your club.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
