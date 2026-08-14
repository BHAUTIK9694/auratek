import React, { useState } from 'react';
import siteConfig from '@config/siteConfig';
import styles from './Contact.module.css';

const Contact = () => {
  const { contact, address, hours, social } = siteConfig;

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // Simulated submission — wire to backend when available
    window.setTimeout(() => setStatus('success'), 1200);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to know more about Auratek's collections."
  );

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <img src="/images/craftsmanship-main.jpg" alt="" />
          <div className={styles.heroVeil} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            <span className={styles.heroLine} />
            Get in Touch
            <span className={styles.heroLine} />
          </p>
          <h1 className={styles.heroTitle}>
            We'd love to hear <em>from you</em>.
          </h1>
          <p className={styles.heroSubtitle}>
            Whether you have a question about a piece, need styling advice, or
            want to book a private appointment — our concierge is here for you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className={styles.optionsSection}>
        <div className={styles.container}>
          <div className={styles.options}>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles.whatsapp}`}
            >
              <span className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <h3 className={styles.cardTitle}>WhatsApp</h3>
              <p className={styles.cardDesc}>Chat with our concierge instantly</p>
              <span className={styles.cardCta}>Open WhatsApp →</span>
            </a>

            {/* Call */}
            <a
              href={`tel:${contact.phoneRaw}`}
              className={`${styles.card} ${styles.call}`}
            >
              <span className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>
              <h3 className={styles.cardTitle}>Call Us</h3>
              <p className={styles.cardDesc}>{contact.phone}</p>
              <span className={styles.cardCta}>Call now →</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className={`${styles.card} ${styles.email}`}
            >
              <span className={styles.cardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </span>
              <h3 className={styles.cardTitle}>Email</h3>
              <p className={styles.cardDesc}>{contact.email}</p>
              <span className={styles.cardCta}>Send email →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            {/* Form */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>
                Fill in the form below and our team will get back to you within 24 hours.
              </p>

              {status === 'success' ? (
                <div className={styles.successMsg} role="status" aria-live="polite">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-5" />
                  </svg>
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>Our concierge will reach out to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formRow}>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Full Name *</span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={styles.input}
                        required
                      />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Email Address *</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        autoComplete="email"
                        className={styles.input}
                        required
                      />
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Phone Number</span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        autoComplete="tel"
                        className={styles.input}
                      />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Subject</span>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className={styles.input}
                      />
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Message *</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className={`${styles.input} ${styles.textarea}`}
                      required
                    />
                  </label>

                  {status === 'error' && (
                    <p className={styles.errorMsg} role="alert">
                      Please fill in all required fields (name, email, message).
                    </p>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M0 5h16M12 1l4 4-4 4" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Visit Our Studio</h3>
                <p className={styles.infoText}>
                  {address.line1}<br />
                  {address.line2}<br />
                  {address.area}<br />
                  {address.city} {address.zip}, {address.country}
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Business Hours</h3>
                <p className={styles.infoText}>{hours.display}</p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Follow Us</h3>
                <div className={styles.socials}>
                  <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href={social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.mapTitle}>Find Us</h2>
          <div className={styles.mapWrap}>
            {/* Replace the src below with your Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.721481420845!2d72.82903017503654!3d21.20322038049005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ff35fe8759f%3A0xd9db483bde5745ea!2sAuratek%20jewels!5e0!3m2!1sen!2sin!4v1786715588285!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Auratek Jewels Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
