import React from 'react';
import { Link } from 'react-router-dom';
import { useRevealChildren } from '@hooks';
import { JOURNAL_POSTS } from '../data';
import styles from './Journal.module.css';

/**
 * Journal — editorial content grid similar to Tanishq's "Stories"
 * and Reindriya's "Journal" landing sections.
 */
const Journal = () => {
  const sectionRef = useRevealChildren();

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="journal-heading">
      <div className={styles.header}>
        <div className={`reveal ${styles.headerInner}`}>
          <p className={styles.eyebrow}>The Auratek Journal</p>
          <h2 id="journal-heading" className={styles.title}>
            Stories from <em>the workshop.</em>
          </h2>
          <p className={styles.subtitle}>
            Notes on craft, provenance and style — read in five minutes,
            remembered for a lifetime.
          </p>
        </div>

        <Link to="/journal" className={styles.headerCta}>
          <span>Read the Journal</span>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M0 5h20M17 1l4 4-4 4" />
          </svg>
        </Link>
      </div>

      <div className={styles.grid}>
        {JOURNAL_POSTS.map((post, i) => (
          <article
            key={post.title}
            className={`${styles.card} reveal reveal--delay-${i + 1}`}
          >
            <Link to={post.to} className={styles.cardLink} aria-label={post.title}>
              <div className={styles.cardMedia}>
                <img src={post.image} alt="" loading="lazy" />
                <span className={styles.cardTag}>{post.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardRead}>{post.read}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardCta}>
                  <span>Read Story</span>
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M0 5h16M13 1l3 3-3 3" />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Journal;
