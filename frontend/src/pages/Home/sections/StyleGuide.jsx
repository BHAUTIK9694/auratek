import React from 'react';
import styles from './StyleGuide.module.css';

const POSTS = [
  {
    tag: 'Jewelry Intelligence',
    title: '5 Pieces Every Woman Should Own by 30',
    excerpt: 'A stylist-approved guide to building a timeless jewelry wardrobe that works for every occasion.',
    image: '/images/necklaces-category.jpg',
  },
  {
    tag: 'Know Your Gems',
    title: 'Diamond Clarity: What Actually Matters',
    excerpt: 'VS1 vs VVS2? We break down what you can actually see — and what you\'re overpaying for.',
    image: '/images/rings-category.jpg',
  },
  {
    tag: 'Pro Tips',
    title: 'How to Measure Your Ring Size at Home',
    excerpt: 'No jeweler nearby? Here are 3 accurate methods using things you already have.',
    image: '/images/diamond-hoops.jpg',
  },
];

const StyleGuide = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Jewelry Intelligence</p>
          <h2 className={styles.title}>Know before you <em>buy</em></h2>
        </div>
        <div className={styles.grid}>
          {POSTS.map((post) => (
            <article key={post.title} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{post.tag}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
