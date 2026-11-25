import type { Strings } from "./types";

const launch = "Spouštíme v lednu 2027";

export const cs: Strings = {
  meta: {
    title: "DogMetrics — Videokoučink pro agility",
    description:
      "Online videokoučink pro agility. Studenti nahrávají své tréninky, trenér dává zpětnou vazbu přímo do obrazu pomocí komentářů, kreslení a hlasových poznámek. Spouštíme v lednu 2027.",
  },
  launch,
  nav: {
    coaches: "Pro trenéry",
    handlers: "Pro psovody",
    how: "Jak to funguje",
    pricing: "Ceník",
    faq: "Časté dotazy",
    apply: "Požádat o předběžný přístup",
    language: "Jazyk",
  },
  hero: {
    kicker: "Videokoučink pro agility",
    title: "Trénujte agility online. Zpětná vazba, kterou studenti uvidí.",
    lead: "Vaši studenti nahrají svůj trénink. Vy dostanete pokusy, na kterých záleží, ne hodinu surového videa, a odpovídáte přímo v obraze: komentáři, kreslením a hlasovými poznámkami, ke kterým se mohou před dalším tréninkem vrátit.",
    coach: "Jsem trenér",
    handler: "Jsem psovod",
    note: `${launch}. Předběžný přístup je nyní otevřený pro malou skupinu trenérů a jejich studentů.`,
    imgAlt:
      "Hodnocení trenéra v DogMetrics: šipky a kruhy nakreslené do videa, komentáře s časovou značkou a nahraná hlasová poznámka",
    tagTitle: "Zpětná vazba v 0:39.8",
    tagSub: "Kresba + hlasová poznámka",
  },
  coaches: {
    kicker: "Pro trenéry",
    title: "Všechny vaše online lekce na jednom místě.",
    lead: "Vyvinuto s trenéry, kteří učí agility přes video: méně času hledáním správného okamžiku, více času na samotnou zpětnou vazbu.",
    flowLabel: "Průběh koučinku",
    flow: ["Lekce", "Student nahraje", "Vy zhodnotíte", "Student se zlepší"],
    points: [
      {
        title: "Kurzy a lekce",
        body: "Uspořádejte online výuku do kurzů, bloků a lekcí a zapište každého studenta do běhu, ke kterému se přihlásil.",
      },
      {
        title: "Jen pokusy, na kterých záleží",
        body: "Studenti nahrají trénink z lekce a označí své pokusy. Vy si prohlédnete krátký sestřih místo dlouhého záznamu.",
      },
      {
        title: "Zpětná vazba přímo v obraze",
        body: "Komentáře s časovou značkou, kreslení do obrazu, obrázky a hlasové poznámky, vše v přesném okamžiku.",
      },
      {
        title: "Víte, co student pochopil",
        body: "Studenti označí každou zpětnou vazbu jako pochopenou, takže před další lekcí vidíte, co zůstává otevřené.",
      },
      { title: "Upozornění pro studenty", body: "Studenti, kteří si to zapnou, dostanou e-mail, jakmile je vaše hodnocení hotové." },
      { title: "V jejich jazyce", body: "Aplikace funguje v angličtině, nizozemštině, němčině, češtině, španělštině a francouzštině." },
    ],
    imgAlt: "Editor kurzu v DogMetrics: bloky a lekce, pokyny k lekci, ukázkové video a plánek parkuru",
  },
  handlers: {
    kicker: "Pro psovody",
    title: "Vytěžte víc z každého tréninkového videa.",
    withCoachTitle: "Trénujete u trenéra, který používá DogMetrics?",
    withCoachBody:
      "Trenér vás pozve do svého kurzu. Nahrávejte tréninky z jednotlivých lekcí, posílejte je k hodnocení a dostávejte zpětnou vazbu přímo ve svém videu.",
    ownTitle: "Trénujete sami?",
    ownIntro: "S tarifem Psovod můžete:",
    ownList: [
      "Nahrávat tréninky a mít historii podle psa a data",
      "Označovat pokusy a klíčové okamžiky: start, konec, zóny",
      "Vytvořit krátký sestřih pokusů, na kterých záleží",
      "Sdílet ho s kýmkoli, kdo vás trénuje",
    ],
    imgAlt:
      "Označení zóny na lávce v DogMetrics: poloha tlapek, výsledek zóny a pozice psovoda, s pokusy na časové ose",
  },
  fast: {
    kicker: "Trénink je rychlý",
    title: "Hodnocení by mělo být taky.",
    lead: "Trénink je plný pokusů, rozhodnutí a drobných detailů, ale jeho rozbor obvykle znamená procházet jeden dlouhý záznam. DogMetrics z něj udělá trénink, ve kterém se opravdu vyznáte.",
    rawCaption: "Surový záznam",
    rawAlt: "Surové video psa na áčku",
    structuredCaption: "Strukturovaný trénink",
    structuredAlt: "Trénink v DogMetrics s pokusy na časové ose a označovanou zónou",
  },
  how: {
    kicker: "Jak to funguje",
    title: "Od jednoho záznamu k užitečnému rozboru.",
    enlarge: "Zvětšit",
    steps: [
      {
        title: "Natočte nebo nahrajte",
        body: "Natočte trénink telefonem nebo kamerou, kterou už máte, a nahrajte ho do DogMetrics.",
        alt: "Surové video psa na áčku",
      },
      {
        title: "Najděte a projděte pokusy",
        body: "Procházejte časovou osu snímek po snímku a skočte rovnou na části tréninku, na kterých záleží.",
        alt: "Přehrávač s ovládáním po snímcích a pokusy na časové ose sestřihu",
      },
      {
        title: "Označte, co je důležité",
        body: "Při sledování označte začátek a konec pokusů i dotyky kontaktních zón. Bez zvláštního sešitu.",
        alt: "Označení dotyku zóny: poloha tlapek, výsledek zóny, strana a hloubka psovoda",
      },
      {
        title: "Vytvořte sestřih",
        body: "Z označeného tréninku udělejte krátký sestřih, ke kterému se vrátíte nebo ho pošlete trenérovi.",
        alt: "Sestřih 13 pokusů s hlasovými povely a dotyky zóny",
      },
      {
        title: "Uchovejte historii",
        body: "Každý trénink zůstane ve vaší knihovně, podle psa a data, tréninky i závody.",
        alt: "Knihovna tréninků s tréninky, závody a sdílenými záznamy, filtry a označením sestřihu",
      },
    ],
  },
  progress: {
    kicker: "Pokrok",
    statA: "Video se ztratí v galerii telefonu. ",
    statBold: "Trénink v DogMetrics se stane tréninkovou historií",
    statC: ", kterou si můžete znovu otevřít a porovnat s dalším.",
    lead: "Synchronizujte dva pokusy na stejné překážce a pusťte si je vedle sebe. Změna ve vedení nebo v zónách je pak snadno vidět, místo aby se snadno zapomněla.",
    imgAlt: "Dva pokusy na áčku vedle sebe, synchronizované na dotyk zóny",
  },
  pricing: {
    kicker: "Ceník",
    title: "Jednoduché měsíční tarify",
    note: `${launch}. Ceny jsou měsíční bez DPH a během předběžného přístupu se ještě mohou změnit.`,
    coachesGroup: "Pro trenéry",
    handlersGroup: "Pro psovody",
    perMonth: "/ měsíc",
    starter: { name: "Trenér Start", price: "30 €", body: "Zahrnuje 2 studenty. Nenáročný způsob, jak vyzkoušet DogMetrics s vlastními lekcemi." },
    coach: { name: "Trenér", price: "50 €", body: "Zahrnuje až 15 studentů. Pro trenéry s pravidelnou online výukou." },
    extra: { name: "Další studenti", price: "+20 €", body: "Přidejte 10 dalších studentů k tarifu Trenér, kolikrát potřebujete." },
    handler: {
      name: "Psovod",
      price: "15 €",
      body: "Pro psovody, kteří trénují sami: nahrávání tréninků, označování pokusů, sestřihy a vlastní historie.",
    },
    student: { name: "Student trenéra", price: "V ceně", body: "Pokud váš trenér používá DogMetrics, vaše místo je součástí jeho tarifu." },
  },
  cta: {
    title: "Trénujte. Hodnoťte. Učte se. Opakujte.",
    lead: `${launch}. Zveme malou skupinu trenérů a psovodů, které trénují, aby začali dřív a pomohli nám určit, co přijde dál.`,
    consent: "Kontaktováním souhlasíte s tím, že vaše údaje použijeme k odpovědi. Viz",
    privacy: "Zásady ochrany osobních údajů",
    emailIntro: "Raději e-mail? Napište na",
  },
  faq: {
    kicker: "Časté dotazy",
    items: [
      {
        q: "Kdy mohu začít?",
        a: `${launch}. Do té doby pracujeme s malou skupinou trenérů a jejich studentů. Pokud chcete začít dřív, požádejte níže.`,
      },
      { q: "Potřebuji speciální kamery?", a: "Ne. K natočení tréninku stačí telefon na stativu." },
      {
        q: "Musí moji studenti platit?",
        a: "Ne. Studenti trenéra jsou zahrnuti v jeho tarifu. Psovodi, kteří trénují sami, používají tarif Psovod.",
      },
      { q: "V jakých jazycích je k dispozici?", a: "V angličtině, nizozemštině, němčině, češtině, španělštině a francouzštině." },
      { q: "Jsou moje videa soukromá?", a: "Ano. Sami rozhodujete, kdo vaše tréninky uvidí. Podrobnosti najdete v zásadách ochrany osobních údajů." },
    ],
  },
  footer: { privacy: "Zásady ochrany osobních údajů" },
  lightboxAlt: "Zvětšený snímek obrazovky",
};
