import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopByMetal.module.css';

const METALS = [
  { label: 'Rose Gold', color: '#F4C3B0', to: '/collections', desc: 'Warm & romantic' },
  { label: 'Yellow Gold', color: '#F1C27D', to: '/collections', desc: 'Classic & timeless' },
  { label: 'White Gold', color: '#E8E1D9', to: '/collections', desc: 'Modern & sleek' },
  { label: '18kt Rose Gold', color: '#F4C3B0', to: '/collections', desc: 'Premium warm & romantic' },
  { label: '18kt Yellow Gold', color: '#F1C27D', to: '/collections', desc: 'Premium classic & timeless' },
  { label: '18kt White Gold', color: '#E8E1D9', to: '/collections', desc: 'Premium modern & sleek' },
  { label: 'Platinum', color: '#D4D4D8', to: '/collections', desc: 'Bold & enduring' },
];

const ShopByMetal = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Your Signature Tone</p>
          <h2 className={styles.title}>Which metal speaks <em>to you?</em></h2>
        </div>
        <div className={styles.grid}>
          {METALS.map((metal) => (
            <Link key={metal.label} to={metal.to} className={styles.chip}>
              <span className={styles.chipSwatch} style={{ backgroundColor: metal.color }} />
              <span className={styles.chipLabel}>{metal.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByMetal;
