import React from 'react';
import { CategoryTile } from '@components/ui';
import { useRevealChildren } from '@hooks';
import { CATEGORIES } from '../data';
import styles from './CategoryGrid.module.css';

/**
 * Full-width category grid with an editorial split — a large lead tile
 * on the left and a stacked grid of smaller tiles on the right.
 * This is the visual language used by Cartier, Bulgari, and Tanishq
 * for their "Shop by Category" landing sections.
 */
const CategoryGrid = () => {
  const sectionRef = useRevealChildren();

  const [lead, ...rest] = CATEGORIES;

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="cat-heading">
      <div className={styles.header}>
        <div className={`reveal ${styles.headerInner}`}>
          <p className={styles.eyebrow}>Curated by Occasion</p>
          <h2 id="cat-heading" className={styles.title}>
            Shop the <em>Maison</em>
          </h2>
          <p className={styles.subtitle}>
            Six chapters, one language. Every category is designed, cast and
            finished by our master craftspeople in India — under one roof, for one lifetime.
          </p>
        </div>
      </div>

      <div className={styles.layout}>
        {/* Lead tile — larger */}
        <div className={`${styles.cell} ${styles.cellLead} reveal`}>
          <CategoryTile
            title={lead.title}
            subtitle={lead.subtitle}
            image={lead.image}
            to={lead.to}
            height="xl"
          />
        </div>

        {/* Grid of the remaining tiles */}
        <div className={styles.grid}>
          {rest.map((cat, i) => (
            <div
              key={cat.title}
              className={`${styles.cell} reveal reveal--delay-${(i % 3) + 1}`}
            >
              <CategoryTile
                title={cat.title}
                subtitle={cat.subtitle}
                image={cat.image}
                to={cat.to}
                height="md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
