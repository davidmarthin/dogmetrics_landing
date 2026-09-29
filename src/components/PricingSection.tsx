import { Reveal } from "./Reveal";

export function PricingSection() {
  return (
    <section id="pricing" className="pricingSection section-tight">
      <div className="container stack">
        <Reveal className="stack-sm">
          <span className="kicker">Pricing</span>
          <h3 className="h3">Private pilot pricing</h3>
          <p className="small" style={{ maxWidth: "60ch" }}>
            We're opening a small private pilot for agility handlers and coaches. Pricing is
            provisional and designed to validate real training workflows.
          </p>
        </Reveal>

        <Reveal delay={80} className="pricingRow">
          <div className="priceCard">
            <div className="priceCardHead">
              <b>Handler Pilot</b>
              <span className="priceValue">€15 / month</span>
            </div>
            <div className="priceCardBody">
              For individual handlers who want to review training videos, tag attempts, generate
              recaps, and track progress.
            </div>
          </div>

          <div className="priceCard is-featured">
            <div className="priceCardHead">
              <b>Coach Pilot</b>
              <span className="priceValue">€30 / month</span>
            </div>
            <div className="priceCardBody">
              For coaches who want to give more structured feedback and test the workflow with
              real students.
            </div>
          </div>
        </Reveal>

        <p className="small">
          Founding testers: limited early access. Some close testers may try 1–2 sessions before
          deciding.
        </p>
      </div>
    </section>
  );
}
