import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Newsletter, MarqueeStrip } from '@components/ui';
import siteConfig from '@config/siteConfig';
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
      { label: 'Craftsmanship', to: '/craftsmanship' },
      { label: 'Collections', to: '/collections' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Accessibility', to: '/accessibility' },
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
          'Premium Craftsmanship',
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
              <Logo variant="full" size="xl" color="light" />
            </Link>
            <p className={styles.brandDesc}>
              Auratek crafts fine jewelry for the modern connoisseur — where meticulous
              craftsmanship meets contemporary design. Every piece is made to be
              cherished for a lifetime.
            </p>

            {/* Boutique */}
            <div className={styles.boutique}>
              <p className={styles.boutiqueEyebrow}>Our Studio</p>
              <p className={styles.boutiqueAddr}>
                {siteConfig.address.line1}<br />
                {siteConfig.address.line2}<br />
                {siteConfig.address.area}<br />
                {siteConfig.address.city} {siteConfig.address.zip}, {siteConfig.address.country}
              </p>
              <div className={styles.boutiqueMeta}>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className={styles.metaLink}>{siteConfig.contact.phone}</a>
                <span className={styles.metaDivider} />
                <a href={`mailto:${siteConfig.contact.email}`} className={styles.metaLink}>{siteConfig.contact.email}</a>
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
              &copy; {currentYear} Auratek Jewels. All rights reserved.
            </p>
            <nav className={styles.legal} aria-label="Legal">
              <Link to="/privacy">Privacy</Link>
              <span aria-hidden="true">·</span>
              <Link to="/terms">Terms</Link>
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
              <a href={siteConfig.social.instagram} className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={siteConfig.social.pinterest} className={styles.socialLink} aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-pinterest-p"></i>
              </a>
              <a href={siteConfig.social.facebook} className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={siteConfig.social.youtube} className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Origin line */}
        <p className={styles.originLine}>
          <span aria-hidden="true">✦</span> Handcrafted with intent at the Auratek Atelier, Surat
        </p>
      </div>
    </footer>
  );
};

export default Footer;
