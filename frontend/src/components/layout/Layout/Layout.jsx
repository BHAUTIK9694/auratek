import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { InquiryModal } from '@components/ui';
import styles from './Layout.module.css';

const Layout = () => {
  const { pathname } = useLocation();
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <button 
        className={styles.fab} 
        onClick={() => setShowInquiry(true)}
        aria-label="Contact Us"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      </button>

      {/* Inquiry Modal */}
      {showInquiry && (
        <InquiryModal 
          productName="General Inquiry" 
          onClose={() => setShowInquiry(false)} 
        />
      )}
    </div>
  );
};

export default Layout;
