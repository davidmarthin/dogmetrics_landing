import { useI18n } from "../i18n";

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  const { t } = useI18n();
  if (!src) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <img
        src={src}
        alt={t.lightboxAlt}
        className="lightboxImg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
