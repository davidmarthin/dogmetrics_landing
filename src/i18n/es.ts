import type { Strings } from "./types";

const launch = "Apertura en enero de 2027";

export const es: Strings = {
  meta: {
    title: "DogMetrics — Coaching de agility por vídeo",
    description:
      "Coaching online de agility por vídeo. Los alumnos suben sus entrenamientos y el entrenador da feedback sobre el fotograma con comentarios, dibujos y notas de voz. Apertura en enero de 2027.",
  },
  launch,
  nav: {
    coaches: "Para entrenadores",
    handlers: "Para guías",
    how: "Cómo funciona",
    pricing: "Precios",
    faq: "Preguntas",
    apply: "Solicitar acceso anticipado",
    language: "Idioma",
  },
  hero: {
    kicker: "Coaching de agility por vídeo",
    title: "Entrena agility online. Un feedback que tus alumnos pueden ver.",
    lead: "Tus alumnos suben su entrenamiento. Tú recibes los intentos que importan, no una hora de vídeo en bruto, y respondes directamente sobre el fotograma: comentarios, dibujos y notas de voz que pueden repasar antes de la siguiente sesión.",
    coach: "Soy entrenador",
    handler: "Soy guía",
    note: `${launch}. El acceso anticipado ya está abierto para un grupo reducido de entrenadores y sus alumnos.`,
    imgAlt:
      "Revisión del entrenador en DogMetrics: flechas y círculos dibujados sobre el vídeo, comentarios con marca de tiempo y una nota de voz",
    tagTitle: "Feedback en 0:39.8",
    tagSub: "Dibujo + nota de voz",
  },
  coaches: {
    kicker: "Para entrenadores",
    title: "Todas tus clases online en un solo sitio.",
    lead: "Creado junto a entrenadores que enseñan agility por vídeo: menos tiempo buscando el momento exacto y más tiempo para el feedback.",
    flowLabel: "Flujo de coaching",
    flow: ["Lección", "El alumno sube", "Tú revisas", "El alumno mejora"],
    points: [
      {
        title: "Cursos y Lecciones",
        body: "Organiza tus clases online en Cursos, Bloques y Lecciones, e inscribe a cada alumno en la edición a la que se ha apuntado.",
      },
      {
        title: "Solo los intentos que importan",
        body: "Los alumnos suben la sesión desde la Lección y marcan sus intentos. Tú revisas un resumen corto en vez de recorrer una grabación larga.",
      },
      {
        title: "Feedback sobre el fotograma",
        body: "Comentarios con marca de tiempo, dibujos sobre el fotograma, imágenes y notas de voz, todo en el momento exacto.",
      },
      {
        title: "Sabes qué ha quedado claro",
        body: "Los alumnos marcan cada feedback como entendido, así ves qué queda pendiente antes de la siguiente clase.",
      },
      { title: "Avisos para tus alumnos", body: "Los alumnos que lo activen reciben un email cuando tu revisión está lista." },
      { title: "En su idioma", body: "La app funciona en inglés, neerlandés, alemán, checo, español y francés." },
    ],
    imgAlt: "Editor de cursos en DogMetrics: bloques y lecciones, instrucciones, vídeo de demostración y plano del recorrido",
  },
  handlers: {
    kicker: "Para guías",
    title: "Saca más partido a cada vídeo de entrenamiento.",
    withCoachTitle: "¿Entrenas con un entrenador que usa DogMetrics?",
    withCoachBody:
      "Tu entrenador te invita a su Curso. Sube tus sesiones desde cada Lección, envíalas para revisión y recibe el feedback directamente sobre tu vídeo.",
    ownTitle: "¿Entrenas por tu cuenta?",
    ownIntro: "Con el plan Guía puedes:",
    ownList: [
      "Subir sesiones y guardar el historial por perro y fecha",
      "Marcar intentos y momentos clave: inicios, finales, contactos",
      "Crear un resumen corto con los intentos que importan",
      "Compartirlo con quien te entrene",
    ],
    imgAlt:
      "Marcando un contacto en la pasarela en DogMetrics: posición de las patas, resultado del contacto y posición del guía, con los intentos en la línea de tiempo",
  },
  fast: {
    kicker: "El entrenamiento va rápido",
    title: "La revisión no debería ser lenta.",
    lead: "Una sesión está llena de intentos, decisiones y pequeños detalles, pero revisarla suele significar recorrer una grabación larga. DogMetrics convierte ese vídeo en una sesión por la que te puedes mover de verdad.",
    rawCaption: "Grabación en bruto",
    rawAlt: "Vídeo en bruto de un perro en la empalizada",
    structuredCaption: "Sesión estructurada",
    structuredAlt: "Una sesión en DogMetrics, con los intentos en la línea de tiempo y un contacto etiquetado",
  },
  how: {
    kicker: "Cómo funciona",
    title: "De una grabación a una revisión útil.",
    enlarge: "Ampliar",
    steps: [
      {
        title: "Graba o sube",
        body: "Graba con el móvil o con la cámara que ya usas y sube la sesión a DogMetrics.",
        alt: "Vídeo en bruto de un perro en la empalizada",
      },
      {
        title: "Encuentra y revisa los intentos",
        body: "Recorre la línea de tiempo fotograma a fotograma y salta directamente a las partes de la sesión que importan.",
        alt: "Reproductor con controles fotograma a fotograma y los intentos en la línea de tiempo del resumen",
      },
      {
        title: "Marca lo importante",
        body: "Señala inicios y finales de intento y toques de zona de contacto mientras miras. Sin libreta aparte.",
        alt: "Etiquetando un toque de zona: posición de las patas, resultado del contacto, lado y profundidad del guía",
      },
      {
        title: "Crea el resumen",
        body: "Convierte una sesión marcada en un resumen corto para volver a verlo o pasárselo a tu entrenador.",
        alt: "Un resumen de 13 intentos con los eventos de orden de voz y toque de zona",
      },
      {
        title: "Guarda el historial",
        body: "Cada sesión se queda en tu biblioteca, por perro y por fecha, tanto entrenamientos como competiciones.",
        alt: "Biblioteca de sesiones con entrenamientos, competiciones y sesiones compartidas, filtros y etiquetas de resumen",
      },
    ],
  },
  progress: {
    kicker: "Progreso",
    statA: "Un vídeo se pierde en la galería del móvil. ",
    statBold: "Una sesión de DogMetrics se convierte en historial de entrenamiento",
    statC: ": puedes recuperarla y compararla con la siguiente.",
    lead: "Sincroniza dos intentos en el mismo obstáculo y míralos lado a lado: un cambio en el manejo o en el contacto se ve fácil en vez de olvidarse fácil.",
    imgAlt: "Dos intentos en la empalizada comparados lado a lado, sincronizados en el toque de zona",
  },
  pricing: {
    kicker: "Precios",
    title: "Planes mensuales sencillos",
    note: `${launch}. Precios mensuales sin IVA; pueden cambiar durante el acceso anticipado.`,
    coachesGroup: "Para entrenadores",
    handlersGroup: "Para guías",
    perMonth: "/ mes",
    starter: { name: "Entrenador Inicio", price: "30 €", body: "Incluye 2 alumnos. Una forma sin riesgo de probar DogMetrics con tus clases." },
    coach: { name: "Entrenador", price: "50 €", body: "Incluye hasta 15 alumnos. Para entrenadores con clases online regulares." },
    extra: { name: "Alumnos extra", price: "+20 €", body: "Añade 10 alumnos más a tu plan Entrenador, tantas veces como necesites." },
    handler: {
      name: "Guía",
      price: "15 €",
      body: "Para guías que entrenan por su cuenta: sube sesiones, marca intentos, crea resúmenes y guarda tu historial.",
    },
    student: { name: "Alumno de un entrenador", price: "Incluido", body: "Si tu entrenador usa DogMetrics, tu plaza está incluida en su plan." },
  },
  cta: {
    title: "Entrena. Revisa. Aprende. Repite.",
    lead: `${launch}. Invitamos a un grupo reducido de entrenadores, y a los guías que entrenan, a empezar antes y ayudarnos a decidir lo que viene.`,
    consent: "Al contactar con nosotros aceptas que usemos tus datos para responderte. Consulta la",
    privacy: "Política de privacidad",
    emailIntro: "¿Prefieres email? Escribe a",
  },
  faq: {
    kicker: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuándo puedo empezar?",
        a: `${launch}. Hasta entonces trabajamos con un grupo reducido de entrenadores y sus alumnos. Si quieres entrar antes, solicítalo más abajo.`,
      },
      { q: "¿Necesito cámaras especiales?", a: "No. Con un móvil en un trípode basta para grabar una sesión." },
      {
        q: "¿Mis alumnos tienen que pagar?",
        a: "No. Los alumnos de un entrenador están incluidos en su plan. Los guías que entrenan por su cuenta usan el plan Guía.",
      },
      { q: "¿En qué idiomas está?", a: "Inglés, neerlandés, alemán, checo, español y francés." },
      { q: "¿Mis vídeos son privados?", a: "Sí. Tú decides quién puede ver tus sesiones. Encontrarás los detalles en la Política de privacidad." },
    ],
  },
  footer: { privacy: "Política de privacidad" },
  lightboxAlt: "Captura ampliada",
};
