import React from 'react';
import siteConfig from '@config/siteConfig';
import styles from './Terms.module.css';

const Terms = () => {
  const { brand, contact, address } = siteConfig;

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/necklaces-category.jpg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            <span className={styles.heroLine} />
            Legal
            <span className={styles.heroLine} />
          </p>
          <h1 className={styles.heroTitle}>
            Terms &amp; <em>Conditions</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated: January 1, 2025</p>

          <div className={styles.content}>
            <h2>1. General</h2>
            <p>
              These Terms and Conditions govern your use of the {brand.name} website and
              the purchase of products from {brand.legalName}. By accessing our website or
              placing an order, you agree to be bound by these terms.
            </p>

            <h2>2. Products &amp; Pricing</h2>
            <ul>
              <li>All products are subject to availability.</li>
              <li>Prices are displayed in Indian Rupees (INR) and include applicable taxes unless stated otherwise.</li>
              <li>We reserve the right to modify prices without prior notice.</li>
              <li>Product images are representative; slight variations in colour and craftsmanship are inherent to handmade jewelry.</li>
            </ul>

            <h2>3. Orders &amp; Payment</h2>
            <ul>
              <li>Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order.</li>
              <li>Payment is accepted via credit/debit cards, UPI, net banking, and EMI options.</li>
              <li>All transactions are processed through secure, PCI-compliant payment gateways.</li>
            </ul>

            <h2>4. Shipping &amp; Delivery</h2>
            <ul>
              <li>We ship across India and internationally via fully insured couriers.</li>
              <li>Estimated delivery times are indicative and may vary due to unforeseen circumstances.</li>
              <li>Risk of loss passes to the buyer upon delivery to the shipping carrier.</li>
            </ul>

            <h2>5. Returns &amp; Exchanges</h2>
            <ul>
              <li>Returns are accepted within 15 days of delivery for unworn, unaltered products in original packaging.</li>
              <li>Custom and engraved pieces are non-returnable.</li>
              <li>Refunds are processed to the original payment method within 7–10 business days.</li>
            </ul>

            <h2>6. Warranty</h2>
            <p>
              All {brand.name} pieces come with a lifetime warranty covering manufacturing
              defects. This warranty does not cover damage from misuse, accidents, or
              unauthorized alterations.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website — including designs, images, text, logos, and
              trademarks — is the property of {brand.legalName} and protected by
              intellectual property laws. Unauthorized use is prohibited.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {brand.legalName} shall not be
              liable for any indirect, incidental, or consequential damages arising from
              the use of our website or products.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject
              to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions regarding these terms, contact us at{' '}
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

export default Terms;
