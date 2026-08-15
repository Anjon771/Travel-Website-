import { Instagram, Youtube, Facebook } from 'lucide-react';

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

export function Footer() {
  return (
    <footer aria-label="Footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Curated journeys<br />for curious people.</p>
          <div className="footer-social">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <Youtube size={16} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <a href="#destinations">Destinations</a>
            <a href="#experiences">Experiences</a>
            <a href="#trips">Trips</a>
            <a href="#journal">Travel Journal</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#about">About Us</a>
            <a href="#about">Our Team</a>
            <a href="#contact">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <strong>Support</strong>
            <a href="#contact">FAQ</a>
            <a href="#contact">Travel Insurance</a>
            <a href="#contact">Terms</a>
            <a href="#contact">Privacy</a>
          </div>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 Wanderlust Travel. All rights reserved.</span>
        <span>Made for the curious <i>—</i> everywhere.</span>
      </div>
    </footer>
  );
}
