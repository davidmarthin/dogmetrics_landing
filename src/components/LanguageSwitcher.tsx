import { LANGS, LANG_NAMES, pathForLang, useI18n, type Lang } from "../i18n";

export function LanguageSwitcher() {
  const { lang, t } = useI18n();

  function onChange(next: Lang) {
    window.location.assign(pathForLang(next) + window.location.hash);
  }

  return (
    <label className="langSwitch">
      <span className="srOnly">{t.nav.language}</span>
      <select id="lang-switch" value={lang} onChange={(e) => onChange(e.target.value as Lang)}>
        {LANGS.map((l) => (
          <option key={l} value={l}>
            {l.toUpperCase()} · {LANG_NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
