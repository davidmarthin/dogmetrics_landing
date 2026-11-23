import type { Strings } from "./types";

const launch = "Start im Januar 2027";

export const de: Strings = {
  meta: {
    title: "DogMetrics — Videocoaching für Agility",
    description:
      "Online-Videocoaching für Agility. Schüler laden ihr Training hoch, Trainer geben Feedback direkt im Bild mit Kommentaren, Zeichnungen und Sprachnotizen. Start im Januar 2027.",
  },
  launch,
  nav: {
    coaches: "Für Trainer",
    handlers: "Für Hundeführer",
    how: "So funktioniert's",
    pricing: "Preise",
    faq: "FAQ",
    apply: "Frühen Zugang anfragen",
    language: "Sprache",
  },
  hero: {
    kicker: "Videocoaching für Agility",
    title: "Agility online unterrichten. Feedback, das deine Schüler sehen.",
    lead: "Deine Schüler laden ihr Training hoch. Du bekommst die Versuche, auf die es ankommt, statt einer Stunde Rohmaterial, und antwortest direkt im Bild: Kommentare, Zeichnungen und Sprachnotizen, die sie vor dem nächsten Training noch einmal ansehen können.",
    coach: "Ich bin Trainer",
    handler: "Ich bin Hundeführer",
    note: `${launch}. Der frühe Zugang ist jetzt für eine kleine Gruppe von Trainern und ihre Schüler geöffnet.`,
    imgAlt:
      "Trainer-Review in DogMetrics: Pfeile und Kreise im Videobild, Kommentare mit Zeitstempel und eine aufgenommene Sprachnotiz",
    tagTitle: "Feedback bei 0:39.8",
    tagSub: "Zeichnung + Sprachnotiz",
  },
  coaches: {
    kicker: "Für Trainer",
    title: "Dein Online-Unterricht an einem Ort.",
    lead: "Gemeinsam mit Trainern entwickelt, die Agility per Video unterrichten: weniger Zeit mit der Suche nach dem richtigen Moment, mehr Zeit für das Feedback selbst.",
    flowLabel: "Coaching-Ablauf",
    flow: ["Lektion", "Schüler lädt hoch", "Du gibst Feedback", "Schüler wird besser"],
    points: [
      {
        title: "Kurse und Lektionen",
        body: "Organisiere deinen Online-Unterricht in Kursen, Blöcken und Lektionen und schreibe jeden Schüler in seinen Durchgang ein.",
      },
      {
        title: "Nur die Versuche, die zählen",
        body: "Schüler laden eine Session aus der Lektion hoch und markieren ihre Versuche. Du siehst einen kurzen Zusammenschnitt statt einer langen Aufnahme.",
      },
      {
        title: "Feedback direkt im Bild",
        body: "Kommentare mit Zeitstempel, Zeichnungen im Bild, Bilder und Sprachnotizen, jeweils am genauen Moment.",
      },
      {
        title: "Wissen, was angekommen ist",
        body: "Schüler markieren jedes Feedback als verstanden. So siehst du vor der nächsten Stunde, was noch offen ist.",
      },
      { title: "Schüler werden benachrichtigt", body: "Schüler, die es aktivieren, bekommen eine E-Mail, sobald dein Review fertig ist." },
      { title: "In ihrer Sprache", body: "Die App gibt es auf Englisch, Niederländisch, Deutsch, Tschechisch, Spanisch und Französisch." },
    ],
    imgAlt: "Kurseditor in DogMetrics: Blöcke und Lektionen, Anweisungen, Demovideo und Parcoursplan",
  },
  handlers: {
    kicker: "Für Hundeführer",
    title: "Hol mehr aus jedem Trainingsvideo heraus.",
    withCoachTitle: "Du trainierst bei einem Trainer mit DogMetrics?",
    withCoachBody:
      "Dein Trainer lädt dich in seinen Kurs ein. Lade deine Sessions aus jeder Lektion hoch, schick sie zum Review und bekomme Feedback direkt auf deinem Video.",
    ownTitle: "Du trainierst allein?",
    ownIntro: "Mit dem Hundeführer-Tarif kannst du:",
    ownList: [
      "Sessions hochladen und einen Verlauf nach Hund und Datum führen",
      "Versuche und Schlüsselmomente markieren: Start, Ende, Kontakte",
      "Einen kurzen Zusammenschnitt der wichtigen Versuche erstellen",
      "Ihn mit jedem teilen, der dich trainiert",
    ],
    imgAlt:
      "Einen Stegkontakt in DogMetrics markieren: Pfotenposition, Kontaktergebnis und Position des Hundeführers, mit den Versuchen auf der Zeitleiste",
  },
  fast: {
    kicker: "Training geht schnell",
    title: "Das Review sollte es auch.",
    lead: "Eine Session steckt voller Versuche, Entscheidungen und kleiner Details, aber sie anzusehen heißt meist, sich durch eine lange Aufnahme zu klicken. DogMetrics macht daraus eine Session, in der du dich wirklich zurechtfindest.",
    rawCaption: "Rohaufnahme",
    rawAlt: "Rohes Trainingsvideo eines Hundes auf der A-Wand",
    structuredCaption: "Strukturierte Session",
    structuredAlt: "Eine Session in DogMetrics, mit Versuchen auf der Zeitleiste und einem markierten Kontakt",
  },
  how: {
    kicker: "So funktioniert's",
    title: "Von einer Aufnahme zu einem brauchbaren Review.",
    enlarge: "Vergrößern",
    steps: [
      {
        title: "Aufnehmen oder hochladen",
        body: "Filme mit deinem Handy oder der Kamera, die du schon hast, und lade die Session in DogMetrics hoch.",
        alt: "Rohes Trainingsvideo eines Hundes auf der A-Wand",
      },
      {
        title: "Versuche finden und ansehen",
        body: "Geh die Zeitleiste Bild für Bild durch und spring direkt zu den Stellen der Session, die zählen.",
        alt: "Player mit Bild-für-Bild-Steuerung und den Versuchen auf der Zeitleiste des Zusammenschnitts",
      },
      {
        title: "Markieren, was zählt",
        body: "Markiere Start und Ende der Versuche und Berührungen der Kontaktzone beim Ansehen. Ohne extra Notizbuch.",
        alt: "Eine Zonenberührung markieren: Pfotenposition, Kontaktergebnis, Seite und Tiefe des Hundeführers",
      },
      {
        title: "Den Zusammenschnitt erstellen",
        body: "Mach aus einer markierten Session einen kurzen Zusammenschnitt zum Nachschauen oder für deinen Trainer.",
        alt: "Ein Zusammenschnitt aus 13 Versuchen mit Hörzeichen und Zonenberührungen",
      },
      {
        title: "Den Verlauf behalten",
        body: "Jede Session bleibt in deiner Bibliothek, nach Hund und Datum, Training wie Turnier.",
        alt: "Session-Bibliothek mit Trainings, Turnieren und geteilten Sessions, Filtern und Kennzeichnungen",
      },
    ],
  },
  progress: {
    kicker: "Fortschritt",
    statA: "Ein Video verschwindet in der Galerie deines Handys. ",
    statBold: "Eine DogMetrics-Session wird zu deiner Trainingsgeschichte",
    statC: ": du kannst sie wieder aufrufen und mit der nächsten vergleichen.",
    lead: "Synchronisiere zwei Versuche am selben Hindernis und spiele sie nebeneinander ab. So ist eine Veränderung im Handling oder im Kontaktverhalten leicht zu sehen statt leicht zu vergessen.",
    imgAlt: "Zwei Versuche an der A-Wand nebeneinander, synchronisiert auf die Zonenberührung",
  },
  pricing: {
    kicker: "Preise",
    title: "Einfache Monatstarife",
    note: `${launch}. Preise pro Monat, zzgl. MwSt.; sie können sich während des frühen Zugangs noch ändern.`,
    coachesGroup: "Für Trainer",
    handlersGroup: "Für Hundeführer",
    perMonth: "/ Monat",
    starter: { name: "Trainer Start", price: "30 €", body: "Inklusive 2 Schüler. Ein risikoarmer Weg, DogMetrics mit deinem eigenen Unterricht auszuprobieren." },
    coach: { name: "Trainer", price: "50 €", body: "Inklusive bis zu 15 Schüler. Für Trainer mit regelmäßigem Online-Unterricht." },
    extra: { name: "Weitere Schüler", price: "+20 €", body: "10 weitere Schüler zu deinem Trainer-Tarif hinzufügen, so oft du willst." },
    handler: {
      name: "Hundeführer",
      price: "15 €",
      body: "Für Hundeführer, die allein trainieren: Sessions hochladen, Versuche markieren, Zusammenschnitte erstellen und den Verlauf behalten.",
    },
    student: { name: "Schüler eines Trainers", price: "Inklusive", body: "Wenn dein Trainer DogMetrics nutzt, ist dein Platz in seinem Tarif enthalten." },
  },
  cta: {
    title: "Trainieren. Ansehen. Lernen. Wiederholen.",
    lead: `${launch}. Wir laden eine kleine Gruppe von Trainern und die Hundeführer, die sie trainieren, ein, früher zu starten und mitzugestalten, was als Nächstes kommt.`,
    consent: "Wenn du uns kontaktierst, verwenden wir deine Angaben, um dir zu antworten. Siehe",
    privacy: "Datenschutzerklärung",
    emailIntro: "Lieber per E-Mail? Schreib an",
  },
  faq: {
    kicker: "FAQ",
    items: [
      {
        q: "Wann kann ich starten?",
        a: `${launch}. Bis dahin arbeiten wir mit einer kleinen Gruppe von Trainern und ihren Schülern. Wenn du früher einsteigen möchtest, frag unten an.`,
      },
      { q: "Brauche ich spezielle Kameras?", a: "Nein. Ein Handy auf einem Stativ reicht, um ein Training aufzunehmen." },
      {
        q: "Müssen meine Schüler zahlen?",
        a: "Nein. Schüler eines Trainers sind in dessen Tarif enthalten. Hundeführer, die allein trainieren, nutzen den Hundeführer-Tarif.",
      },
      { q: "Welche Sprachen gibt es?", a: "Englisch, Niederländisch, Deutsch, Tschechisch, Spanisch und Französisch." },
      { q: "Sind meine Videos privat?", a: "Ja. Du entscheidest, wer deine Sessions sehen kann. Details findest du in der Datenschutzerklärung." },
    ],
  },
  footer: { privacy: "Datenschutzerklärung" },
  lightboxAlt: "Vergrößerter Screenshot",
};
