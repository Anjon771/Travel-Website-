import { ArrowRight, Users } from 'lucide-react';
import { images } from '@/lib/data';

export function TravelExperts() {
  const stats = [
    ['15+', 'Years Experience'],
    ['50+', 'Countries'],
    ['1,500+', 'Journeys'],
  ];
  return (
    <section className="section experts" aria-label="Travel experts">
      <div className="page-shell experts-inner">
        <div className="experts-image">
          <img src={images.temple} alt="Michael Carter, Founder" loading="lazy" />
          <div className="experts-image-overlay" />
        </div>
        <div className="experts-copy">
          <span className="eyebrow"><i /> MEET YOUR TRAVEL EXPERTS</span>
          <h2>Michael <em>Carter.</em></h2>
          <p className="experts-role">Founder &amp; Travel Curator</p>
          <blockquote>
            "After years of exploring the world's most remote destinations, we created Wanderlust to help travelers experience places beyond the obvious."
          </blockquote>
          <div className="experts-stats">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="text-link">
            Meet Our Team <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
