import { ArrowRight, MapPin } from 'lucide-react';
import { images, type ModalContent } from '@/lib/data';

interface StoryProps {
  onExplore: (content: ModalContent) => void;
}

export function Story({ onExplore }: StoryProps) {
  return (
    <section className="story" id="destinations" aria-label="Bali destination story">
      <div className="story-image" style={{ backgroundImage: `url(${images.bali})` }} aria-hidden="true" />
      <div className="story-overlay" aria-hidden="true" />
      <div className="page-shell story-inner">
        <span className="eyebrow"><i /> ISLAND OF THE GODS</span>
        <h2>Discover a<br /><em>different side</em><br />of Bali.</h2>
        <p>Hidden beaches, ancient temples, emerald rice terraces and a rhythm of life that invites you to slow down.</p>
        <button
          className="text-link"
          onClick={() =>
            onExplore({
              eyebrow: 'ISLAND OF THE GODS',
              title: 'Discover Bali',
              image: images.bali,
              paragraphs: [
                'Bali is two islands: the one in the guidebooks, and the one the locals know. We take you past the crowds to the emerald rice terraces of Jatiluwih at dawn, the hidden waterfalls of Sekumpul, and clifftop temples where the evening blessing hasn\'t changed in four centuries.',
                'Stay in a private jungle villa outside Ubud, spend a day with a local family learning to cook Balinese cuisine, and end your journey on the dramatic cliffs of Uluwatu with the Indian Ocean roaring below.',
              ],
              meta: [
                { label: 'BEST TIME', value: 'Apr – Oct' },
                { label: 'DURATION', value: '7 – 14 days' },
                { label: 'FROM', value: '$1,290' },
              ],
              ctaLabel: 'Plan a Bali journey',
            })
          }
        >
          Explore Bali <ArrowRight size={15} />
        </button>
        <div className="story-location">
          <MapPin size={16} />
          <span><small>NOW DISCOVERING</small>Bali, Indonesia</span>
        </div>
      </div>
    </section>
  );
}
