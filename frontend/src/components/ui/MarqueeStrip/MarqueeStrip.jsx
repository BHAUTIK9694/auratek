import React from 'react';
import styles from './MarqueeStrip.module.css';

/**
 * Infinite scrolling luxury marquee.
 * Uses duplicated content and CSS translate for a seamless loop.
 *
 * @param {Object} props
 * @param {string[]} props.items - Words / phrases separated by an ornament.
 * @param {'light'|'dark'|'gold'} props.variant
 * @param {number} props.speed - Duration in seconds for a full loop. Default 40.
 */
const MarqueeStrip = ({
  items = [
    'Handcrafted in India',
    'BIS Hallmarked Gold',
    'Certified Natural Diamonds',
    'Lifetime Craftsmanship',
    'Ethically Sourced',
    'Bespoke Ateliers',
  ],
  variant = 'light',
  speed = 45,
}) => {
  const line = [...items, ...items];

  return (
    <div className={`${styles.strip} ${styles[variant]}`} aria-hidden="true">
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        {line.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            <span className={styles.label}>{item}</span>
            <span className={styles.ornament} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
