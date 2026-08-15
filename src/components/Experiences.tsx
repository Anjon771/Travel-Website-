import { ArrowUpRight } from 'lucide-react';
import { experiences, type ModalContent } from '@/lib/data';

interface ExperiencesProps {
  onSelect: (content: ModalContent) => void;
}

export function Experiences({ onSelect }: ExperiencesProps) {
  return (
    <section className="section experiences" id="experiences" aria-label="Featured experiences">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i /> THE WANDERLUST WAY</span>
            <h2>Travel beyond<br /><em>the ordinary.</em></h2>
          </div>
          <p>Curated journeys designed for people who want more than a vacation. Go further, linger longer, and come home with a different perspective.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((card, index) => (
            <button
              className={`experience-card ${card.className}`}
              key={card.title}
              onClick={() =>
                onSelect({
                  eyebrow: 'EXPERIENCE',
                  title: card.title,
                  image: card.image,
                  paragraphs: [card.description],
                  ctaLabel: 'Find trips like this',
                })
              }
            >
              <img src={card.image} alt={card.title} loading="lazy" />
              <div className="image-wash" />
              <div className="experience-copy">
                <span>0{index + 1}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <ArrowUpRight size={18} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
