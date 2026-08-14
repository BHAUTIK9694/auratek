import React from 'react';
import { Link } from 'react-router-dom';
import { useRevealChildren } from '@hooks';
import styles from './Craftsmanship.module.css';

const PROCESS = [
  {
    step: '01',
    title: 'Sketch',
    body:
      'Every piece begins on paper. Our designers hand-draw each collection before a single stone is cut.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M5 33l7-24 6 20 4-12 6 8 7-16" />
        <circle cx="12" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Cast',
    body:
      '18k gold and Pt950 platinum are hand-poured into moulds forged at 1064°C, then filed for hours by our master craftsmen.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M8 12l12-6 12 6-12 6-12-6z" />
        <path d="M8 20l12 6 12-6" />
        <path d="M8 28l12 6 12-6" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Set',
    body:
      'Each diamond is hand-set under 10x magnification by skilled artisans with years of experience.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M6 15l7-8h14l7 8-14 18L6 15z" />
        <path d="M6 15h28M13 7l-7 8 14 18M27 7l7 8-14 18" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Sign',
    body:
      'Every piece is signed by its lead craftsman, engraved with the Auratek mark, and certified by BIS hallmark and IGI/GIA.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M20 4l4 12h12l-10 8 4 12-10-8-10 8 4-12L4 16h12z" />
      </svg>
    ),
  },
];

const Craftsmanship = () => {
  const sectionRef = useRevealChildren();

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="craft-heading">
      {/* Ambient background */}
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.orb1} />
        <span className={styles.orb2} />
        <span className={styles.line} />
      </div>

      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={`reveal ${styles.headerCol}`}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              The Craft
            </p>
            <h2 id="craft-heading" className={styles.title}>
              Meticulous attention
              <br />
              to every <em>detail.</em>
            </h2>
          </div>

          <div className={`reveal reveal--delay-2 ${styles.bodyCol}`}>
            <p className={styles.body}>
              At Auratek, every piece passes through multiple stages of careful
              craftsmanship before it reaches you. Every scratch is polished
              by hand, not a machine. Every stone is chosen by eye,
              not a spreadsheet.
            </p>
            <p className={styles.body}>
              We call this{' '}
              <em>slow luxury</em> — because quality takes time.
            </p>

            <Link to="/craftsmanship" className={styles.cta}>
              <span>Discover Our Atelier</span>
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M0 5h20M17 1l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cinematic media */}
        <div className={`reveal ${styles.mediaWrap}`}>
          <div className={styles.mediaMain}>
            <img
              src="/images/craftsmanship-main.jpg"
              alt="A master craftsman setting a diamond in an Auratek workshop"
              loading="lazy"
            />
          </div>
          <div className={styles.mediaSmall1}>
            <img
              src="/images/eternity-band.jpg"
              alt="Precision jewelry tools at the Auratek atelier"
              loading="lazy"
            />
          </div>
          <div className={styles.mediaSmall2}>
            <img
              src="/images/craftsmanship-diamonds.jpg"
              alt="Loose diamonds being sorted by an Auratek gemmologist"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4-step process */}
        <ol className={styles.process}>
          {PROCESS.map((p, i) => (
            <li
              key={p.step}
              className={`${styles.processItem} reveal reveal--delay-${i + 1}`}
            >
              <span className={styles.processIcon}>{p.icon}</span>
              <span className={styles.processStep}>{p.step}</span>
              <h3 className={styles.processTitle}>{p.title}</h3>
              <p className={styles.processBody}>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Craftsmanship;
