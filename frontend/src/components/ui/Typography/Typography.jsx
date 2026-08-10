import React from 'react';
import styles from './Typography.module.css';

/**
 * Auratek Premium Typography Component
 * 
 * @param {Object} props
 * @param {'heading'|'display'|'subtitle'|'body'|'caption'|'overline'|'quote'} props.variant
 * @param {'xs'|'sm'|'base'|'md'|'lg'|'xl'|'xxl'|'xxxl'|'xxxxl'|'xxxxxl'|'hero'} props.size
 * @param {'light'|'regular'|'medium'|'semibold'|'bold'} props.weight
 * @param {'primary'|'secondary'|'tertiary'|'brand'|'white'|'inherit'} props.color
 * @param {'left'|'center'|'right'} props.align
 * @param {string} props.as - HTML tag to render
 * @param {string} props.className
 * @param {React.ReactNode} props.children
 */
const Typography = ({
  variant = 'body',
  size,
  weight,
  color,
  align,
  as,
  className = '',
  children,
  ...props
}) => {
  /* Determine the HTML element */
  const defaultTags = {
    heading: 'h2',
    display: 'h1',
    subtitle: 'p',
    body: 'p',
    caption: 'span',
    overline: 'span',
    quote: 'blockquote',
  };

  const Tag = as || defaultTags[variant] || 'p';

  const colorClass = color ? `color${color.charAt(0).toUpperCase() + color.slice(1)}` : '';

  const classNames = [
    styles[variant],
    size ? styles[size] : '',
    weight ? styles[weight] : '',
    colorClass ? styles[colorClass] : '',
    align ? styles[align] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
