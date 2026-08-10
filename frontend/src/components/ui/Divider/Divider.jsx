import React from 'react';
import styles from './Divider.module.css';

/**
 * Auratek Premium Divider
 * 
 * @param {'default'|'gold'} props.variant
 * @param {'ornament'|'dot'|'none'} props.decoration
 * @param {'sm'|'md'|'lg'|'xl'} props.spacing
 */
const Divider = ({
  variant = 'default',
  decoration = 'none',
  spacing = 'md',
  className = '',
}) => {
  const spacingClass = `spacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`;

  const classNames = [
    styles.divider,
    styles[variant],
    styles[spacingClass],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} role="separator" aria-hidden="true">
      <span className={styles.line} />
      {decoration === 'ornament' && <span className={styles.ornament} />}
      {decoration === 'dot' && <span className={styles.dot} />}
      <span className={styles.line} />
    </div>
  );
};

export default Divider;
