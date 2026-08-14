import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/layout';
import {
  Home,
  Contact,
  Privacy,
  Terms,
  Collections,
  Rings,
  Necklaces,
  Earrings,
  Bridal,
  CraftsmanshipPage,
  NewArrivalsPage,
  Wedding,
  DailyWear,
  About,
  ComingSoon,
} from '@pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />

          {/* Shop / Category pages */}
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<Collections />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<ComingSoon title="Bracelets" subtitle="Tennis · Cuffs · Bangles" description="Elegant bracelets that move with you — coming soon." />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/mens" element={<ComingSoon title="Men's Collection" subtitle="Signet Rings · Chains · Cufflinks" description="Modern jewelry for the discerning man — coming soon." />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/daily-wear" element={<DailyWear />} />

          {/* Content pages */}
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />

          {/* Legal pages */}
          <Route path="/accessibility" element={<ComingSoon title="Accessibility" subtitle="Inclusive by Design" description="Our commitment to making auratek.com accessible to everyone." />} />

          {/* Catch-all */}
          <Route path="*" element={<ComingSoon title="Page Not Found" description="The page you're looking for doesn't exist. Let's take you home." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
