import React from 'react';
import siteConfig from '@config/siteConfig';
import styles from './About.module.css';

const About = () => {
  const { brand } = siteConfig;

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
            Our Story
            <span className={styles.eyebrowLine} />
          </p>
          <h1 className={styles.title}>About <em>{brand.name}</em></h1>
          <p className={styles.subtitle}>Crafting beauty with purpose and passion.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.block}>
            <h2>Who We Are</h2>
            <p>
              {brand.name} is a modern jewelry brand dedicated to creating fine pieces
              that combine contemporary design with meticulous craftsmanship. We believe
              that beautiful jewelry should be accessible, transparent, and made to last.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Our Mission</h2>
            <p>
              We're on a mission to redefine how people discover and buy fine jewelry.
              Through transparent pricing, certified materials, and a personal concierge
              experience, we make the journey as special as the piece itself.
            </p>
          </div>

          <div className={styles.block}>
            <h2>What Sets Us Apart</h2>
            <ul>
              <li>BIS Hallmarked gold and IGI/GIA certified diamonds in every piece</li>
              <li>Transparent pricing with detailed breakdowns</li>
              <li>Handcrafted with care by skilled artisans</li>
              <li>Hassle-free returns and lifetime exchange</li>
              <li>Personal concierge service via WhatsApp, call, or email</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Our Promise</h2>
            <p>
              Every piece that leaves our workshop carries our promise of quality,
              authenticity, and care. From the first sketch to the final polish,
              we put our heart into every detail — because jewelry isn't just an
              accessory, it's a feeling.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
