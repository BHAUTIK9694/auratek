import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopByOccasion.module.css';

const OCCASIONS = [
  { title: 'Office Ready', image: '/images/celestial-muse.jpg', to: '/daily-wear', desc: 'Subtle elegance for 9 to 5' },
  { title: 'Wedding Season', image: '/images/bridal-category.jpg', to: '/bridal', desc: 'Statement pieces for the big day' },
  { title: 'Anniversary', image: '/images/aurum-solstice.jpg', to: '/wedding', desc: 'Celebrate milestones in gold' },
  { title: 'Self Love', image: '/images/necklaces-category.jpg', to: '/collections', desc: 'Because you deserve it' },
  { title: 'Gifting', image: '/images/earrings-category.jpg', to: '/earrings', desc: 'Wrapped with intention' },
];

const ShopByOccasion = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Styled For You</p>
          <h2 className={styles.title}>Jewelry for every <em>moment</em></h2>
        </div>
        <div className={styles.grid}>
          {OCCASIONS.map((item) => (
            <Link key={item.title} to={item.to} className={styles.tile}>
              <div className={styles.tileImage}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className={styles.tileOverlay} />
              </div>
              <span className={styles.tileLabel}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;
