import React, { useState } from 'react';
import InquiryModal from '../InquiryModal/InquiryModal';
import styles from './ProductCard.module.css';

/**
 * Premium product card:
 *   - Fine art-directed image with subtle zoom on hover
 *   - Second image reveal on hover (if `imageAlt` is provided)
 *   - "New" or "Bestseller" ribbon
 *   - Metal tone swatches
 *   - On click opens inquiry modal with WhatsApp, Call, and Send Inquiry
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
}) => {
  const [selectedTone, setSelectedTone] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <article className={styles.card} onClick={() => setInquiryOpen(true)}>
        <div className={styles.mediaWrap}>
          {badge && (
            <span className={`${styles.badge} ${styles[badge]}`}>
              {badge === 'new' && 'New'}
              {badge === 'bestseller' && 'Bestseller'}
              {badge === 'limited' && 'Limited Edition'}
            </span>
          )}

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

          <span className={styles.inquiryHint}>Inquire</span>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTone(i);
                  }}
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

      {inquiryOpen && (
        <InquiryModal
          productName={name}
          onClose={() => setInquiryOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
