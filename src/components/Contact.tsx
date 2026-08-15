import { FormEvent, useState } from 'react';
import { ArrowRight, Check, Headphones, Mail, Phone, Send } from 'lucide-react';
import { images } from '@/lib/data';

const destinationOptions = [
  'Bali, Indonesia',
  'Maldives, Indian Ocean',
  'Santorini, Greece',
  'Swiss Alps, Switzerland',
  'Patagonia, Argentina',
  'Surprise me',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  destination: string;
  dates: string;
  travelers: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  dates: '',
  travelers: '2',
  message: '',
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const reset = () => {
    setForm(initialForm);
    setSent(false);
  };

  return (
    <section className="contact" id="contact" aria-label="Contact and booking">
      <div className="contact-image" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
      <div className="contact-overlay" aria-hidden="true" />
      <div className="page-shell contact-inner">
        <div className="contact-copy">
          <span className="eyebrow"><i /> START A CONVERSATION</span>
          <h2>Let's plan<br /><em>your journey.</em></h2>
          <p>Tell us where you want to go. We'll help you make it unforgettable.</p>
          <div className="contact-details">
            <a href="mailto:hello@wanderlust.travel">
              <Mail size={16} />
              <span><small>Email</small>hello@wanderlust.travel</span>
            </a>
            <a href="tel:+18005550199">
              <Phone size={16} />
              <span><small>Phone</small>+1 800 555 0199</span>
            </a>
            <span className="contact-detail-item">
              <Headphones size={16} />
              <span><small>Available</small>24/7 Travel Support</span>
            </span>
          </div>
        </div>
        <div className="contact-form-wrap glass-panel">
          {sent ? (
            <div className="form-success">
              <span><Check /></span>
              <h3>Inquiry received.</h3>
              <p>We'll be in touch soon to start shaping your next story.</p>
              <button className="text-link" onClick={reset}>
                Send another inquiry <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label>
                  Name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Destination
                  <select
                    name="destination"
                    required
                    value={form.destination}
                    onChange={(e) => update('destination', e.target.value)}
                  >
                    <option value="" disabled>Where are you dreaming of?</option>
                    {destinationOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Travel dates
                  <input
                    name="dates"
                    placeholder="When would you like to go?"
                    value={form.dates}
                    onChange={(e) => update('dates', e.target.value)}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Travelers
                  <select
                    name="travelers"
                    value={form.travelers}
                    onChange={(e) => update('travelers', e.target.value)}
                  >
                    <option value="1">1 traveler</option>
                    <option value="2">2 travelers</option>
                    <option value="3">3 travelers</option>
                    <option value="4">4+ travelers</option>
                  </select>
                </label>
                <label>
                  Phone
                  <input
                    name="phone"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </label>
              </div>
              <label>
                Tell us a little more
                <textarea
                  name="message"
                  rows={3}
                  placeholder="What kind of journey are you imagining?"
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </label>
              <button className="button form-submit" type="submit">
                Send Inquiry <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
