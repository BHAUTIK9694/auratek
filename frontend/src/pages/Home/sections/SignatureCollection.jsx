import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@hooks';
import styles from './SignatureCollection.module.css';

/**
 * Signature Collection — a big, cinematic feature block that anchors the
 * homepage editorially. Split image + copy, with parallax-style zoom and
 * a gold-outlined CTA.
 */
const SignatureCollection = () => {
  const wrapRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} aria-labelledby="signature-heading">
      <div ref={wrapRef} className={`${styles.wrap} reveal`}>
        {/* Media side */}
        <div className={styles.media}>
          <div className={styles.mediaFrame}>
            <img
              src="/images/aurum-solstice.jpg"
              alt="Aurum Solstice — 18k rose gold ring set with a single sunlit diamond"
              className={styles.mediaImg}
              loading="lazy"
            />
            <span className={styles.mediaBadge}>
              <span className={styles.mediaBadgeDot} />
              Limited Edition
            </span>
          </div>

          {/* Floating stat card */}
          <div className={styles.stat}>
            <span className={styles.statValue}>480<em>h</em></span>
            <span className={styles.statLabel}>Handcrafting Hours</span>
          </div>

          {/* Gold circle backdrop */}
          <span className={styles.orb} aria-hidden="true" />
        </div>

        {/* Content side */}
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              The Signature Collection
            </p>
            <h2 id="signature-heading" className={styles.title}>
              Aurum Solstice.
              <br />
              <em>Made to catch the light.</em>
            </h2>

            <p className={styles.description}>
              Forged from 18k rose gold and set with sunlit champagne
              diamonds, Aurum Solstice captures the beauty of golden hour —
              when light meets precious stones and creates something
              extraordinary.
            </p>

            <ul className={styles.spec}>
              <li>
                <span className={styles.specLabel}>Metal</span>
                <span className={styles.specValue}>18k Rose Gold · Hand-forged</span>
              </li>
              <li>
                <span className={styles.specLabel}>Stones</span>
                <span className={styles.specValue}>Champagne diamonds · IGI certified</span>
              </li>
              <li>
                <span className={styles.specLabel}>Craftsmanship</span>
                <span className={styles.specValue}>Handcrafted · Quality assured</span>
              </li>
              <li>
                <span className={styles.specLabel}>Edition</span>
                <span className={styles.specValue}>Limited numbered pieces</span>
              </li>
            </ul>

            <div className={styles.ctas}>
              <Link to="/collections/aurum-solstice" className={styles.ctaPrimary}>
                <span>Explore the Collection</span>
                <span className={styles.ctaArrow}>
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M0 5h20M17 1l4 4-4 4" />
                  </svg>
                </span>
              </Link>
              <Link to="/journal/aurum-solstice-story" className={styles.ctaLink}>
                <span>Read the Story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
