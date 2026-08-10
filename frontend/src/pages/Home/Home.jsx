import React from 'react';
import { MarqueeStrip, TrustBar, Newsletter } from '@components/ui';
import {
  HeroSection,
  CategoryGrid,
  NewArrivals,
  SignatureCollection,
  Craftsmanship,
  Testimonials,
  Journal,
  Instagram,
  Press,
  FinalCta,
} from './sections';
import styles from './Home.module.css';

/**
 * Auratek — Home page.
 *
 * Sections are composed in an editorial rhythm that mirrors the
 * navigation flow of premium jewellery houses:
 *
 *   1. Hero (rotating editorial slides)
 *   2. Trust bar (assurances)
 *   3. Category grid (shop by category)
 *   4. Signature collection feature
 *   5. New arrivals (products)
 *   6. Craftsmanship (heritage + process)
 *   7. Marquee ribbon (rhythm break)
 *   8. Testimonials + trust stats
 *   9. Journal (editorial content)
 *  10. Press bar
 *  11. Instagram feed
 *  12. Final CTA (book an appointment)
 *  13. Newsletter block on light background
 */
const Home = () => {
  return (
    <>
      <HeroSection />

      <TrustBar variant="cream" />

      <CategoryGrid />

      <SignatureCollection />

      <NewArrivals />

      <Craftsmanship />

      <MarqueeStrip
        variant="light"
        items={[
          'Handcrafted in India',
          'BIS Hallmarked Gold',
          'Certified Natural Diamonds',
          'Lifetime Craftsmanship',
          'Ethically Sourced',
          'Bespoke Ateliers',
        ]}
      />

      <Testimonials />

      <Journal />

      <Press />

      <Instagram />

      <FinalCta />

      <section className={styles.newsletterBlock} aria-labelledby="home-newsletter">
        <div className={styles.newsletterInner}>
          <Newsletter
            variant="light"
            eyebrow="The Auratek Atelier"
            title="Enter a world of quiet luxury."
            description="Discover new collections, private previews and stories from the workshop, straight to your inbox."
          />
        </div>
      </section>
    </>
  );
};

export default Home;
