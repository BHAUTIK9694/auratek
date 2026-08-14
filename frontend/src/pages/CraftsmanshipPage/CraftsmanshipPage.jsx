import React from 'react';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from './CraftsmanshipPage.module.css';

const CraftsmanshipPage = () => {
  const products = NEW_ARRIVALS;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/craftsmanship-main.jpg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            The Craft
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}>Our <em>Craftsmanship</em></h1>
          <p className={styles.subtitle}>Every piece is handcrafted with meticulous attention to detail</p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Pieces</h2>
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

export default CraftsmanshipPage;
