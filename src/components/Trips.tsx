import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { packages, type ModalContent } from '@/lib/data';

interface TripsProps {
  onSelect: (content: ModalContent) => void;
}

export function Trips({ onSelect }: TripsProps) {
  return (
    <section className="section trips" id="trips" aria-label="Tour packages">
      <div className="page-shell">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow"><i /> CURATED BY US</span>
            <h2>Handpicked <em>journeys.</em></h2>
          </div>
          <a href="#contact" className="text-link">View all trips <ArrowUpRight size={14} /></a>
        </div>
        <div className="trip-grid">
          {packages.map((trip, index) => (
            <button
              className="trip-card"
              key={trip.name}
              onClick={() =>
                onSelect({
                  eyebrow: trip.tag,
                  title: trip.name,
                  image: trip.image,
                  paragraphs: [trip.description],
                  meta: [
                    { label: 'DURATION', value: trip.meta },
                    { label: 'FROM', value: trip.price },
                    { label: 'DIFFICULTY', value: index === 1 ? 'Moderate' : 'Easy' },
                  ],
                  ctaLabel: 'Book this journey',
                })
              }
            >
              <div className="trip-image">
                <img src={trip.image} alt={trip.name} loading="lazy" />
                <span className="trip-number">0{index + 1}</span>
                <span className="trip-arrow"><ArrowUpRight size={17} /></span>
              </div>
              <div className="trip-info">
                <div>
                  <span>{trip.tag}</span>
                  <h3>{trip.name}</h3>
                  <p>{trip.meta}</p>
                </div>
                <div className="trip-price">
                  <small>FROM</small>
                  <strong>{trip.price}</strong>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="trip-cta-row">
          <a href="#contact" className="text-link">
            Browse all handpicked journeys <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
