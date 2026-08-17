import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@components/ui';
import { useRevealChildren } from '@hooks';
import { NEW_ARRIVALS } from '../data';
import styles from './NewArrivals.module.css';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'Rings', label: 'Rings' },
  { key: 'Necklaces', label: 'Necklaces' },
  { key: 'Earrings', label: 'Earrings' },
  { key: 'Bracelets', label: 'Bracelets' },
  { key: 'Pendants', label: 'Pendants' },
  { key: 'Bridal Sets', label: 'Bridal Sets' },
  { key: 'Vaddanam', label: 'Vaddanam / South Indian' },
];

/**
 * New Arrivals — filter tabs + editorial product grid.
 */
const NewArrivals = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRevealChildren({ dependencies: [filter] });

  const products = filter === 'all'
    ? NEW_ARRIVALS
    : NEW_ARRIVALS.filter((p) => p.category.startsWith(filter));

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="new-heading">
      <div className={styles.header}>
        <div className={`reveal ${styles.headerInner}`}>
          <p className={styles.eyebrow}>Fresh from the Atelier</p>
          <h2 id="new-heading" className={styles.title}>
            New <em>Arrivals</em>
          </h2>
          <p className={styles.subtitle}>
            The season&apos;s newest additions — hand-selected by our design
            director and released in limited quantities.
          </p>
        </div>

        <div className={styles.filters} role="tablist" aria-label="Filter new arrivals">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              type="button"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`${styles.filter} ${filter === f.key ? styles.filterActive : ''}`}
            >
              {f.label}
              {filter === f.key && (
                <span className={styles.filterUnderline} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div key={filter} className={styles.grid}>
        {products.map((p, i) => (
          <div
            key={p.id}
            className={`${styles.cell} reveal reveal--delay-${(i % 4) + 1}`}
          >
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <Link to="/new-arrivals" className={styles.ctaLink}>
          <span>View the Complete Edit</span>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M0 5h20M17 1l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
