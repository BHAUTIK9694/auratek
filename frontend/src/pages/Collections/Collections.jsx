import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@components/ui';
import { NEW_ARRIVALS } from '@pages/Home/data';
import styles from './Collections.module.css';

const CATEGORY_FILTERS = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Bridal Sets', 'Vaddanam / South Indian'];
const METAL_FILTERS = ['All Metals', 'Gold', 'Rose Gold'];
const SORT_OPTIONS = ['Newest', 'Name: A-Z', 'Name: Z-A'];

const getProductDetails = (product) => {
  const [productCategory, productMetal] = product.category.split(' · ');
  return { productCategory, productMetal };
};

const FilterSelect = ({ label, icon, value, options, onChange }) => (
  <div className={styles.filterField}>
    <label className={styles.filterLabel}>
      <span className={styles.filterIcon}>
        <i className={icon}></i>
      </span>
      {label}
    </label>

    <div className={styles.customSelect}>
      <select value={value} onChange={onChange} className={styles.selectInput}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(() => searchParams.get('category') || 'All');
  const [metal, setMetal] = useState(() => searchParams.get('metal') || 'All Metals');
  const [sort, setSort] = useState('Newest');

  let products = [...NEW_ARRIVALS];

  // Filter by category
  if (category !== 'All') {
    products = products.filter((product) => getProductDetails(product).productCategory === category);
  }

  // Filter by metal
  if (metal !== 'All Metals') {
    products = products.filter((product) => getProductDetails(product).productMetal === metal);
  }

  if (sort === 'Name: A-Z') {
    products.sort((firstProduct, secondProduct) => firstProduct.name.localeCompare(secondProduct.name));
  }

  if (sort === 'Name: Z-A') {
    products.sort((firstProduct, secondProduct) => secondProduct.name.localeCompare(firstProduct.name));
  }

  const updateFilter = (filterName, value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value === 'All' || value === 'All Metals') {
      nextParams.delete(filterName);
    } else {
      nextParams.set(filterName, value);
    }

    setSearchParams(nextParams);
  };

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
          <div className={styles.filters}>
            <FilterSelect
              label="Category"
              icon="fa-solid fa-layer-group"
              value={category}
              options={CATEGORY_FILTERS}
              onChange={(event) => {
                setCategory(event.target.value);
                updateFilter('category', event.target.value);
              }}
            />

            <FilterSelect
              label="Metal"
              icon="fa-solid fa-palette"
              value={metal}
              options={METAL_FILTERS}
              onChange={(event) => {
                setMetal(event.target.value);
                updateFilter('metal', event.target.value);
              }}
            />

            <FilterSelect
              label="Sort"
              icon="fa-solid fa-arrow-up-wide-short"
              value={sort}
              options={SORT_OPTIONS}
              onChange={(event) => setSort(event.target.value)}
            />
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
