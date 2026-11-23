import type { Strings } from "./types";

const launch = "Ouverture en janvier 2027";

export const fr: Strings = {
  meta: {
    title: "DogMetrics — Coaching vidéo pour l'agility",
    description:
      "Coaching vidéo en ligne pour l'agility. Les élèves envoient leurs entraînements, le coach donne ses retours sur l'image avec commentaires, dessins et notes vocales. Ouverture en janvier 2027.",
  },
  launch,
  nav: {
    coaches: "Pour les coachs",
    handlers: "Pour les conducteurs",
    how: "Fonctionnement",
    pricing: "Tarifs",
    faq: "FAQ",
    apply: "Demander un accès anticipé",
    language: "Langue",
  },
  hero: {
    kicker: "Coaching vidéo pour l'agility",
    title: "Coachez l'agility en ligne. Des retours que vos élèves voient.",
    lead: "Vos élèves envoient leur entraînement. Vous recevez les tentatives qui comptent, pas une heure de vidéo brute, et vous répondez directement sur l'image : commentaires, dessins et notes vocales qu'ils peuvent revoir avant la prochaine séance.",
    coach: "Je suis coach",
    handler: "Je suis conducteur",
    note: `${launch}. L'accès anticipé est ouvert dès maintenant à un petit groupe de coachs et à leurs élèves.`,
    imgAlt:
      "Revue du coach dans DogMetrics : flèches et cercles dessinés sur l'image, commentaires horodatés et note vocale enregistrée",
    tagTitle: "Retour à 0:39.8",
    tagSub: "Dessin + note vocale",
  },
  coaches: {
    kicker: "Pour les coachs",
    title: "Tous vos cours en ligne au même endroit.",
    lead: "Conçu avec des coachs qui enseignent l'agility par vidéo : moins de temps à chercher le bon moment, plus de temps pour le retour lui-même.",
    flowLabel: "Déroulement du coaching",
    flow: ["Leçon", "L'élève envoie", "Vous commentez", "L'élève progresse"],
    points: [
      {
        title: "Cours et leçons",
        body: "Organisez vos cours en ligne en cours, blocs et leçons, et inscrivez chaque élève à l'édition qu'il a rejointe.",
      },
      {
        title: "Seulement les tentatives qui comptent",
        body: "Les élèves envoient une séance depuis la leçon et marquent leurs tentatives. Vous regardez un récap court au lieu de parcourir un long enregistrement.",
      },
      {
        title: "Des retours sur l'image",
        body: "Commentaires horodatés, dessins sur l'image, images et notes vocales, chacun au moment précis.",
      },
      {
        title: "Savoir ce qui est compris",
        body: "Les élèves marquent chaque retour comme compris : vous voyez ce qui reste ouvert avant le prochain cours.",
      },
      { title: "Élèves prévenus", body: "Les élèves qui l'activent reçoivent un e-mail dès que votre revue est prête." },
      { title: "Dans leur langue", body: "L'application existe en anglais, néerlandais, allemand, tchèque, espagnol et français." },
    ],
    imgAlt: "Éditeur de cours dans DogMetrics : blocs et leçons, consignes, vidéo de démonstration et plan du parcours",
  },
  handlers: {
    kicker: "Pour les conducteurs",
    title: "Tirez davantage de chaque vidéo d'entraînement.",
    withCoachTitle: "Vous vous entraînez avec un coach qui utilise DogMetrics ?",
    withCoachBody:
      "Votre coach vous invite à son cours. Envoyez vos séances depuis chaque leçon, soumettez-les pour revue et recevez les retours directement sur votre vidéo.",
    ownTitle: "Vous vous entraînez seul ?",
    ownIntro: "Avec la formule Conducteur, vous pouvez :",
    ownList: [
      "Importer vos séances et garder un historique par chien et par date",
      "Marquer les tentatives et les moments clés : départs, fins, contacts",
      "Créer un récap court des tentatives qui comptent",
      "Le partager avec la personne qui vous coache",
    ],
    imgAlt:
      "Marquer un contact à la passerelle dans DogMetrics : position des pattes, résultat du contact et position du conducteur, avec les tentatives sur la timeline",
  },
  fast: {
    kicker: "L'entraînement va vite",
    title: "La revue devrait suivre.",
    lead: "Une séance est pleine de tentatives, de décisions et de petits détails, mais la revoir signifie souvent parcourir un long enregistrement. DogMetrics transforme cette vidéo en une séance dans laquelle on se déplace vraiment.",
    rawCaption: "Enregistrement brut",
    rawAlt: "Vidéo brute d'un chien sur la palissade",
    structuredCaption: "Séance structurée",
    structuredAlt: "Une séance dans DogMetrics, avec les tentatives sur la timeline et un contact en cours d'annotation",
  },
  how: {
    kicker: "Fonctionnement",
    title: "D'un enregistrement à une revue utile.",
    enlarge: "Agrandir",
    steps: [
      {
        title: "Filmer ou importer",
        body: "Filmez avec votre téléphone ou la caméra que vous utilisez déjà, puis importez la séance dans DogMetrics.",
        alt: "Vidéo brute d'un chien sur la palissade",
      },
      {
        title: "Trouver et revoir les tentatives",
        body: "Parcourez la timeline image par image et allez directement aux moments de la séance qui comptent.",
        alt: "Lecteur avec contrôles image par image et les tentatives sur la timeline du récap",
      },
      {
        title: "Marquer l'essentiel",
        body: "Marquez les départs, les fins de tentative et les touches de zone de contact pendant la lecture. Sans carnet à part.",
        alt: "Annoter une touche de zone : position des pattes, résultat du contact, côté et profondeur du conducteur",
      },
      {
        title: "Créer le récap",
        body: "Transformez une séance annotée en un récap court à revoir ou à transmettre à votre coach.",
        alt: "Un récap de 13 tentatives avec les ordres vocaux et les touches de zone",
      },
      {
        title: "Garder l'historique",
        body: "Chaque séance reste dans votre bibliothèque, par chien et par date, entraînement comme concours.",
        alt: "Bibliothèque de séances avec entraînements, concours et séances partagées, filtres et badges de récap",
      },
    ],
  },
  progress: {
    kicker: "Progrès",
    statA: "Une vidéo se perd dans la galerie du téléphone. ",
    statBold: "Une séance DogMetrics devient un historique d'entraînement",
    statC: " : vous pouvez la retrouver et la comparer à la suivante.",
    lead: "Synchronisez deux tentatives sur le même obstacle et regardez-les côte à côte : un changement de conduite ou de contact devient facile à voir plutôt que facile à oublier.",
    imgAlt: "Deux tentatives à la palissade côte à côte, synchronisées sur la touche de zone",
  },
  pricing: {
    kicker: "Tarifs",
    title: "Des formules mensuelles simples",
    note: `${launch}. Prix mensuels hors TVA, susceptibles d'évoluer pendant l'accès anticipé.`,
    coachesGroup: "Pour les coachs",
    handlersGroup: "Pour les conducteurs",
    perMonth: "/ mois",
    starter: { name: "Coach Départ", price: "30 €", body: "2 élèves inclus. Une façon sans risque d'essayer DogMetrics avec vos propres cours." },
    coach: { name: "Coach", price: "50 €", body: "Jusqu'à 15 élèves inclus. Pour les coachs qui donnent des cours en ligne réguliers." },
    extra: { name: "Élèves supplémentaires", price: "+20 €", body: "Ajoutez 10 élèves à votre formule Coach, autant de fois que nécessaire." },
    handler: {
      name: "Conducteur",
      price: "15 €",
      body: "Pour les conducteurs qui s'entraînent seuls : importer des séances, marquer les tentatives, créer des récaps et garder votre historique.",
    },
    student: { name: "Élève d'un coach", price: "Inclus", body: "Si votre coach utilise DogMetrics, votre place est comprise dans sa formule." },
  },
  cta: {
    title: "S'entraîner. Revoir. Apprendre. Recommencer.",
    lead: `${launch}. Nous invitons un petit groupe de coachs, et les conducteurs qu'ils entraînent, à commencer plus tôt et à orienter la suite.`,
    consent: "En nous contactant, vous acceptez que nous utilisions vos données pour vous répondre. Voir la",
    privacy: "Politique de confidentialité",
    emailIntro: "Vous préférez l'e-mail ? Écrivez à",
  },
  faq: {
    kicker: "FAQ",
    items: [
      {
        q: "Quand puis-je commencer ?",
        a: `${launch}. D'ici là, nous travaillons avec un petit groupe de coachs et leurs élèves. Pour démarrer plus tôt, faites une demande ci-dessous.`,
      },
      { q: "Faut-il des caméras spéciales ?", a: "Non. Un téléphone sur un trépied suffit pour filmer une séance." },
      {
        q: "Mes élèves doivent-ils payer ?",
        a: "Non. Les élèves d'un coach sont inclus dans sa formule. Les conducteurs qui s'entraînent seuls utilisent la formule Conducteur.",
      },
      { q: "Quelles langues sont disponibles ?", a: "Anglais, néerlandais, allemand, tchèque, espagnol et français." },
      { q: "Mes vidéos sont-elles privées ?", a: "Oui. Vous décidez qui peut voir vos séances. Les détails sont dans la politique de confidentialité." },
    ],
  },
  footer: { privacy: "Politique de confidentialité" },
  lightboxAlt: "Capture agrandie",
};
