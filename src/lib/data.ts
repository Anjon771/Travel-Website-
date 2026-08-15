export interface Destination {
  name: string;
  place: string;
  rating: string;
  image: string;
  description: string;
}

export interface Trip {
  name: string;
  meta: string;
  price: string;
  tag: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  text: string;
  image: string;
  description: string;
  className: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  trip: string;
  initials: string;
}

export interface Article {
  category: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string;
}

export interface ModalContent {
  eyebrow?: string;
  title: string;
  image: string;
  video?: string;
  paragraphs: string[];
  meta?: { label: string; value: string }[];
  ctaLabel?: string;
}

export const images = {
  hero: 'https://images.pexels.com/photos/37415951/pexels-photo-37415951.jpeg?auto=compress&cs=tinysrgb&w=1800',
  bali: 'https://images.pexels.com/photos/17716409/pexels-photo-17716409.jpeg?auto=compress&cs=tinysrgb&w=1200',
  maldives: 'https://images.pexels.com/photos/8356055/pexels-photo-8356055.jpeg?auto=compress&cs=tinysrgb&w=1000',
  alps: 'https://images.pexels.com/photos/32396289/pexels-photo-32396289.jpeg?auto=compress&cs=tinysrgb&w=1000',
  patagonia: 'https://images.pexels.com/photos/14378139/pexels-photo-14378139.jpeg?auto=compress&cs=tinysrgb&w=1200',
  temple: 'https://images.pexels.com/photos/7980413/pexels-photo-7980413.jpeg?auto=compress&cs=tinysrgb&w=1000',
  santorini: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const destinations: Destination[] = [
  {
    name: 'Santorini',
    place: 'Greece',
    rating: '4.8',
    image: images.santorini,
    description:
      'Whitewashed villages clinging to volcanic cliffs above the deep blue Aegean. Watch the sun melt into the caldera from Oia, swim in hidden coves, and taste the island\'s volcanic-wine heritage.',
  },
  {
    name: 'Maldives',
    place: 'Indian Ocean',
    rating: '4.9',
    image: images.maldives,
    description:
      'Overwater villas above a glass-clear lagoon, house reefs teeming with marine life, and the slow rhythm of island time. The Maldives is where the world goes quiet.',
  },
  {
    name: 'Swiss Alps',
    place: 'Switzerland',
    rating: '4.7',
    image: images.alps,
    description:
      'Emerald valleys, glacier-fed lakes, and peaks that rise like a wall against the sky. Ride scenic rail lines, hike flower-strewn meadows, and wake up above the clouds.',
  },
  {
    name: 'Bali',
    place: 'Indonesia',
    rating: '4.8',
    image: images.bali,
    description:
      'Emerald rice terraces, ancient clifftop temples, and hidden jungle waterfalls. Bali blends spiritual depth with tropical ease — a place that asks you to slow down.',
  },
  {
    name: 'Patagonia',
    place: 'Argentina',
    rating: '4.9',
    image: images.patagonia,
    description:
      'Granite spires piercing the wind, glacial lakes glowing electric blue, and some of the most dramatic hiking on Earth. Patagonia is wilderness at its most cinematic.',
  },
];

export const packages: Trip[] = [
  {
    name: 'Bali Escape',
    meta: '7 days / 6 nights',
    price: '$1,290',
    tag: 'Jungle & coast',
    image: images.bali,
    description:
      'Seven days blending Ubud\'s jungle heart with the south coast\'s dramatic cliffs. Private temple visits, sunrise hikes, and a beachfront villa to come home to.',
    highlights: ['Sunrise at Mount Batur', 'Private temple ceremony', 'Uluwatu clifftop dinner', 'Beachfront villa stay'],
  },
  {
    name: 'Swiss Alps Adventure',
    meta: '8 days / 7 nights',
    price: '$2,490',
    tag: 'Active escape',
    image: images.alps,
    description:
      'Eight days across the Bernese Oberland. Scenic rail journeys, guided alpine hikes, and a lakeside chalet with the peaks at your doorstep.',
    highlights: ['Glacier Express rail journey', 'Guided Eiger trail hike', 'Lake Brienz kayaking', 'Chalet with mountain views'],
  },
  {
    name: 'Maldives Escape',
    meta: '5 days / 4 nights',
    price: '$1,890',
    tag: 'Slow travel',
    image: images.maldives,
    description:
      'Five days of overwater luxury. Snorkel a house reef, dine on a private sandbank, and let the Indian Ocean set the pace.',
    highlights: ['Overwater villa', 'House reef snorkeling', 'Private sandbank dinner', 'Sunset dolphin cruise'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Adventure',
    text: 'Mountain trekking and remote landscapes.',
    image: images.patagonia,
    description:
      'For those who travel to feel the ground under their boots. Multi-day treks through Patagonia, summit pushes in the Alps, and off-grid expeditions where the maps run out.',
    className: 'experience-large',
  },
  {
    title: 'Ocean',
    text: 'Private islands, diving and tropical escapes.',
    image: images.maldives,
    description:
      'Overwater villas, reef dives with marine biologists, and sailboats anchored in lagoons the color of glass. The ocean is the world\'s largest luxury resort.',
    className: '',
  },
  {
    title: 'Culture',
    text: 'Authentic local experiences and hidden places.',
    image: images.temple,
    description:
      'Tea ceremonies with century-old rituals, temple blessings at dawn, and dinners in family homes. Travel that changes you starts with the people who live there.',
    className: '',
  },
  {
    title: 'Luxury',
    text: 'Private villas, boutique stays, considered details.',
    image: images.bali,
    description:
      'Private villas with infinity pools above the jungle, personal chefs, and itineraries shaped around your pace. Luxury is the freedom to do nothing, beautifully.',
    className: 'experience-wide',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Every detail was perfect. It felt less like a vacation and more like a story we were lucky enough to live.',
    name: 'Sofia & Daniel',
    trip: 'Bali, Indonesia',
    initials: 'SD',
  },
  {
    quote: 'Wanderlust found the quiet corners of Patagonia we would never have discovered on our own.',
    name: 'Clara M.',
    trip: 'Patagonia, Argentina',
    initials: 'CM',
  },
  {
    quote: 'A rare kind of service: intuitive, personal, and completely unhurried. We are already planning the next one.',
    name: 'James R.',
    trip: 'Swiss Alps, Switzerland',
    initials: 'JR',
  },
];

export const articles: Article[] = [
  {
    category: 'FIELD NOTES',
    title: '10 hidden places to see before everyone else',
    date: '08.12.24',
    image: images.patagonia,
    excerpt: 'Notes, ideas and inspiration for your next way out into the world.',
    body: 'The world still has corners that feel like secrets. From a glacier-fed lake in Patagonia reachable only by foot, to a Balinese village where the morning offering ceremony hasn\'t changed in four centuries, these are the places worth crossing time zones for — while they\'re still quiet.',
  },
  {
    category: 'DESTINATION GUIDE',
    title: 'The ultimate guide to Bali, beyond the postcard',
    date: '07.28.24',
    image: images.bali,
    excerpt: 'Notes, ideas and inspiration for your next way out into the world.',
    body: 'Bali is two islands: the one in the guidebooks, and the one the locals know. This guide takes you past the crowds to the rice terraces of Jatiluwih at dawn, the hidden waterfalls of Sekumpul, and a family-run warung in Ubud where the food hasn\'t changed in three generations.',
  },
  {
    category: 'TRAVEL WELL',
    title: 'How to travel the Swiss Alps slowly',
    date: '06.15.24',
    image: images.alps,
    excerpt: 'Notes, ideas and inspiration for your next way out into the world.',
    body: 'The Alps reward patience. Instead of racing between peaks, base yourself in a single valley for a week. Take the morning train, hike the afternoon trail, and let the evening find you on a lakefront terrace with a glass of local wine and the mountains turning gold.',
  },
];
