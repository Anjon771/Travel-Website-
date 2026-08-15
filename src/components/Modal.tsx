import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { ModalContent } from '@/lib/data';

interface ModalProps {
  content: ModalContent | null;
  onClose: () => void;
  onCta?: () => void;
}

export function Modal({ content, onClose, onCta }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (content) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [content, onClose]);

  if (!content) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={content.title}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>
        {content.video ? (
          <div className="modal-video-wrap">
            <video
              className="modal-video"
              src={content.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={content.title}
            />
          </div>
        ) : (
          <div className="modal-image" style={{ backgroundImage: `url(${content.image})` }}>
            <div className="modal-image-shade" />
            {content.eyebrow && <span className="eyebrow modal-eyebrow"><i /> {content.eyebrow}</span>}
            <h2 className="modal-title">{content.title}</h2>
          </div>
        )}
        <div className="modal-body">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {content.meta && (
            <div className="modal-meta">
              {content.meta.map((m) => (
                <div key={m.label}>
                  <small>{m.label}</small>
                  <strong>{m.value}</strong>
                </div>
              ))}
            </div>
          )}
          {content.ctaLabel && (
            <button className="button modal-cta" onClick={onCta}>
              {content.ctaLabel} <ArrowRight size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
  onSelect: (content: ModalContent) => void;
  searchItems: { label: string; sub: string; image: string; content: ModalContent }[];
}

export function SearchOverlay({ open, onClose, onSelect, searchItems }: SearchOverlayProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search destinations and trips">
      <div className="search-inner">
        <div className="search-top">
          <div className="search-input-wrap">
            <input
              className="search-input"
              placeholder="Search destinations, trips, experiences..."
              autoFocus
              aria-label="Search"
            />
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>
        <div className="search-results">
          {searchItems.map((item) => (
            <button
              key={item.label}
              className="search-result"
              onClick={() => {
                onSelect(item.content);
                onClose();
              }}
            >
              <img src={item.image} alt={item.label} loading="lazy" />
              <span>
                <strong>{item.label}</strong>
                <small>{item.sub}</small>
              </span>
              <ArrowRight size={15} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
