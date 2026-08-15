import { ArrowRight } from 'lucide-react';
import { images, type ModalContent } from '@/lib/data';

interface WhyUsProps {
  onSelect: (content: ModalContent) => void;
}

const promises: { number: string; title: string; text: string; description: string; image: string }[] = [
  {
    number: '01',
    title: 'Personalized Journeys',
    text: 'Every itinerary is designed around you.',
    description:
      'No two travelers are the same, so no two journeys should be either. We start with a conversation, not a catalog. Your pace, your interests, and your idea of a perfect morning shape every day of the trip.',
    image: images.temple,
  },
  {
    number: '02',
    title: 'Local Expertise',
    text: 'Travel deeper with people who know the destination.',
    description:
      'Our guides and fixers live where you\'re going. They open doors that don\'t appear on maps — family dinners, dawn ceremonies, hidden trailheads — and translate the place in a way no app can.',
    image: images.alps,
  },
  {
    number: '03',
    title: 'Unforgettable Experiences',
    text: 'We focus on moments you\'ll remember for a lifetime.',
    description:
      'The best moments aren\'t the ones you book — they\'re the ones that surprise you. We build in the space and flexibility for the unexpected: the extra hour, the wrong turn, the conversation that changes the day.',
    image: images.patagonia,
  },
];

export function WhyUs({ onSelect }: WhyUsProps) {
  return (
    <section className="why section" id="about" aria-label="Why travel with us">
      <div className="page-shell">
        <div className="section-heading centered">
          <span className="eyebrow"><i /> THE WANDERLUST PROMISE</span>
          <h2>Why travel<br /><em>with us?</em></h2>
        </div>
        <div className="promise-grid">
          {promises.map((p) => (
            <button
              className="promise-card"
              key={p.number}
              onClick={() =>
                onSelect({
                  eyebrow: 'OUR PROMISE',
                  title: p.title,
                  image: p.image,
                  paragraphs: [p.description],
                  ctaLabel: 'Start your journey',
                })
              }
            >
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="promise-overlay" />
              <div className="promise-copy">
                <span>{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ArrowRight size={17} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
