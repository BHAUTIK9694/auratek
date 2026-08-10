import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data';
import styles from './HeroSection.module.css';

/**
 * Editorial hero with rotating slides.
 * Design language: split layout with editorial typography on the left,
 * full-bleed image with Ken Burns zoom on the right, gold ornamentation,
 * animated slide indicator + counter, and cross-fade transitions.
 */
const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = HERO_SLIDES[index];

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image stack */}
      <div className={styles.mediaLayer} aria-hidden="true">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.image}
            className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
          >
            <img
              src={slide.image}
              alt=""
              className={styles.slideImg}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className={styles.veil} />
        <div className={styles.grain} />
      </div>

      {/* Corner marks */}
      <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerTR}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBL}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

      {/* Content */}
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.tagDot} aria-hidden="true" />
            {current.tag}
          </div>

          <p className={styles.eyebrow}>{current.eyebrow}</p>

          <h1 className={styles.title}>
            {current.title.split('\n').map((line, i) => (
              <span key={i} className={styles.titleLine} style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.text}>{current.text}</p>

          <div className={styles.ctas}>
            <Link to={current.ctaPrimary.to} className={styles.ctaPrimary}>
              <span>{current.ctaPrimary.label}</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M0 5h20M17 1l4 4-4 4" />
                </svg>
              </span>
            </Link>
            <Link to={current.ctaSecondary.to} className={styles.ctaLink}>
              <span>{current.ctaSecondary.label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right rail — slide indicator + counter */}
        <div className={styles.rail}>
          <div className={styles.counter}>
            <span className={styles.counterCurrent}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.counterSep} />
            <span className={styles.counterTotal}>
              {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </div>

          <div className={styles.dots} role="tablist" aria-label="Slide selector">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
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

          <span className={styles.scrollHint} aria-hidden="true">
            <span className={styles.scrollHintLabel}>Scroll</span>
            <span className={styles.scrollHintLine} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
