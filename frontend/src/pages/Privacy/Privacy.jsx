import React from 'react';
import siteConfig from '@config/siteConfig';
import styles from './Privacy.module.css';

const Privacy = () => {
  const { brand, contact, address } = siteConfig;

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/bridal-category.jpg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            <span className={styles.heroLine} />
            Legal
            <span className={styles.heroLine} />
          </p>
          <h1 className={styles.heroTitle}>
            Privacy <em>Policy</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Your trust matters. Here's how we protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated: January 1, 2025</p>

          <div className={styles.content}>
            <h2>1. Introduction</h2>
            <p>
              {brand.legalName} ("{brand.name}", "we", "our", "us") is committed to protecting
              your personal information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your data when you visit our website or make a purchase.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed securely via third-party gateways)</li>
              <li>Browsing behaviour and device information via cookies</li>
              <li>Communication preferences</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Process and fulfil orders</li>
              <li>Provide customer support and concierge services</li>
              <li>Send marketing communications (only with your consent)</li>
              <li>Improve our website and personalise your experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We share data only with trusted
              service providers (payment processors, shipping partners, analytics tools)
              who are contractually obligated to protect your data.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL encryption,
              secure servers, and regular security audits. However, no method of electronic
              transmission is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request data portability</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience, analyse site traffic,
              and personalise content. You can manage cookie preferences in your browser settings.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Changes will be posted on this page
              with an updated revision date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For privacy-related inquiries, contact us at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
              <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>.
            </p>
            <p>
              {brand.legalName}<br />
              {address.full}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
