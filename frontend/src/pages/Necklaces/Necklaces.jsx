import React from 'react';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from './Necklaces.module.css';

const Necklaces = () => {
  const products = NEW_ARRIVALS.filter((p) => p.category.includes('Necklaces'));

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/necklaces-category.jpg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Shop
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}><em>Necklaces</em></h1>
          <p className={styles.subtitle}>Chokers · Pendants · Chains · Statement</p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>All Necklaces</h2>
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

export default Necklaces;
