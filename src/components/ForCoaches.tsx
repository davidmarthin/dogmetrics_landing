import { screens } from "../content";
import { Reveal } from "./Reveal";

const points = [
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
  {
    title: "Students get notified",
    body: "Students who opt in get an email when your review is ready.",
  },
  {
    title: "In their language",
    body: "The app works in English, Dutch, German, Czech, Spanish and French.",
  },
];

export function ForCoaches({ onImageClick }: { onImageClick: (src: string) => void }) {
  return (
    <section id="coaches" className="coaching section">
      <div className="container stack">
        <div className="coachGrid">
          <Reveal className="stack">
            <span className="kicker is-orange">For coaches</span>
            <h2 className="h2">Run your online classes in one place.</h2>
            <p className="lead">
              Built with coaches who teach agility through video: less time finding the right
              moment, more time on the feedback itself.
            </p>

            <div className="coachFlow" aria-label="Coaching workflow">
              <span>Lesson</span>
              <em>→</em>
              <span>Student uploads</span>
              <em>→</em>
              <span>You review</span>
              <em>→</em>
              <span>Student improves</span>
            </div>
          </Reveal>

          <Reveal scale delay={100} className="coachVisual">
            <img
              src={screens.course}
              alt="Course editor in DogMetrics: blocks and lessons, lesson instructions, demonstration video and course map"
              loading="lazy"
              decoding="async"
              onClick={() => onImageClick(screens.course)}
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="featureGrid">
          {points.map((p) => (
            <div className="featureItem" key={p.title}>
              <b>{p.title}</b>
              <p>{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
