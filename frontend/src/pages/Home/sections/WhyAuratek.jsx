import React from 'react';
import styles from './WhyAuratek.module.css';

const PROMISES = [
  {
    icon: 'fa-solid fa-gem',
    title: 'Certified Brilliance',
    description: 'Every diamond is IGI/GIA certified. Every gram of gold is BIS Hallmarked. No compromises, ever.',
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Honest from Day One',
    description: 'We show you exactly what goes into the price — materials, making charges, everything. No hidden costs.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Risk-Free Purchase',
    description: '15-day no-questions-asked returns, lifetime exchange, and free maintenance for life.',
  },
];

const WhyAuratek = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Auratek Difference</p>
          <h2 className={styles.title}>Built on <em>trust</em></h2>
        </div>
        <div className={styles.grid}>
          {PROMISES.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <i className={item.icon}></i>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAuratek;
