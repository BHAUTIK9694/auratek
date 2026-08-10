import React from 'react';
import styles from './Card.module.css';

/**
 * Auratek Premium Card Component
 * 
 * @param {Object} props
 * @param {'default'|'elevated'|'glass'|'bordered'|'dark'} props.variant
 * @param {'none'|'sm'|'md'|'lg'|'xl'} props.padding
 * @param {string} props.className
 * @param {React.ReactNode} props.children
 */
const Card = ({
  variant = 'default',
  padding = 'none',
  className = '',
  children,
  ...props
}) => {
  const paddingClass = `padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`;
  
  const classNames = [
    styles.card,
    styles[variant],
    styles[paddingClass],
    className,
  ].filter(Boolean).join(' ');

  return (
    <article className={classNames} {...props}>
      {children}
    </article>
  );
};

/* Sub-components */
const CardImage = ({ src, alt, className = '' }) => (
  <div className={styles.imageWrapper}>
    <img src={src} alt={alt} className={`${styles.image} ${className}`} />
    <div className={styles.overlay} />
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);

const CardHeader = ({ title, subtitle, className = '' }) => (
  <div className={`${styles.header} ${className}`}>
    {title && <h3 className={styles.title}>{title}</h3>}
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`}>{children}</div>
);

Card.Image = CardImage;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;
