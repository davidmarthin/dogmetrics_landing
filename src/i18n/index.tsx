import { createContext, useContext, useEffect, type ReactNode } from "react";
import { LANGS, type Lang, type Strings } from "./types";
import { en } from "./en";
import { nl } from "./nl";
import { de } from "./de";
import { cs } from "./cs";
import { es } from "./es";
import { fr } from "./fr";

export { LANGS, LANG_NAMES } from "./types";
export type { Lang, Strings } from "./types";

export const STRINGS: Record<Lang, Strings> = { en, nl, de, cs, es, fr };

/** Language comes from the first path segment: /nl/, /de/, /cs/, /es/, /fr/. Root is English. */
export function langFromPath(pathname: string): Lang {
  const seg = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  return (LANGS as readonly string[]).includes(seg ?? "") ? (seg as Lang) : "en";
}

export function pathForLang(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}/`;
}

type Ctx = { lang: Lang; t: Strings };
const I18nContext = createContext<Ctx>({ lang: "en", t: en });

export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [lang, t]);

  return <I18nContext.Provider value={{ lang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
