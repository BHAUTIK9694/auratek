import React from 'react';
import { useScrollReveal } from '@hooks';
import { PRESS_LOGOS } from '../data';
import styles from './Press.module.css';

/**
 * Press — a subtle scrolling strip of press logos.
 */
const Press = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className={`${styles.section} reveal`} aria-labelledby="press-heading">
      <div className={styles.inner}>
        <p id="press-heading" className={styles.eyebrow}>
          <span className={styles.line} />
          As Featured In
          <span className={styles.line} />
        </p>

        <ul className={styles.logos}>
          {PRESS_LOGOS.map((name) => (
            <li key={name} className={styles.logo}>
              <span className={styles.logoText}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Press;
