import { useEffect, useRef } from "react";
import { demoVideoSrc } from "../content";

export function DemoVideoModal({
  open,
  onClose,
  title = "DogMetrics Demo",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const playTimer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      clearTimeout(playTimer);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="modalBackdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modalCard">
        <div className="modalHead">
          <b>{title}</b>
          <button className="modalClose" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="modalBody">
          <div className="modalVideo">
            <video ref={videoRef} controls playsInline preload="metadata">
              <source src={demoVideoSrc} type="video/mp4" />
            </video>
          </div>

          <div className="modalFoot">
            <a className="btn btnGhost" href={demoVideoSrc} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <button className="btn btnGhost" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
