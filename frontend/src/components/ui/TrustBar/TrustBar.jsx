import React from 'react';
import styles from './TrustBar.module.css';

/**
 * Trust bar — badges of assurance shown across luxury jewellery sites
 * (Tanishq, Reindriya, Tiffany, De Beers). Each item is a small icon + label + supporting line.
 *
 * @param {Object} props
 * @param {'light'|'dark'|'cream'} [props.variant]
 * @param {Array} [props.items] - Custom items override
 */

const ICONS = {
  shield: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M16 3l11 4v9c0 7-4.8 11.5-11 13-6.2-1.5-11-6-11-13V7l11-4z" />
      <path d="M11 16l3.5 3.5L21 13" />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 12l6-7h12l6 7-12 15L4 12z" />
      <path d="M4 12h24M10 5l-6 7 12 15M22 5l6 7-12 15" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 9h16v14H2z" />
      <path d="M18 13h7l5 5v5h-12" />
      <circle cx="9" cy="25" r="3" />
      <circle cx="24" cy="25" r="3" />
    </svg>
  ),
  return: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M6 8h20v14a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8z" />
      <path d="M11 8V6a5 5 0 0 1 10 0v2" />
      <path d="M12 16l3 3 6-6" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 5h22v16H12l-7 6V5z" />
      <path d="M10 12h12M10 16h8" />
    </svg>
  ),
  hallmark: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="16" cy="14" r="8" />
      <path d="M16 22v7l-4-3-4 3v-9" />
      <path d="M13 14l2 2 4-4" />
    </svg>
  ),
};

const DEFAULT_ITEMS = [
  {
    icon: 'diamond',
    title: 'Natural Certified',
    text: 'IGI · GIA · SGL certified diamonds',
  },
  {
    icon: 'hallmark',
    title: 'BIS Hallmarked',
    text: 'Purity guaranteed on every piece',
  },
  {
    icon: 'truck',
    title: 'Complimentary Delivery',
    text: 'Insured worldwide shipping',
  },
  {
    icon: 'return',
    title: '30-Day Returns',
    text: 'Free returns & lifetime exchange',
  },
  {
    icon: 'shield',
    title: 'Lifetime Warranty',
    text: 'Complimentary care & repair',
  },
  {
    icon: 'chat',
    title: 'Private Concierge',
    text: 'Book a stylist consultation',
  },
];

const TrustBar = ({ variant = 'cream', items = DEFAULT_ITEMS }) => {
  return (
    <div className={`${styles.wrap} ${styles[variant]}`} role="region" aria-label="Auratek promises">
      <div className={styles.inner}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">{ICONS[item.icon]}</span>
            <div className={styles.text}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.sub}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
