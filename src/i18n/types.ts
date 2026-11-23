export const LANGS = ["en", "nl", "de", "cs", "es", "fr"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
  cs: "Čeština",
  es: "Español",
  fr: "Français",
};

type Item = { title: string; body: string };
type Step = Item & { alt: string };
type Plan = { name: string; price: string; body: string };

export interface Strings {
  meta: { title: string; description: string };
  launch: string;
  nav: {
    coaches: string;
    handlers: string;
    how: string;
    pricing: string;
    faq: string;
    apply: string;
    language: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    coach: string;
    handler: string;
    note: string;
    imgAlt: string;
    tagTitle: string;
    tagSub: string;
  };
  coaches: {
    kicker: string;
    title: string;
    lead: string;
    flow: [string, string, string, string];
    flowLabel: string;
    points: Item[];
    imgAlt: string;
  };
  handlers: {
    kicker: string;
    title: string;
    withCoachTitle: string;
    withCoachBody: string;
    ownTitle: string;
    ownIntro: string;
    ownList: string[];
    imgAlt: string;
  };
  fast: {
    kicker: string;
    title: string;
    lead: string;
    rawCaption: string;
    rawAlt: string;
    structuredCaption: string;
    structuredAlt: string;
  };
  how: { kicker: string; title: string; enlarge: string; steps: Step[] };
  progress: { kicker: string; statA: string; statBold: string; statC: string; lead: string; imgAlt: string };
  pricing: {
    kicker: string;
    title: string;
    note: string;
    coachesGroup: string;
    handlersGroup: string;
    perMonth: string;
    starter: Plan;
    coach: Plan;
    extra: Plan;
    handler: Plan;
    student: Plan;
  };
  cta: { title: string; lead: string; consent: string; privacy: string; emailIntro: string };
  faq: { kicker: string; items: { q: string; a: string }[] };
  footer: { privacy: string };
  lightboxAlt: string;
}
