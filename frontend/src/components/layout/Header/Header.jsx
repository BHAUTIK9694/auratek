import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { Logo, AnnouncementBar } from '@components/ui';
import siteConfig from '@config/siteConfig';
import styles from './Header.module.css';

/**
 * Navigation data.
 */
const NAV = [
  { label: 'Collections', to: '/collections' },
  { label: 'Rings', to: '/rings' },
  { label: 'Necklaces', to: '/necklaces' },
  { label: 'Earrings', to: '/earrings' },
  { label: 'Bracelets', to: '/bracelets' },
  { label: 'Pendants', to: '/pendants' },
  { label: 'Bridal Sets', to: '/bridal' },
  { label: 'Vaddanam / South Indian', to: '/vaddanam' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const { contact } = siteConfig;
  const whatsappMsg = encodeURIComponent("Hi, I'd like to know more about Auratek.");

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <AnnouncementBar />

      <div className={styles.bar}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Auratek home">
            <Logo variant="full" size="lg" color="dark" />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className={styles.menuToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`${styles.menuBar} ${mobileOpen ? styles.mBarA : ''}`} />
            <span className={`${styles.menuBar} ${mobileOpen ? styles.mBarB : ''}`} />
            <span className={`${styles.menuBar} ${mobileOpen ? styles.mBarC : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer — rendered via portal to escape header stacking context */}
      {createPortal(
        <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {/* Drawer header */}
          <div className={styles.drawerHeader}>
            <Link to="/" className={styles.drawerLogo} aria-label="Auratek home" onClick={() => setMobileOpen(false)}>
              <Logo variant="full" size="lg" color="dark" />
            </Link>
            <button
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <svg width="14" height="10" viewBox="0 0 18 8" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M0 4h16M13 1l3 3-3 3" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className={styles.drawerFooter}>
            <div className={styles.drawerActions}>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerBtn}
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className={styles.drawerBtn}
              >
                <i className="fa-solid fa-phone"></i>
                <span>Call Us</span>
              </a>
            </div>
            <div className={styles.drawerLegal}>
              <Link to="/terms" onClick={() => setMobileOpen(false)}>Terms</Link>
              <span aria-hidden="true">·</span>
              <Link to="/privacy" onClick={() => setMobileOpen(false)}>Privacy</Link>
              <span aria-hidden="true">·</span>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
