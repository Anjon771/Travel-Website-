import { ArrowUpRight } from 'lucide-react';
import { articles, type ModalContent } from '@/lib/data';

interface JournalProps {
  onSelect: (content: ModalContent) => void;
}

export function Journal({ onSelect }: JournalProps) {
  return (
    <section className="section journal" id="journal" aria-label="Travel journal">
      <div className="page-shell">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow"><i /> FROM THE JOURNAL</span>
            <h2>The Wanderlust <em>journal.</em></h2>
          </div>
          <a href="#journal" className="text-link">Read all stories <ArrowUpRight size={14} /></a>
        </div>
        <div className="journal-grid">
          {articles.map((article) => (
            <button
              className="journal-card"
              key={article.title}
              onClick={() =>
                onSelect({
                  eyebrow: article.category,
                  title: article.title,
                  image: article.image,
                  paragraphs: [article.body],
                  meta: [{ label: 'PUBLISHED', value: article.date }],
                  ctaLabel: 'Read full article',
                })
              }
            >
              <div className="journal-image">
                <img src={article.image} alt={article.title} loading="lazy" />
                <span>{article.category}</span>
              </div>
              <div className="journal-meta">
                <span>{article.date}</span>
                <ArrowUpRight size={15} />
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
