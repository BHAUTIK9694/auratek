import React from 'react';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from './NewArrivals.module.css';

const NewArrivalsPage = () => {
  const products = NEW_ARRIVALS;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/aurum-solstice.jpg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Fresh Additions
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}>New <em>Arrivals</em></h1>
          <p className={styles.subtitle}>The latest additions to our collection — limited quantities, unlimited beauty.</p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Just In</h2>
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

export default NewArrivalsPage;
