import React from 'react';
import { Link } from 'react-router-dom';
import { NEW_ARRIVALS } from '../data';
import styles from './FeaturedSpotlight.module.css';

const FEATURED = NEW_ARRIVALS.slice(0, 4);

const FeaturedSpotlight = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Curated by Our Stylist</p>
          <h2 className={styles.title}>This week's <em>edit</em></h2>
        </div>
        <div className={styles.track}>
          {FEATURED.map((p) => (
            <div key={p.id} className={styles.item}>
              <div className={styles.thumb}>
                <img src={p.image} alt={p.name} loading="lazy" />
                {p.badge && (
                  <span className={styles.badge}>{p.badge === 'new' ? 'New' : p.badge === 'bestseller' ? 'Bestseller' : 'Limited'}</span>
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{p.name}</span>
                <span className={styles.price}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Link to="/new-arrivals" className={styles.ctaLink}>
            View All New Arrivals
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M0 5h16M12 1l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpotlight;
