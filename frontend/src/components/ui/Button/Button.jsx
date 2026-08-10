import React from 'react';
import styles from './Button.module.css';

/**
 * Auratek Premium Button Component
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'outline'|'outlineLight'|'ghost'|'luxury'|'link'} props.variant
 * @param {'sm'|'md'|'lg'|'xl'} props.size
 * @param {boolean} props.fullWidth
 * @param {boolean} props.loading
 * @param {boolean} props.disabled
 * @param {React.ReactNode} props.icon
 * @param {'left'|'right'} [props.iconPosition]
 * @param {string} props.className
 * @param {React.ReactNode} props.children
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    loading ? styles.loading : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      <span className={styles.label}>
        {icon && iconPosition === 'left' && !loading && (
          <span className={styles.icon}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && !loading && (
          <span className={styles.icon}>{icon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;
