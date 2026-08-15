import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Search, X } from 'lucide-react';

interface NavbarProps {
  onSearch: () => void;
}

const links: [string, string][] = [
  ['Destinations', '#destinations'],
  ['Experiences', '#experiences'],
  ['Trips', '#trips'],
  ['About Us', '#about'],
  ['Journal', '#journal'],
];

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Wanderlust home">
      <span className="logo-mark"><span /><span /><span /></span>
      <span>
        <strong>WANDERLUST</strong>
        <small>EXPLORE. DREAM. DISCOVER.</small>
      </span>
    </a>
  );
}

export function Navbar({ onSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
              {(label === 'Destinations' || label === 'Experiences') && <ChevronDown size={11} />}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search" onClick={onSearch}>
            <Search size={16} />
          </button>
          <button className="language" aria-label="Select language">
            EN <ChevronDown size={11} />
          </button>
          <a href="#contact" className="button button-small">
            Plan Your Trip <ArrowRight size={14} />
          </a>
        </div>
        <button
          className="mobile-menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={close}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a href="#contact" className="button" onClick={close}>
            Plan Your Trip <ArrowRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
