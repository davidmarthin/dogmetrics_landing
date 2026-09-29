export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  if (!src) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <img
        src={src}
        alt="Enlarged screenshot"
        className="lightboxImg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
