import React from 'react';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from '@pages/Rings/Rings.module.css';

const Vaddanam = () => {
  const products = NEW_ARRIVALS.filter((p) => p.category.includes('Vaddanam'));

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/vaddanam-1.png" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Shop
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}><em>Vaddanam</em></h1>
          <p className={styles.subtitle}>
            Traditional · Exquisite
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>All Vaddanam</h2>
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

export default Vaddanam;
