import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Globe2,
  Headphones,
  LockKeyhole,
  Play,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import { destinations, images, type ModalContent } from '@/lib/data';

interface HeroProps {
  onSelectDestination: (content: ModalContent) => void;
  onWatchVideo: () => void;
}

function Planner() {
  const [tab, setTab] = useState('Flights');
  return (
    <aside className="planner glass-panel" aria-label="Travel planner">
      <div className="planner-heading">
        <div>
          <span className="eyebrow"><i /> TRAVEL PLANNER</span>
          <h2>Where to next?</h2>
          <p>Find your perfect escape.</p>
        </div>
        <Globe2 size={20} className="planner-globe" />
      </div>
      <div className="planner-tabs" role="tablist" aria-label="Search type">
        {['Flights', 'Hotels', 'Experiences'].map((item) => (
          <button
            className={tab === item ? 'active' : ''}
            key={item}
            onClick={() => setTab(item)}
            role="tab"
            aria-selected={tab === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="planner-fields">
        <label className="planner-field">
          <span>From</span>
          <strong><i className="green-dot" />New York <small>(JFK)</small></strong>
        </label>
        <button className="swap-button" aria-label="Swap locations">↕</button>
        <label className="planner-field">
          <span>To</span>
          <strong><i className="teal-dot" />Bali, Indonesia</strong>
        </label>
        <div className="planner-grid">
          <label className="planner-field">
            <span><CalendarDays size={11} /> Dates</span>
            <strong>May 20 – May 30</strong>
          </label>
          <label className="planner-field">
            <span><Users size={11} /> Travelers</span>
            <strong>2 Adults</strong>
          </label>
        </div>
      </div>
      <a href="#contact" className="button planner-submit">
        Search {tab} <ArrowRight size={15} />
      </a>
    </aside>
  );
}

function DestinationStrip({ onSelect }: { onSelect: (c: ModalContent) => void }) {
  return (
    <div className="destination-strip">
      <div className="strip-heading">
        <span>Popular Destinations</span>
        <a href="#destinations">View all <ArrowUpRight size={12} /></a>
      </div>
      <div className="destination-scroll" role="list">
        {destinations.map((d) => (
          <button
            className="destination-card"
            key={d.name}
            role="listitem"
            onClick={() =>
              onSelect({
                eyebrow: d.place,
                title: d.name,
                image: d.image,
                paragraphs: [d.description],
                meta: [{ label: 'RATING', value: `${d.rating} / 5` }, { label: 'REGION', value: d.place }],
                ctaLabel: 'Plan this trip',
              })
            }
          >
            <img src={d.image} alt={`${d.name} landscape`} loading="lazy" />
            <div className="destination-overlay" />
            <div className="destination-copy">
              <strong>{d.name}</strong>
              <small>{d.place}</small>
              <span><Star size={10} fill="currentColor" /> {d.rating}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Hero({ onSelectDestination, onWatchVideo }: HeroProps) {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="route-line route-one" aria-hidden="true" />
      <div className="route-line route-two" aria-hidden="true" />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <span className="eyebrow"><i /> THE WORLD IS WAITING</span>
          <h1>Adventures<br /><em>That Stay</em><br />With You</h1>
          <p>Discover breathtaking destinations, unique experiences and unforgettable memories across the globe.</p>
          <div className="hero-actions">
            <a href="#destinations" className="button">
              Explore Destinations <ArrowRight size={15} />
            </a>
            <button className="watch-button" onClick={onWatchVideo}>
              <span><Play size={12} fill="currentColor" /></span>
              <div>Watch Video<small>See Wanderlust in action</small></div>
            </button>
          </div>
        </div>
        <Planner />
      </div>
      <div className="hero-bottom page-shell">
        <DestinationStrip onSelect={onSelectDestination} />
        <div className="hero-perks">
          <div><ShieldCheck size={19} /><span><b>Best Price</b>Guarantee</span></div>
          <div><Headphones size={19} /><span><b>24/7 Travel</b>Support</span></div>
          <div><CalendarDays size={19} /><span><b>Flexible</b>Bookings</span></div>
          <div><LockKeyhole size={19} /><span><b>Secure</b>Payments</span></div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>Scroll to explore</span>
        <ArrowDownRight size={17} />
      </div>
    </section>
  );
}
