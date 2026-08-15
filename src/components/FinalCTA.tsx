import { ArrowRight } from 'lucide-react';
import { images } from '@/lib/data';

export function FinalCTA() {
  return (
    <section className="final-cta" aria-label="Call to action">
      <div className="final-cta-image" style={{ backgroundImage: `url(${images.maldives})` }} aria-hidden="true" />
      <div className="final-cta-overlay" aria-hidden="true" />
      <div className="page-shell final-cta-inner">
        <span className="eyebrow"><i /> YOUR NEXT CHAPTER</span>
        <h2>Your next story<br /><em>starts here.</em></h2>
        <p>Tell us where you want to go. We'll help you make it unforgettable.</p>
        <div className="final-cta-actions">
          <a href="#contact" className="button">
            Plan My Journey <ArrowRight size={15} />
          </a>
          <a href="#destinations" className="text-link">
            Explore Destinations <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
