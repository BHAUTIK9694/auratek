import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '@hooks';
import { TESTIMONIALS } from '../data';
import styles from './Testimonials.module.css';

/**
 * Testimonials — rotating client quotes with a subtle cross-fade,
 * modelled on the format seen at Reindriya and Van Cleef & Arpels.
 */
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useScrollReveal();

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      ref={wrapRef}
      className={`${styles.section} reveal`}
      aria-labelledby="testi-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          The Auratek Circle
          <span className={styles.eyebrowLine} />
        </p>

        <h2 id="testi-heading" className={styles.title}>
          A note from those who wear us.
        </h2>

        <div className={styles.stage} aria-live="polite">
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>

          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.author}
              className={`${styles.quote} ${i === index ? styles.quoteActive : ''}`}
              aria-hidden={i !== index}
            >
              <p className={styles.text}>{t.quote}</p>
              <footer className={styles.footer}>
                <span className={styles.author}>{t.author}</span>
                <span className={styles.divider} />
                <span className={styles.meta}>{t.location} · {t.piece}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Progress bars */}
        <div className={styles.dots} role="tablist" aria-label="Testimonial selector">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.author}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial from ${t.author}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
            >
              <span
                className={styles.dotFill}
                style={{ animationPlayState: i === index && !paused ? 'running' : 'paused' }}
              />
            </button>
          ))}
        </div>

        {/* Stat strip */}
        <div className={styles.stats} aria-label="Trust indicators">
          <div className={styles.stat}>
            <span className={styles.statValue}>4.9<em>/5</em></span>
            <span className={styles.statLabel}>Client Rating</span>
          </div>
          <span className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>32<em>+</em></span>
            <span className={styles.statLabel}>Years of Craft</span>
          </div>
          <span className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>1.2M<em>+</em></span>
            <span className={styles.statLabel}>Hours of Handcrafting</span>
          </div>
          <span className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>18<em>k+</em></span>
            <span className={styles.statLabel}>Pieces Signed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
