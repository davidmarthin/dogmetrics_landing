import { launchLabel } from "../content";
import { Reveal } from "./Reveal";

const coachPlans = [
  {
    name: "Coach Starter",
    price: "€30",
    body: "Includes 2 students. A low-risk way to try DogMetrics with your own classes.",
  },
  {
    name: "Coach",
    price: "€50",
    body: "Includes up to 15 students. For coaches running regular online classes.",
    featured: true,
  },
  {
    name: "Extra students",
    price: "+€20",
    body: "Add 10 more students to your Coach plan, as many times as you need.",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="pricingSection section-tight">
      <div className="container stack">
        <Reveal className="stack-sm">
          <span className="kicker">Pricing</span>
          <h2 className="h3">Simple monthly plans</h2>
          <p className="small" style={{ maxWidth: "60ch" }}>
            {launchLabel}. Prices are per month, excluding VAT, and may still change during early
            access.
          </p>
        </Reveal>

        <Reveal delay={60} className="stack-sm">
          <h3 className="pricingGroup">For coaches</h3>
          <div className="pricingRow is-three">
            {coachPlans.map((plan) => (
              <div className={`priceCard ${plan.featured ? "is-featured" : ""}`} key={plan.name}>
                <div className="priceCardHead">
                  <b>{plan.name}</b>
                  <span className="priceValue">
                    {plan.price}
                    <small> / month</small>
                  </span>
                </div>
                <div className="priceCardBody">{plan.body}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="stack-sm">
          <h3 className="pricingGroup">For handlers</h3>
          <div className="pricingRow">
            <div className="priceCard">
              <div className="priceCardHead">
                <b>Handler</b>
                <span className="priceValue">
                  €15<small> / month</small>
                </span>
              </div>
              <div className="priceCardBody">
                For handlers training on their own: upload sessions, mark attempts, build recaps
                and keep your history.
              </div>
            </div>
            <div className="priceCard">
              <div className="priceCardHead">
                <b>Student of a coach</b>
                <span className="priceValue">Included</span>
              </div>
              <div className="priceCardBody">
                If your coach uses DogMetrics, your place is part of their plan.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
