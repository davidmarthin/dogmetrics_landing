import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

type Plan = { name: string; price: string; body: string };

function PriceCard({ plan, perMonth, featured = false }: { plan: Plan; perMonth?: string; featured?: boolean }) {
  return (
    <div className={`priceCard ${featured ? "is-featured" : ""}`}>
      <div className="priceCardHead">
        <b>{plan.name}</b>
        <span className="priceValue">
          {plan.price}
          {perMonth && <small> {perMonth}</small>}
        </span>
      </div>
      <div className="priceCardBody">{plan.body}</div>
    </div>
  );
}

export function PricingSection() {
  const { t } = useI18n();
  const p = t.pricing;
  return (
    <section id="pricing" className="pricingSection section-tight">
      <div className="container stack">
        <Reveal className="stack-sm">
          <span className="kicker">{p.kicker}</span>
          <h2 className="h3">{p.title}</h2>
          <p className="small" style={{ maxWidth: "60ch" }}>{p.note}</p>
        </Reveal>

        <Reveal delay={60} className="stack-sm">
          <h3 className="pricingGroup">{p.coachesGroup}</h3>
          <div className="pricingRow is-three">
            <PriceCard plan={p.starter} perMonth={p.perMonth} />
            <PriceCard plan={p.coach} perMonth={p.perMonth} featured />
            <PriceCard plan={p.extra} perMonth={p.perMonth} />
          </div>
        </Reveal>

        <Reveal delay={120} className="stack-sm">
          <h3 className="pricingGroup">{p.handlersGroup}</h3>
          <div className="pricingRow">
            <PriceCard plan={p.handler} perMonth={p.perMonth} />
            <PriceCard plan={p.student} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
