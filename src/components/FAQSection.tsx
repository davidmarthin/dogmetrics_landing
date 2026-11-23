import { launchLabel } from "../content";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "When can I start?",
    a: `${launchLabel}. Until then we're working with a small group of coaches and their students. Apply below if you'd like to join early.`,
  },
  {
    q: "Do I need special cameras?",
    a: "No. A phone on a tripod is enough to record a training session.",
  },
  {
    q: "Do my students have to pay?",
    a: "No. Students of a coach are included in the coach's plan. Handlers who train on their own use the Handler plan.",
  },
  {
    q: "Which languages does it support?",
    a: "English, Dutch, German, Czech, Spanish and French.",
  },
  {
    q: "Is my video private?",
    a: "Yes. You control who can see your sessions. See the Privacy Policy for details.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-tight">
      <div className="container stack">
        <Reveal className="kicker">FAQ</Reveal>
        <Reveal delay={60} className="faqList">
          {faqs.map((item) => (
            <div className="faqItem" key={item.q}>
              <b>{item.q}</b>
              <p>{item.a}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
