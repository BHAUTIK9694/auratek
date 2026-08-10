import React from 'react';
import styles from './Section.module.css';

/**
 * Auratek Section Wrapper
 * 
 * @param {'default'|'alt'|'cream'|'dark'} props.background
 * @param {'sm'|'default'|'lg'|'none'} props.padding
 */
const Section = ({
  background = 'default',
  padding = 'default',
  className = '',
  children,
  id,
  ...props
}) => {
  const bgClass = `bg${background.charAt(0).toUpperCase() + background.slice(1)}`;
  const paddingClass = padding !== 'default' ? `padding${padding.charAt(0).toUpperCase() + padding.slice(1)}` : '';

  const classNames = [
    styles.section,
    styles[bgClass],
    paddingClass ? styles[paddingClass] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={classNames} id={id} {...props}>
      {children}
    </section>
  );
};

export default Section;
