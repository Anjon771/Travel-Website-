import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Experiences } from '@/components/Experiences';
import { Story } from '@/components/Story';
import { Trips } from '@/components/Trips';
import { WhyUs } from '@/components/WhyUs';
import { Testimonials } from '@/components/Testimonials';
import { TravelExperts } from '@/components/TravelExperts';
import { Journal } from '@/components/Journal';
import { FinalCTA } from '@/components/FinalCTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Modal, SearchOverlay } from '@/components/Modal';
import {
  articles,
  destinations,
  experiences,
  images,
  packages,
  type ModalContent,
} from '@/lib/data';

function App() {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeModal = () => setModalContent(null);
  const openContact = () => {
    setModalContent(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const searchItems = [
    ...destinations.map((d) => ({
      label: d.name,
      sub: d.place,
      image: d.image,
      content: {
        eyebrow: d.place,
        title: d.name,
        image: d.image,
        paragraphs: [d.description],
        meta: [
          { label: 'RATING', value: `${d.rating} / 5` },
          { label: 'REGION', value: d.place },
        ],
        ctaLabel: 'Plan this trip',
      } as ModalContent,
    })),
    ...packages.map((p) => ({
      label: p.name,
      sub: p.tag,
      image: p.image,
      content: {
        eyebrow: p.tag,
        title: p.name,
        image: p.image,
        paragraphs: [p.description],
        meta: [
          { label: 'DURATION', value: p.meta },
          { label: 'FROM', value: p.price },
        ],
        ctaLabel: 'Book this journey',
      } as ModalContent,
    })),
    ...experiences.map((e) => ({
      label: e.title,
      sub: 'Experience',
      image: e.image,
      content: {
        eyebrow: 'EXPERIENCE',
        title: e.title,
        image: e.image,
        paragraphs: [e.description],
        ctaLabel: 'Find trips like this',
      } as ModalContent,
    })),
    ...articles.map((a) => ({
      label: a.title,
      sub: a.category,
      image: a.image,
      content: {
        eyebrow: a.category,
        title: a.title,
        image: a.image,
        paragraphs: [a.body],
        meta: [{ label: 'PUBLISHED', value: a.date }],
        ctaLabel: 'Read full article',
      } as ModalContent,
    })),
  ];

  const videoContent: ModalContent = {
    eyebrow: 'WATCH',
    title: 'Wanderlust in motion',
    image: images.hero,
    video: 'https://github.com/Anjon771/Travel-Website-/releases/download/v1.0/0815.mp4/0815.mp4', // 👉 নিচের instructions অনুযায়ী video আপলোড করে এখানে link বসান
    paragraphs: [
      'A short film about the journeys that stay with you — from the cliffs of Bali to the peaks of Patagonia. Every trip we curate begins with a simple question: where do you want to go next?',
    ],
    ctaLabel: 'Plan your journey',
  };

  return (
    <>
      <Navbar onSearch={() => setSearchOpen(true)} />
      <main>
        <Hero
          onSelectDestination={setModalContent}
          onWatchVideo={() => setModalContent(videoContent)}
        />
        <Stats />
        <Experiences onSelect={setModalContent} />
        <Story onExplore={setModalContent} />
        <Trips onSelect={setModalContent} />
        <WhyUs onSelect={setModalContent} />
        <Testimonials />
        <TravelExperts />
        <Journal onSelect={setModalContent} />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <Modal content={modalContent} onClose={closeModal} onCta={openContact} />
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelect={setModalContent}
        searchItems={searchItems}
      />
    </>
  );
}

export default App;
