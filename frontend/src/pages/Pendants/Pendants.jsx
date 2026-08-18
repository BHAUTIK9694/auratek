import React from 'react';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from '@pages/Rings/Rings.module.css';

const Pendants = () => {
  const products = NEW_ARRIVALS.filter((p) => p.category.includes('Pendants'));

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/pendant-collection-3.jpeg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Shop
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}><em>Pendants</em></h1>
          <p className={styles.subtitle}>
            Classic · Statement · Minimalist
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>All Pendants</h2>
            <span className={styles.productCount}>{products.length} pieces</span>
          </div>
          <div className={styles.grid}>
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pendants;
