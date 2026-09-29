// Shared constants: external URLs and asset paths used across sections.

export const betaApplyUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7APWCUl56ZMllHzS8pYb7ytD3fessC8VxJLB8Pw6fr4Oszw/viewform?usp=header";

const pilotSubject = encodeURIComponent("DogMetrics — Private Pilot");
const pilotBody = encodeURIComponent(`Hi DogMetrics team,

I’d like to apply for the DogMetrics Private Pilot.

Name:
Role (handler / coach / club):
Club (optional):
Country / city:
Typical session length:
Use case (training / competition / both):
Interested in DMCam? (yes/no):
Anything else we should know:

Thanks!`);

export const pilotEmailHref = `mailto:demo@dog-metrics.com?subject=${pilotSubject}&body=${pilotBody}`;

export const demoVideoSrc = "/video/demo_v03.mp4";

export const screens = {
  rawFootage: "/screens/opt/raw-footage.webp",
  demoPoster: "/screens/opt/demo-poster.webp",
  timeline: "/screens/opt/timeline.webp",
  recap: "/screens/opt/recap.webp",
  overlay: "/screens/opt/overlay.webp",
  compare: "/screens/opt/compare.webp",
  howRecord: "/screens/opt/how-record.webp",
  howUpload: "/screens/opt/how-upload.webp",
  howReview: "/screens/opt/how-review.webp",
};
