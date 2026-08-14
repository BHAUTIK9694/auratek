import React, { useState } from 'react';
import styles from './Newsletter.module.css';

/**
 * Newsletter capture with success state and elegant inline layout.
 *
 * @param {Object} props
 * @param {'light'|'dark'} [props.variant]
 * @param {boolean} [props.inline] - Compact single-row style for the footer.
 * @param {string} [props.eyebrow]
 * @param {string} [props.title]
 * @param {string} [props.description]
 */
const Newsletter = ({
  variant = 'dark',
  inline = false,
  eyebrow = 'More Beautiful Moments Await',
  title = 'Let us be part of your story.',
  description = 'Be the first to discover new collections, exclusive previews, and special offers — delivered with love to your inbox.',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // Simulated request; wire to backend when available.
    window.setTimeout(() => setStatus('success'), 700);
  };

  const wrapClass = [
    styles.wrap,
    styles[variant],
    inline ? styles.inline : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapClass}>
      {!inline && (
        <div className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </div>
      )}

      {status === 'success' ? (
        <div className={styles.success} role="status" aria-live="polite">
          <span className={styles.successIcon} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </span>
          Welcome to Auratek. Watch your inbox for a private preview.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <label className={styles.field}>
            <span className="sr-only">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Your email address"
              autoComplete="email"
              className={styles.input}
              aria-invalid={status === 'error'}
            />
          </label>
          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'submitting'}
          >
            <span>{status === 'submitting' ? 'Subscribing…' : 'Subscribe'}</span>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M0 5h16M12 1l4 4-4 4" />
            </svg>
          </button>
          {status === 'error' && (
            <p className={styles.error} role="alert">Please enter a valid email address.</p>
          )}
        </form>
      )}

      {!inline && (
        <p className={styles.microcopy}>
          By subscribing you agree to receive marketing communications from Auratek. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
};

export default Newsletter;
