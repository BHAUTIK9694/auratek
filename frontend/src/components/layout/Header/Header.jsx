import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo, AnnouncementBar } from '@components/ui';
import styles from './Header.module.css';

/**
 * Navigation data. Each item can carry a `mega` block that renders a
 * multi-column preview under the top bar (Tanishq / Cartier style).
 */
const NAV = [
  {
    label: 'Collections',
    to: '/collections',
    mega: {
      columns: [
        {
          heading: 'Signature',
          links: [
            { label: 'Aurum Solstice', to: '/collections/aurum-solstice' },
            { label: 'Celestial Muse', to: '/collections/celestial-muse' },
            { label: 'Petals of Fire', to: '/collections/petals-of-fire' },
            { label: 'Nirvaana Heritage', to: '/collections/nirvaana' },
          ],
        },
        {
          heading: 'Occasions',
          links: [
            { label: 'Bridal', to: '/bridal' },
            { label: 'Everyday Icons', to: '/collections/everyday' },
            { label: 'Cocktail', to: '/collections/cocktail' },
            { label: 'Gifting', to: '/collections/gifting' },
          ],
        },
        {
          heading: 'The Editor’s Edit',
          links: [
            { label: 'New Arrivals', to: '/new-arrivals' },
            { label: 'Bestsellers', to: '/bestsellers' },
            { label: 'Limited Editions', to: '/limited-editions' },
            { label: 'The Journal', to: '/journal' },
          ],
        },
      ],
      feature: {
        image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
        title: 'The Aurum Solstice',
        text: 'Sunlit diamonds set in 18k rose gold. A limited seasonal edition.',
        cta: 'Explore Collection',
        to: '/collections/aurum-solstice',
      },
    },
  },
  {
    label: 'Rings',
    to: '/rings',
    mega: {
      columns: [
        {
          heading: 'Style',
          links: [
            { label: 'Solitaires', to: '/rings/solitaires' },
            { label: 'Cocktail Rings', to: '/rings/cocktail' },
            { label: 'Everyday Bands', to: '/rings/bands' },
            { label: 'Eternity', to: '/rings/eternity' },
          ],
        },
        {
          heading: 'Metal',
          links: [
            { label: '18k Yellow Gold', to: '/rings?metal=yellow' },
            { label: '18k Rose Gold', to: '/rings?metal=rose' },
            { label: '18k White Gold', to: '/rings?metal=white' },
            { label: 'Platinum 950', to: '/rings?metal=platinum' },
          ],
        },
        {
          heading: 'By Occasion',
          links: [
            { label: 'Engagement', to: '/rings/engagement' },
            { label: 'Anniversary', to: '/rings/anniversary' },
            { label: 'Gifting', to: '/rings/gifting' },
          ],
        },
      ],
      feature: {
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        title: 'Solitaire, Reimagined',
        text: 'A single flawless stone, cradled in hand-forged bands.',
        cta: 'Shop Solitaires',
        to: '/rings/solitaires',
      },
    },
  },
  {
    label: 'Necklaces',
    to: '/necklaces',
    mega: {
      columns: [
        {
          heading: 'Style',
          links: [
            { label: 'Chokers', to: '/necklaces/chokers' },
            { label: 'Pendants', to: '/necklaces/pendants' },
            { label: 'Chains', to: '/necklaces/chains' },
            { label: 'Statement', to: '/necklaces/statement' },
          ],
        },
        {
          heading: 'Length',
          links: [
            { label: 'Choker · 14"', to: '/necklaces?length=choker' },
            { label: 'Princess · 18"', to: '/necklaces?length=princess' },
            { label: 'Matinée · 22"', to: '/necklaces?length=matinee' },
            { label: 'Opera · 28"', to: '/necklaces?length=opera' },
          ],
        },
      ],
      feature: {
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80',
        title: 'Celestial Muse',
        text: 'Star-cut diamonds, hand-set on a whisper-thin gold chain.',
        cta: 'Discover',
        to: '/collections/celestial-muse',
      },
    },
  },
  {
    label: 'Earrings',
    to: '/earrings',
    mega: {
      columns: [
        {
          heading: 'Style',
          links: [
            { label: 'Studs', to: '/earrings/studs' },
            { label: 'Hoops', to: '/earrings/hoops' },
            { label: 'Chandeliers', to: '/earrings/chandeliers' },
            { label: 'Ear Cuffs', to: '/earrings/cuffs' },
          ],
        },
      ],
      feature: {
        image: 'https://images.unsplash.com/photo-1535632066274-8c9569fbd9d2?auto=format&fit=crop&w=800&q=80',
        title: 'Petal Studs',
        text: 'Rose-cut diamonds shaped as lotus petals.',
        cta: 'Explore',
        to: '/earrings/studs',
      },
    },
  },
  { label: 'Bridal', to: '/bridal' },
  { label: 'Craftsmanship', to: '/craftsmanship' },
  { label: 'Journal', to: '/journal' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(null);
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

  const currentMega = openMega != null ? NAV[openMega]?.mega : null;

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      onMouseLeave={() => setOpenMega(null)}
    >
      <AnnouncementBar />

      <div className={styles.bar}>
        <div className={styles.inner}>
          {/* Left group: mobile toggle + primary nav */}
          <div className={styles.leftGroup}>
            <button
              className={styles.menuToggle}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className={`${styles.menuBar} ${mobileOpen ? styles.mBarA : ''}`} />
              <span className={`${styles.menuBar} ${mobileOpen ? styles.mBarB : ''}`} />
              <span className={`${styles.menuBar} ${mobileOpen ? styles.mBarC : ''}`} />
            </button>

            <nav className={styles.nav} aria-label="Primary">
              {NAV.map((item, i) => (
                <div
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() => item.mega && setOpenMega(i)}
                  onFocus={() => item.mega && setOpenMega(i)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Center: Logo */}
          <Link to="/" className={styles.logo} aria-label="Auratek home">
            <Logo variant="full" size="md" color="dark" />
          </Link>

          {/* Right: utilities */}
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="11" cy="11" r="7.5" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Book an appointment">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M8 3v4M16 3v4M3 10h18" />
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button className={`${styles.iconBtn} ${styles.bagBtn}`} aria-label="Shopping bag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 7h12l-1 14H7L6 7z" />
                <path d="M9 7a3 3 0 1 1 6 0" />
              </svg>
              <span className={styles.bagCount} aria-label="Items in bag">2</span>
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <div
          className={`${styles.megaPanel} ${currentMega ? styles.megaOpen : ''}`}
          onMouseEnter={() => { /* keep open */ }}
        >
          <div className={styles.megaInner}>
            {currentMega ? (
              <>
                <div className={styles.megaColumns}>
                  {currentMega.columns.map((col) => (
                    <div key={col.heading} className={styles.megaCol}>
                      <p className={styles.megaHeading}>{col.heading}</p>
                      <ul className={styles.megaList}>
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <Link to={l.to} className={styles.megaLink}>
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {currentMega.feature && (
                  <Link to={currentMega.feature.to} className={styles.megaFeature}>
                    <div
                      className={styles.megaFeatureImg}
                      style={{ backgroundImage: `url(${currentMega.feature.image})` }}
                    />
                    <div className={styles.megaFeatureBody}>
                      <p className={styles.megaEyebrow}>Editor&apos;s Edit</p>
                      <h4 className={styles.megaFeatureTitle}>{currentMega.feature.title}</h4>
                      <p className={styles.megaFeatureText}>{currentMega.feature.text}</p>
                      <span className={styles.megaFeatureCta}>
                        {currentMega.feature.cta}
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <path d="M0 4h16M13 1l3 3-3 3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ''}`}>
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
        <div className={styles.mobileFooter}>
          <Link to="/appointment" className={styles.mobileCta}>Book an Appointment</Link>
          <Link to="/stores" className={styles.mobileSecondary}>Find a Boutique</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
