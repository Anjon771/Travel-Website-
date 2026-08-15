import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { images, testimonials } from '@/lib/data';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="testimonials" style={{ backgroundImage: `url(${images.patagonia})` }} aria-label="Testimonials">
      <div className="testimonials-overlay" aria-hidden="true" />
      <div className="page-shell testimonials-inner">
        <div className="testimonial-heading">
          <span className="eyebrow"><i /> WORDS FROM THE ROAD</span>
          <h2>Stories from<br /><em>the road.</em></h2>
          <div className="carousel-controls">
            <button
              aria-label="Previous testimonial"
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft size={18} />
            </button>
            <span>0{active + 1} <i /> 0{testimonials.length}</span>
            <button
              aria-label="Next testimonial"
              onClick={() => setActive((active + 1) % testimonials.length)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="testimonial-card glass-panel">
          <div className="quote-mark">"</div>
          <div className="stars" aria-label="5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star size={13} fill="currentColor" key={s} />
            ))}
          </div>
          <blockquote>{current.quote}</blockquote>
          <div className="testimonial-person">
            <span>{current.initials}</span>
            <div>
              <strong>{current.name}</strong>
              <small>{current.trip}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
