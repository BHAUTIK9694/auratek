import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@hooks';
import styles from './FinalCta.module.css';

/**
 * Final CTA — luxury "Book an Appointment" invitation with parallax image
 * and dual CTAs. Modelled after Cartier's & Bulgari's boutique invitations.
 */
const FinalCta = () => {
  const ref = useScrollReveal({ threshold: 0.15 });

  return (
    <section ref={ref} className={`${styles.section} reveal`} aria-labelledby="final-heading">
      {/* Backdrop image */}
      <div className={styles.media} aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=2200&q=90"
          alt=""
          loading="lazy"
        />
        <div className={styles.veil} />
        <div className={styles.grain} />
      </div>

      {/* Corner marks */}
      <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerTR}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBL}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Personal Concierge
          <span className={styles.eyebrowLine} />
        </p>

        <h2 id="final-heading" className={styles.title}>
          Meet your <em>stylist</em>.
          <br />
          In our boutique. Or in your living room.
        </h2>

        <p className={styles.description}>
          Book a private appointment with an Auratek stylist — at our flagship
          boutique, at your home, or over a virtual coffee. One hour of
          undivided attention, no pressure to buy.
        </p>

        <div className={styles.ctas}>
          <Link to="/appointment" className={styles.ctaPrimary}>
            <span>Book an Appointment</span>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M0 5h20M17 1l4 4-4 4" />
            </svg>
          </Link>

          <Link to="/stores" className={styles.ctaLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M12 21s-8-6.75-8-13a8 8 0 1 1 16 0c0 6.25-8 13-8 13z"/>
              <circle cx="12" cy="8" r="3"/>
            </svg>
            <span>Find a Boutique</span>
          </Link>
        </div>

        {/* Contact strip */}
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 20 20 0 0 1-8.6-3.1 20 20 0 0 1-6-6A20 20 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/>
            </svg>
            <div>
              <p className={styles.contactLabel}>Concierge</p>
              <a href="tel:+912212345678" className={styles.contactValue}>+91 22 1234 5678</a>
            </div>
          </div>
          <span className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m3 6 9 7 9-7"/>
            </svg>
            <div>
              <p className={styles.contactLabel}>Email</p>
              <a href="mailto:concierge@auratek.com" className={styles.contactValue}>concierge@auratek.com</a>
            </div>
          </div>
          <span className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <div>
              <p className={styles.contactLabel}>Hours</p>
              <span className={styles.contactValue}>Mon–Sun · 11am to 8pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
