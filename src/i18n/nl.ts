import type { Strings } from "./types";

const launch = "Opent in januari 2027";

export const nl: Strings = {
  meta: {
    title: "DogMetrics — Videocoaching voor agility",
    description:
      "Online videocoaching voor agility. Cursisten uploaden hun training, coaches geven feedback op het beeld met opmerkingen, tekeningen en spraakberichten. Opent in januari 2027.",
  },
  launch,
  nav: {
    coaches: "Voor coaches",
    handlers: "Voor geleiders",
    how: "Hoe het werkt",
    pricing: "Prijzen",
    faq: "FAQ",
    apply: "Vroege toegang aanvragen",
    language: "Taal",
  },
  hero: {
    kicker: "Videocoaching voor agility",
    title: "Geef online agilityles. Feedback die je cursisten kunnen zien.",
    lead: "Je cursisten uploaden hun training. Jij krijgt de pogingen die ertoe doen, geen uur ruw beeldmateriaal, en antwoordt direct op het beeld: opmerkingen, tekeningen en spraakberichten die ze voor de volgende training kunnen terugkijken.",
    coach: "Ik ben coach",
    handler: "Ik ben geleider",
    note: `${launch}. Vroege toegang staat nu open voor een kleine groep coaches en hun cursisten.`,
    imgAlt:
      "Coachreview in DogMetrics: pijlen en cirkels op het videobeeld, opmerkingen met tijdcode en een ingesproken spraakbericht",
    tagTitle: "Feedback op 0:39.8",
    tagSub: "Tekening + spraakbericht",
  },
  coaches: {
    kicker: "Voor coaches",
    title: "Al je online lessen op één plek.",
    lead: "Ontwikkeld met coaches die agility via video lesgeven: minder tijd zoeken naar het juiste moment, meer tijd voor de feedback zelf.",
    flowLabel: "Coachingflow",
    flow: ["Les", "Cursist uploadt", "Jij reviewt", "Cursist verbetert"],
    points: [
      {
        title: "Cursussen en lessen",
        body: "Orden je online lessen in cursussen, blokken en lessen, en schrijf elke cursist in voor de editie waaraan die deelneemt.",
      },
      {
        title: "Alleen de pogingen die ertoe doen",
        body: "Cursisten uploaden een sessie vanuit de les en markeren hun pogingen. Jij bekijkt een korte recap in plaats van een lange opname.",
      },
      {
        title: "Feedback op het beeld",
        body: "Opmerkingen met tijdcode, tekeningen op het beeld, afbeeldingen en spraakberichten, allemaal op het juiste moment.",
      },
      {
        title: "Weet wat is overgekomen",
        body: "Cursisten markeren elke feedback als begrepen, zodat je ziet wat nog openstaat voor de volgende les.",
      },
      { title: "Cursisten krijgen een melding", body: "Cursisten die dat willen, krijgen een e-mail zodra je review klaar is." },
      { title: "In hun eigen taal", body: "De app werkt in het Engels, Nederlands, Duits, Tsjechisch, Spaans en Frans." },
    ],
    imgAlt: "Cursuseditor in DogMetrics: blokken en lessen, instructies, demonstratievideo en parcoursplan",
  },
  handlers: {
    kicker: "Voor geleiders",
    title: "Haal meer uit elke trainingsvideo.",
    withCoachTitle: "Train je bij een coach die DogMetrics gebruikt?",
    withCoachBody:
      "Je coach nodigt je uit voor de cursus. Upload je sessies vanuit elke les, stuur ze ter review en krijg feedback direct op je video.",
    ownTitle: "Train je op eigen houtje?",
    ownIntro: "Met het Geleider-abonnement kun je:",
    ownList: [
      "Sessies uploaden en een geschiedenis per hond en datum bijhouden",
      "Pogingen en sleutelmomenten markeren: start, einde, contacten",
      "Een korte recap maken van de pogingen die ertoe doen",
      "Die delen met wie je ook coacht",
    ],
    imgAlt:
      "Een loopplankcontact markeren in DogMetrics: pootpositie, contactresultaat en positie van de geleider, met de pogingen op de tijdlijn",
  },
  fast: {
    kicker: "Trainen gaat snel",
    title: "Reviewen hoeft niet traag te zijn.",
    lead: "Een sessie zit vol pogingen, beslissingen en kleine details, maar terugkijken betekent meestal door één lange opname scrollen. DogMetrics maakt van dat beeldmateriaal een sessie waar je echt doorheen kunt.",
    rawCaption: "Ruwe opname",
    rawAlt: "Ruw trainingsbeeld van een hond op de A-schutting",
    structuredCaption: "Gestructureerde sessie",
    structuredAlt: "Een sessie in DogMetrics, met pogingen op de tijdlijn en een contact dat wordt gelabeld",
  },
  how: {
    kicker: "Hoe het werkt",
    title: "Van één opname naar een bruikbare review.",
    enlarge: "Vergroten",
    steps: [
      {
        title: "Opnemen of uploaden",
        body: "Film met je telefoon of de camera die je al gebruikt en upload de sessie naar DogMetrics.",
        alt: "Ruw trainingsbeeld van een hond op de A-schutting",
      },
      {
        title: "Pogingen vinden en bekijken",
        body: "Doorloop de tijdlijn beeld voor beeld en spring meteen naar de delen van de sessie die ertoe doen.",
        alt: "Speler met bediening per beeld en de pogingen op de recaptijdlijn",
      },
      {
        title: "Markeer wat telt",
        body: "Markeer start en einde van pogingen en contactzone-aanrakingen terwijl je kijkt. Geen apart notitieboekje.",
        alt: "Een zone-aanraking labelen: pootpositie, contactresultaat, kant en diepte van de geleider",
      },
      {
        title: "Maak de recap",
        body: "Maak van een gemarkeerde sessie een korte recap om terug te kijken of aan je coach te geven.",
        alt: "Een recap van 13 pogingen met de spraakcommando's en zone-aanrakingen",
      },
      {
        title: "Bewaar de geschiedenis",
        body: "Elke sessie blijft in je bibliotheek, per hond en per datum, training en wedstrijd.",
        alt: "Sessiebibliotheek met trainingen, wedstrijden en gedeelde sessies, filters en recaplabels",
      },
    ],
  },
  progress: {
    kicker: "Vooruitgang",
    statA: "Een video verdwijnt in je fotorol. ",
    statBold: "Een DogMetrics-sessie wordt trainingsgeschiedenis",
    statC: ": je haalt ze terug en vergelijkt ze met de volgende.",
    lead: "Synchroniseer twee pogingen op hetzelfde toestel en speel ze naast elkaar af, zodat een verandering in handling of contactgedrag makkelijk te zien is in plaats van makkelijk te vergeten.",
    imgAlt: "Twee pogingen op de A-schutting naast elkaar, gesynchroniseerd op de zone-aanraking",
  },
  pricing: {
    kicker: "Prijzen",
    title: "Eenvoudige maandabonnementen",
    note: `${launch}. Prijzen per maand, exclusief btw; ze kunnen tijdens de vroege toegang nog wijzigen.`,
    coachesGroup: "Voor coaches",
    handlersGroup: "Voor geleiders",
    perMonth: "/ maand",
    starter: { name: "Coach Start", price: "€ 30", body: "Inclusief 2 cursisten. Een laagdrempelige manier om DogMetrics met je eigen lessen te proberen." },
    coach: { name: "Coach", price: "€ 50", body: "Inclusief tot 15 cursisten. Voor coaches met regelmatige online lessen." },
    extra: { name: "Extra cursisten", price: "+€ 20", body: "Voeg 10 cursisten toe aan je Coach-abonnement, zo vaak als nodig." },
    handler: {
      name: "Geleider",
      price: "€ 15",
      body: "Voor geleiders die zelfstandig trainen: sessies uploaden, pogingen markeren, recaps maken en je geschiedenis bewaren.",
    },
    student: { name: "Cursist van een coach", price: "Inbegrepen", body: "Gebruikt je coach DogMetrics, dan zit jouw plek in zijn of haar abonnement." },
  },
  cta: {
    title: "Train. Review. Leer. Herhaal.",
    lead: `${launch}. We nodigen een kleine groep coaches, en de geleiders die zij trainen, uit om vroeg te starten en mee te bepalen wat er komt.`,
    consent: "Door contact met ons op te nemen ga je ermee akkoord dat we je gegevens gebruiken om te antwoorden. Zie het",
    privacy: "Privacybeleid",
    emailIntro: "Liever e-mail? Schrijf naar",
  },
  faq: {
    kicker: "FAQ",
    items: [
      {
        q: "Wanneer kan ik beginnen?",
        a: `${launch}. Tot dan werken we met een kleine groep coaches en hun cursisten. Wil je vroeger instappen, vraag het dan hieronder aan.`,
      },
      { q: "Heb ik speciale camera's nodig?", a: "Nee. Een telefoon op een statief is genoeg om een training op te nemen." },
      {
        q: "Moeten mijn cursisten betalen?",
        a: "Nee. Cursisten van een coach zitten in het abonnement van de coach. Geleiders die zelfstandig trainen gebruiken het Geleider-abonnement.",
      },
      { q: "In welke talen is het beschikbaar?", a: "Engels, Nederlands, Duits, Tsjechisch, Spaans en Frans." },
      { q: "Is mijn video privé?", a: "Ja. Jij bepaalt wie je sessies kan zien. Meer details vind je in het privacybeleid." },
    ],
  },
  footer: { privacy: "Privacybeleid" },
  lightboxAlt: "Vergrote schermafbeelding",
};
