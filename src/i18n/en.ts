import type { Strings } from "./types";

const launch = "Opening January 2027";

export const en: Strings = {
  meta: {
    title: "DogMetrics — Video coaching for dog agility",
    description:
      "Online video coaching for dog agility. Students upload their training, coaches give feedback on the frame with comments, drawings and voice notes. Opening January 2027.",
  },
  launch,
  nav: {
    coaches: "For coaches",
    handlers: "For handlers",
    how: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    apply: "Apply for early access",
    language: "Language",
  },
  hero: {
    kicker: "Video coaching for dog agility",
    title: "Coach agility online. Feedback your students can see.",
    lead: "Your students upload their training. You get the attempts that matter, not an hour of raw video, and answer right on the frame: comments, drawings and voice notes they can come back to before the next session.",
    coach: "I'm a coach",
    handler: "I'm a handler",
    note: `${launch}. Early access is open now for a small group of coaches and their students.`,
    imgAlt:
      "Coach review in DogMetrics: arrows and circles drawn on the video frame, timestamped comments and a recorded voice note",
    tagTitle: "Feedback at 0:39.8",
    tagSub: "Drawing + voice note",
  },
  coaches: {
    kicker: "For coaches",
    title: "Run your online classes in one place.",
    lead: "Built with coaches who teach agility through video: less time finding the right moment, more time on the feedback itself.",
    flowLabel: "Coaching workflow",
    flow: ["Lesson", "Student uploads", "You review", "Student improves"],
    points: [
      {
        title: "Courses and Lessons",
        body: "Organise your online classes into Courses, Blocks and Lessons, and enrol each student in the edition they joined.",
      },
      {
        title: "Only the attempts that matter",
        body: "Students upload a session from the Lesson and mark their attempts. You review a short recap instead of scrubbing a long recording.",
      },
      {
        title: "Feedback on the frame",
        body: "Timestamped comments, drawings on the frame, images and voice notes, all attached to the exact moment.",
      },
      {
        title: "Know what landed",
        body: "Students mark each piece of feedback as understood, so you can see what is still open before the next class.",
      },
      { title: "Students get notified", body: "Students who opt in get an email when your review is ready." },
      { title: "In their language", body: "The app works in English, Dutch, German, Czech, Spanish and French." },
    ],
    imgAlt: "Course editor in DogMetrics: blocks and lessons, lesson instructions, demonstration video and course map",
  },
  handlers: {
    kicker: "For handlers",
    title: "Get more out of every training video.",
    withCoachTitle: "Training with a DogMetrics coach?",
    withCoachBody:
      "Your coach invites you to their Course. Upload your sessions from each Lesson, send them for review and get feedback right on your video.",
    ownTitle: "Training on your own?",
    ownIntro: "With the Handler plan you can:",
    ownList: [
      "Upload sessions and keep a history by dog and date",
      "Mark attempts and key moments: starts, ends, contacts",
      "Build a short recap of the attempts that matter",
      "Share it with anyone who coaches you",
    ],
    imgAlt:
      "Marking a dogwalk contact in DogMetrics: paw position, contact result and handler position, with the attempts on the timeline",
  },
  fast: {
    kicker: "Training happens fast",
    title: "Review shouldn't.",
    lead: "A session is full of attempts, decisions and small details, but reviewing it usually means scrubbing through one long recording. DogMetrics turns that footage into a session you can actually move through.",
    rawCaption: "Raw recording",
    rawAlt: "Raw training footage of a dog on the A-frame",
    structuredCaption: "Structured session",
    structuredAlt: "A session inside DogMetrics, with attempts on the timeline and a contact being labelled",
  },
  how: {
    kicker: "How it works",
    title: "From one recording to a review you can use.",
    enlarge: "Enlarge",
    steps: [
      {
        title: "Record or upload",
        body: "Record with your phone or the camera you already use, then upload the session to DogMetrics.",
        alt: "Raw training footage of a dog on the A-frame",
      },
      {
        title: "Find and review attempts",
        body: "Scrub the timeline frame by frame and jump straight to the parts of the session that matter.",
        alt: "Session player with frame-by-frame controls and the attempts on the recap timeline",
      },
      {
        title: "Mark what matters",
        body: "Tag attempt starts, ends and contact-zone touches as you watch. No separate notebook.",
        alt: "Labelling a zone touch: paw position, contact result, handler side and depth",
      },
      {
        title: "Build the recap",
        body: "Turn a marked-up session into a short recap you can watch back or hand to a coach.",
        alt: "A recap of 13 attempts with voice command and zone touch events listed",
      },
      {
        title: "Keep the history",
        body: "Every session stays in your library, by dog and by date, training and competition alike.",
        alt: "Session library with training, competitions and shared sessions, filters and recap badges",
      },
    ],
  },
  progress: {
    kicker: "Progress",
    statA: "A video disappears into your camera roll. ",
    statBold: "A DogMetrics session becomes training history",
    statC: ": one you can pull back up and compare against the next.",
    lead: "Sync two attempts to the same obstacle and play them back side by side, so a change in handling or contact behaviour is easy to see rather than easy to forget.",
    imgAlt: "Two attempts on the A-frame compared side by side, synced on the zone touch",
  },
  pricing: {
    kicker: "Pricing",
    title: "Simple monthly plans",
    note: `${launch}. Prices are per month, excluding VAT, and may still change during early access.`,
    coachesGroup: "For coaches",
    handlersGroup: "For handlers",
    perMonth: "/ month",
    starter: { name: "Coach Starter", price: "€30", body: "Includes 2 students. A low-risk way to try DogMetrics with your own classes." },
    coach: { name: "Coach", price: "€50", body: "Includes up to 15 students. For coaches running regular online classes." },
    extra: { name: "Extra students", price: "+€20", body: "Add 10 more students to your Coach plan, as many times as you need." },
    handler: {
      name: "Handler",
      price: "€15",
      body: "For handlers training on their own: upload sessions, mark attempts, build recaps and keep your history.",
    },
    student: { name: "Student of a coach", price: "Included", body: "If your coach uses DogMetrics, your place is part of their plan." },
  },
  cta: {
    title: "Train. Review. Learn. Repeat.",
    lead: `${launch}. We're inviting a small group of coaches, and the handlers they train, to start early and shape what comes next.`,
    consent: "By contacting us you agree we'll use your details to reply. See the",
    privacy: "Privacy Policy",
    emailIntro: "Prefer email? Write to",
  },
  faq: {
    kicker: "FAQ",
    items: [
      {
        q: "When can I start?",
        a: `${launch}. Until then we're working with a small group of coaches and their students. Apply below if you'd like to join early.`,
      },
      { q: "Do I need special cameras?", a: "No. A phone on a tripod is enough to record a training session." },
      {
        q: "Do my students have to pay?",
        a: "No. Students of a coach are included in the coach's plan. Handlers who train on their own use the Handler plan.",
      },
      { q: "Which languages does it support?", a: "English, Dutch, German, Czech, Spanish and French." },
      { q: "Is my video private?", a: "Yes. You control who can see your sessions. See the Privacy Policy for details." },
    ],
  },
  footer: { privacy: "Privacy Policy" },
  lightboxAlt: "Enlarged screenshot",
};
