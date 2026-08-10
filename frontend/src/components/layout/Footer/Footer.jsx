import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Newsletter, MarqueeStrip } from '@components/ui';
import styles from './Footer.module.css';

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Rings', to: '/rings' },
      { label: 'Necklaces', to: '/necklaces' },
      { label: 'Earrings', to: '/earrings' },
      { label: 'Bracelets', to: '/bracelets' },
      { label: 'Bridal', to: '/bridal' },
      { label: 'New Arrivals', to: '/new-arrivals' },
    ],
  },
  {
    title: 'Auratek',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Craftsmanship', to: '/craftsmanship' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'The Journal', to: '/journal' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Client Services',
    links: [
      { label: 'Contact Concierge', to: '/contact' },
      { label: 'Book an Appointment', to: '/appointment' },
      { label: 'Shipping & Delivery', to: '/shipping' },
      { label: 'Returns & Exchange', to: '/returns' },
      { label: 'Ring Size Guide', to: '/size-guide' },
      { label: 'Jewelry Care', to: '/care-guide' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Marquee ribbon */}
      <MarqueeStrip
        variant="dark"
        items={[
          'Auratek Maison',
          'Since 1992',
          'Bespoke Ateliers',
          'BIS Hallmarked',
          'Handcrafted in India',
          'Certified Diamonds',
        ]}
      />

      {/* Newsletter block */}
      <section className={styles.newsletterSection} aria-labelledby="footer-newsletter">
        <div className={styles.inner}>
          <div className={styles.newsletterInner}>
            <Newsletter variant="dark" />
          </div>
        </div>
      </section>

      {/* Main grid */}
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" aria-label="Auratek home" className={styles.brandLogo}>
              <Logo variant="full" size="md" color="light" />
            </Link>
            <p className={styles.brandDesc}>
              Auratek crafts fine jewelry for the modern connoisseur — where heirloom
              techniques meet contemporary design. Every piece is signed, sealed and
              made to last generations.
            </p>

            {/* Boutique */}
            <div className={styles.boutique}>
              <p className={styles.boutiqueEyebrow}>Flagship Boutique</p>
              <p className={styles.boutiqueAddr}>
                42, Aurora Lane, Bandra West<br />
                Mumbai 400050, India
              </p>
              <div className={styles.boutiqueMeta}>
                <a href="tel:+912212345678" className={styles.metaLink}>+91 22 1234 5678</a>
                <span className={styles.metaDivider} />
                <a href="mailto:concierge@auratek.com" className={styles.metaLink}>concierge@auratek.com</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} className={styles.column} aria-label={col.title}>
              <p className={styles.columnTitle}>{col.title}</p>
              <ul className={styles.columnList}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.columnLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Trust marks */}
        <div className={styles.trustRow}>
          <div className={styles.trustItem}>
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1">
              <circle cx="16" cy="14" r="8" />
              <path d="M13 14l2 2 4-4" />
              <path d="M16 22v7l-4-3-4 3v-9" />
            </svg>
            <span>BIS Hallmark<br /><em>Certified Gold</em></span>
          </div>
          <div className={styles.trustItem}>
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1">
              <path d="M4 12l6-7h12l6 7-12 15L4 12z" />
              <path d="M4 12h24" />
            </svg>
            <span>IGI · GIA · SGL<br /><em>Certified Natural Diamonds</em></span>
          </div>
          <div className={styles.trustItem}>
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1">
              <path d="M16 3l11 4v9c0 7-4.8 11.5-11 13-6.2-1.5-11-6-11-13V7l11-4z" />
              <path d="M11 16l3.5 3.5L21 13" />
            </svg>
            <span>Lifetime Warranty<br /><em>Free care · Free repair</em></span>
          </div>
          <div className={styles.trustItem}>
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1">
              <circle cx="16" cy="16" r="13" />
              <path d="M6 12h20M6 20h20M16 3c3 3 5 8 5 13s-2 10-5 13c-3-3-5-8-5-13s2-10 5-13z" />
            </svg>
            <span>Ships Worldwide<br /><em>Fully insured couriers</em></span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              &copy; {currentYear} Auratek Maison Private Limited. All rights reserved.
            </p>
            <nav className={styles.legal} aria-label="Legal">
              <Link to="/privacy">Privacy</Link>
              <span aria-hidden="true">·</span>
              <Link to="/terms">Terms</Link>
              <span aria-hidden="true">·</span>
              <Link to="/cookies">Cookies</Link>
              <span aria-hidden="true">·</span>
              <Link to="/accessibility">Accessibility</Link>
            </nav>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.payments} aria-label="Accepted payment methods">
              <span className={styles.payChip}>VISA</span>
              <span className={styles.payChip}>MC</span>
              <span className={styles.payChip}>AMEX</span>
              <span className={styles.payChip}>UPI</span>
              <span className={styles.payChip}>NB</span>
              <span className={styles.payChip}>EMI</span>
            </div>

            <div className={styles.socials}>
              <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://pinterest.com" className={styles.socialLink} aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.99.04-2.84.18-.77 1.2-5.08 1.2-5.08s-.31-.61-.31-1.52c0-1.42.82-2.49 1.85-2.49.87 0 1.29.66 1.29 1.44 0 .88-.56 2.19-.85 3.41-.24 1.02.51 1.85 1.51 1.85 1.82 0 3.21-1.92 3.21-4.68 0-2.45-1.76-4.16-4.27-4.16-2.91 0-4.61 2.18-4.61 4.43 0 .88.34 1.82.76 2.33.08.1.09.19.07.29-.08.32-.25 1.02-.29 1.16-.05.19-.15.23-.35.14-1.33-.62-2.16-2.57-2.16-4.14 0-3.37 2.45-6.46 7.05-6.46 3.7 0 6.58 2.64 6.58 6.16 0 3.68-2.32 6.64-5.54 6.64-1.08 0-2.1-.56-2.45-1.22l-.67 2.53c-.24.93-.89 2.1-1.33 2.81C9.98 21.88 10.97 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://youtube.com" className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M22 8.5a3 3 0 0 0-2.1-2.1C18 6 12 6 12 6s-6 0-7.9.4A3 3 0 0 0 2 8.5C1.6 10.4 1.6 12 1.6 12s0 1.6.4 3.5A3 3 0 0 0 4.1 17.6C6 18 12 18 12 18s6 0 7.9-.4A3 3 0 0 0 22 15.5c.4-1.9.4-3.5.4-3.5s0-1.6-.4-3.5z" />
                  <path d="M10 15V9l5 3-5 3z" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Origin line */}
        <p className={styles.originLine}>
          <span aria-hidden="true">✦</span> Handcrafted with intent in the Auratek Atelier, Mumbai · Jaipur · Bangalore
        </p>
      </div>
    </footer>
  );
};

export default Footer;
