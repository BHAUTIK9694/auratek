import React from 'react';
import { useRevealChildren } from '@hooks';
import { INSTAGRAM_TILES } from '../data';
import styles from './Instagram.module.css';

/**
 * Instagram grid — social proof / lifestyle imagery.
 */
const Instagram = () => {
  const sectionRef = useRevealChildren();

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="ig-heading">
      <div className={`reveal ${styles.header}`}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Follow the Maison
          <span className={styles.eyebrowLine} />
        </p>
        <h2 id="ig-heading" className={styles.title}>
          <span className={styles.handle}>@auratek</span>
        </h2>
        <p className={styles.subtitle}>
          Behind the scenes at our ateliers, on-set stories, and glimpses of
          how the Auratek community wears their pieces.
        </p>
      </div>

      <ul className={styles.grid}>
        {INSTAGRAM_TILES.map((src, i) => (
          <li key={src} className={`${styles.item} reveal reveal--delay-${(i % 5) + 1}`}>
            <a
              href="https://instagram.com/auratek"
              className={styles.tile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View post ${i + 1} on Instagram`}
            >
              <img src={src} alt="" loading="lazy" />
              <span className={styles.overlay} aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <a
          href="https://instagram.com/auratek"
          className={styles.followBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
          <span>Follow @auratek</span>
        </a>
      </div>
    </section>
  );
};

export default Instagram;
