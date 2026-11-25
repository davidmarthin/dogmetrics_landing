// Shared constants: external URLs, launch copy and asset paths used across sections.


export const betaApplyUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7APWCUl56ZMllHzS8pYb7ytD3fessC8VxJLB8Pw6fr4Oszw/viewform?usp=header";

const pilotSubject = encodeURIComponent("DogMetrics — Private Pilot");
const pilotBody = encodeURIComponent(`Hi DogMetrics team,

I’d like to apply for the DogMetrics Private Pilot.

Name:
Role (coach / handler):
Do you coach online? (yes / no):
Number of students (if coach):
Club (optional):
Country / city:
Anything else we should know:

Thanks!`);

export const pilotEmailHref = `mailto:demo@dog-metrics.com?subject=${pilotSubject}&body=${pilotBody}`;

export const screens = {
  rawFootage: "/screens/opt/raw-footage.webp",
  timeline: "/screens/opt/timeline.webp",
  recap: "/screens/opt/recap.webp",
  overlay: "/screens/opt/overlay.webp",
  course: "/screens/opt/course.webp",
  compare: "/screens/opt/compare.webp",
  howUpload: "/screens/opt/how-upload.webp",
  howReview: "/screens/opt/how-review.webp",
};
