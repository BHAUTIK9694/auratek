import React from 'react';
import { Logo } from '../Logo';
import styles from './InitialLoader.module.css';

const InitialLoader = () => (
  <div className={styles.loader} role="status" aria-label="Loading Auratek">
    <div className={styles.brand}>
      <Logo variant="full" size="xl" color="dark" />
      <span className={styles.line} aria-hidden="true" />
    </div>
  </div>
);

export default InitialLoader;