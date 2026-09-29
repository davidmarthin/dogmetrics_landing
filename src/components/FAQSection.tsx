import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do I need special cameras?",
    a: "No — you can start with your current setup. DMCam is optional.",
  },
  {
    q: "Is my video private?",
    a: "Yes. You control access and sharing. See the Privacy Policy for details.",
  },
  {
    q: "When is it available?",
    a: "We're onboarding pilots in 2026.",
  },
];

export function FAQSection() {
  return (
    <section className="section-tight">
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
