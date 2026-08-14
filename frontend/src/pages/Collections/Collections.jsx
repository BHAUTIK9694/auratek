import React, { useState } from 'react';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from './Collections.module.css';

const CATEGORY_FILTERS = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];
const METAL_FILTERS = ['All Metals', 'Rose Gold', 'Yellow Gold', 'White Gold', 'Platinum'];
const SORT_OPTIONS = ['Newest', 'Price: Low to High', 'Price: High to Low'];

const Collections = () => {
  const [category, setCategory] = useState('All');
  const [metal, setMetal] = useState('All Metals');
  const [sort, setSort] = useState('Newest');

  let products = [...NEW_ARRIVALS];

  // Filter by category
  if (category !== 'All') {
    products = products.filter((p) => p.category.includes(category));
  }

  // Filter by metal
  if (metal !== 'All Metals') {
    products = products.filter((p) => p.category.toLowerCase().includes(metal.toLowerCase()));
  }

  // Sort
  if (sort === 'Price: Low to High') {
    products.sort((a, b) => parseInt(a.price?.replace(/[^\d]/g, '') || '0') - parseInt(b.price?.replace(/[^\d]/g, '') || '0'));
  } else if (sort === 'Price: High to Low') {
    products.sort((a, b) => parseInt(b.price?.replace(/[^\d]/g, '') || '0') - parseInt(a.price?.replace(/[^\d]/g, '') || '0'));
  }

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
            Shop
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}>All <em>Collections</em></h1>
          <p className={styles.subtitle}>
            Explore our curated collections — each one a story of artistry and contemporary design.
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          {/* Filters */}
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterIcon}>
                <i className="fa-solid fa-layer-group"></i>
              </span>
              <span className={styles.filterLabel}>Category</span>
              <div className={styles.filterChips}>
                {CATEGORY_FILTERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`${styles.chip} ${category === f ? styles.chipActive : ''}`}
                    onClick={() => setCategory(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <span className={styles.filterDivider} />

            <div className={styles.filterGroup}>
              <span className={styles.filterIcon}>
                <i className="fa-solid fa-palette"></i>
              </span>
              <span className={styles.filterLabel}>Metal</span>
              <div className={styles.filterChips}>
                {METAL_FILTERS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`${styles.chip} ${metal === f ? styles.chipActive : ''}`}
                    onClick={() => setMetal(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <span className={styles.filterDivider} />

            <div className={styles.filterGroup}>
              <span className={styles.filterIcon}>
                <i className="fa-solid fa-arrow-up-wide-short"></i>
              </span>
              <span className={styles.filterLabel}>Sort</span>
              <select
                className={styles.sortSelect}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {category === 'All' ? 'All Pieces' : category}
            </h2>
            <span className={styles.productCount}>{products.length} pieces</span>
          </div>

          <div className={styles.grid}>
            {products.length > 0 ? (
              products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))
            ) : (
              <p className={styles.emptyMsg}>No pieces match your filters. Try adjusting your selection.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collections;
