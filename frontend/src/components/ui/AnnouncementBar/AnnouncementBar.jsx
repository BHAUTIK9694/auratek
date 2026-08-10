import React, { useEffect, useState } from 'react';
import styles from './AnnouncementBar.module.css';

/**
 * Announcement bar with rotating luxury messages.
 * Mimics the announcement rails seen on Tanishq, Tiffany, and Cartier.
 *
 * @param {Object} props
 * @param {string[]} props.messages - Ordered list of messages to rotate through.
 * @param {number} props.interval - Rotation interval in ms. Default 4500.
 */
const DEFAULT_MESSAGES = [
  'Complimentary express shipping on orders above ₹25,000',
  'Book a private virtual appointment with our jewelry stylist',
  'Lifetime buyback · Certified natural diamonds · BIS Hallmarked gold',
  'Exclusive members-only preview of our Aurum Solstice collection',
];

const AnnouncementBar = ({ messages = DEFAULT_MESSAGES, interval = 4500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [messages.length, interval]);

  return (
    <div className={styles.bar} role="region" aria-label="Announcements">
      <div className={styles.inner}>
        <span className={styles.ornament} aria-hidden="true" />
        <div className={styles.track}>
          {messages.map((msg, i) => (
            <span
              key={msg}
              className={`${styles.message} ${i === index ? styles.active : ''}`}
              aria-hidden={i !== index}
            >
              {msg}
            </span>
          ))}
        </div>
        <span className={styles.ornament} aria-hidden="true" />
      </div>
    </div>
  );
};

export default AnnouncementBar;
