import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryTile.module.css';

/**
 * Full-bleed category tile with elegant hover reveal.
 * Inspired by Cartier and Bulgari collection pages.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.image
 * @param {string} props.to - Route
 * @param {'sm'|'md'|'lg'|'xl'} [props.height]
 * @param {'light'|'dark'} [props.overlay]
 */
const CategoryTile = ({
  title,
  subtitle,
  image,
  to = '/collections',
  height = 'md',
  overlay = 'dark',
}) => {
  return (
    <Link to={to} className={`${styles.tile} ${styles[`h_${height}`]}`} aria-label={`Explore ${title}`}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-hidden="true"
      />
      <div className={`${styles.veil} ${overlay === 'light' ? styles.veilLight : ''}`} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.cta}>
          <span>Explore</span>
          <span className={styles.arrow} aria-hidden="true">
            <svg width="24" height="10" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M0 5h22M18 1l4 4-4 4" />
            </svg>
          </span>
        </span>
      </div>

      <span className={styles.corner} aria-hidden="true" />
      <span className={styles.corner + ' ' + styles.cornerBR} aria-hidden="true" />
    </Link>
  );
};

export default CategoryTile;
