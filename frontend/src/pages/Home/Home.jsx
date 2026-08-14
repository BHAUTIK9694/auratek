import React from 'react';
import { MarqueeStrip, TrustBar } from '@components/ui';
import {
  HeroSection,
  FeaturedSpotlight,
  CategoryGrid,
  ShopByOccasion,
  NewArrivals,
  SignatureCollection,
  ShopByMetal,
  Craftsmanship,
  StyleGuide,
  WhyAuratek,
  Testimonials,
  Instagram,
  FinalCta,
} from './sections';

const Home = () => {
  return (
    <>
      <HeroSection />

      <TrustBar variant="cream" />

      <FeaturedSpotlight />

      <CategoryGrid />

      <ShopByOccasion />

      <SignatureCollection />

      <NewArrivals />

      <ShopByMetal />

      <Craftsmanship />

      <MarqueeStrip
        variant="light"
        items={[
          'Handcrafted in India',
          'BIS Hallmarked Gold',
          'Certified Natural Diamonds',
          'Lifetime Craftsmanship',
          'Ethically Sourced',
          'Premium Quality',
        ]}
      />

      <StyleGuide />

      <WhyAuratek />

      <Testimonials />

      <Instagram />

      <FinalCta />
    </>
  );
};

export default Home;
