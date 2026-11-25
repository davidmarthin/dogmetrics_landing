import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function FAQSection() {
  const { t } = useI18n();
  return (
    <section id="faq" className="section-tight">
      <div className="container stack">
        <Reveal className="kicker">{t.faq.kicker}</Reveal>
        <Reveal delay={60} className="faqList">
          {t.faq.items.map((item) => (
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
