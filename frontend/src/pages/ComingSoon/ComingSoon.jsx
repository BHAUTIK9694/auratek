import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ComingSoon.module.css';

/**
 * Versatile content page component.
 * When heroImage and sections are provided, renders a full content page.
 * Otherwise falls back to a simple placeholder card.
 *
 * Props:
 *  - title (string): Page heading
 *  - subtitle (string): Short tagline below heading
 *  - description (string): Fallback description when no sections
 *  - eyebrow (string): Small text above title (default: "Auratek")
 *  - heroImage (string): Path to background image for hero
 *  - sections (array): Array of { heading, text } objects for content body
 */
const ComingSoon = ({
  title = 'Coming Soon',
  subtitle = '',
  description = '',
  eyebrow = 'Auratek',
  heroImage = '',
  sections = [],
}) => {
  // Full content page mode
  if (heroImage && sections.length > 0) {
    return (
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroMedia} aria-hidden="true">
            <img src={heroImage} alt="" />
            <div className={styles.heroVeil} />
          </div>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              <span className={styles.heroLine} />
              {eyebrow}
              <span className={styles.heroLine} />
            </p>
            <h1 className={styles.heroTitle}>
              {title.includes('|') ? (
                <>
                  {title.split('|')[0]}
                  <em>{title.split('|')[1]}</em>
                </>
              ) : (
                title
              )}
            </h1>
            {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
          </div>
        </section>

        {/* Content Body */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            {sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {Array.isArray(section.text) ? (
                  section.text.map((paragraph, pIndex) => (
                    <p key={pIndex} className={styles.sectionText}>{paragraph}</p>
                  ))
                ) : (
                  <p className={styles.sectionText}>{section.text}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // Fallback placeholder mode
  return (
    <main className={styles.fallback}>
      <section className={styles.fallbackInner}>
        <p className={styles.fallbackEyebrow}>
          <span className={styles.fallbackLine} />
          Auratek
          <span className={styles.fallbackLine} />
        </p>
        <h1 className={styles.fallbackTitle}>{title}</h1>
        {subtitle && <p className={styles.fallbackDescription}>{subtitle}</p>}
        <p className={styles.fallbackDescription}>
          {description || "We're crafting something beautiful. This page will be available soon."}
        </p>
        <Link to="/" className={styles.cta}>
          <span>Back to Home</span>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M0 5h16M12 1l4 4-4 4" />
          </svg>
        </Link>
      </section>
    </main>
  );
};

export default ComingSoon;
