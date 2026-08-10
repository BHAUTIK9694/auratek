import React, { useState } from 'react';
import styles from './ProductCard.module.css';

/**
 * Premium product card modelled on Cartier & Tiffany product tiles:
 *   - Fine art-directed image with subtle zoom on hover
 *   - Second image reveal on hover (if `imageAlt` is provided)
 *   - Wishlist heart, quick-view CTA, and a "New" or "Bestseller" ribbon
 *   - Metal tone swatches
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.category
 * @param {string} props.image - Primary product image URL
 * @param {string} [props.imageAlt] - Secondary image for hover state
 * @param {string|number} [props.price]
 * @param {string} [props.originalPrice]
 * @param {'new'|'bestseller'|'limited'|null} [props.badge]
 * @param {string[]} [props.tones] - Tone hex colors (e.g. ['#F5D6A0','#F1F1F1','#F4C3B0'])
 * @param {Function} [props.onQuickView]
 */
const ProductCard = ({
  name,
  category,
  image,
  imageAlt,
  price,
  originalPrice,
  badge,
  tones = [],
  onQuickView,
}) => {
  const [saved, setSaved] = useState(false);
  const [selectedTone, setSelectedTone] = useState(0);

  return (
    <article className={styles.card}>
      <div className={styles.mediaWrap}>
        {badge && (
          <span className={`${styles.badge} ${styles[badge]}`}>
            {badge === 'new' && 'New'}
            {badge === 'bestseller' && 'Bestseller'}
            {badge === 'limited' && 'Limited Edition'}
          </span>
        )}

        <button
          type="button"
          className={`${styles.saveBtn} ${saved ? styles.savedActive : ''}`}
          aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-pressed={saved}
          onClick={(e) => {
            e.preventDefault();
            setSaved((s) => !s);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <div className={styles.image}>
          <img
            src={image}
            alt={name}
            className={styles.imgPrimary}
            loading="lazy"
            decoding="async"
          />
          {imageAlt && (
            <img
              src={imageAlt}
              alt=""
              className={styles.imgSecondary}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
          )}
        </div>

        <button
          type="button"
          className={styles.quickView}
          onClick={onQuickView}
        >
          Quick View
        </button>
      </div>

      <div className={styles.body}>
        {category && <p className={styles.category}>{category}</p>}
        <h3 className={styles.name}>{name}</h3>

        {tones.length > 0 && (
          <div className={styles.tones} role="group" aria-label="Metal tone">
            {tones.map((tone, i) => (
              <button
                key={tone}
                type="button"
                aria-label={`Metal tone ${i + 1}`}
                aria-pressed={selectedTone === i}
                onClick={() => setSelectedTone(i)}
                className={`${styles.tone} ${selectedTone === i ? styles.toneActive : ''}`}
                style={{ backgroundColor: tone }}
              />
            ))}
          </div>
        )}

        {(price || originalPrice) && (
          <div className={styles.priceRow}>
            {price && <span className={styles.price}>{price}</span>}
            {originalPrice && <span className={styles.originalPrice}>{originalPrice}</span>}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
