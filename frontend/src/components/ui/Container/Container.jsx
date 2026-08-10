import React from 'react';
import styles from './Container.module.css';

/**
 * Auratek Layout Container
 * 
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'xxl'|'full'} props.size
 */
const Container = ({ size = 'xl', className = '', children, ...props }) => {
  const classNames = [
    styles.container,
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
