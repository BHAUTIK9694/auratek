/**
 * Auratek — Centralized site configuration.
 *
 * All contact details (phone, email, WhatsApp, address, hours) live here.
 * Update this ONE file and the change applies across the entire website.
 */

const siteConfig = {
  brand: {
    name: 'Auratek',
    legalName: 'Auratek Jewels',
    tagline: 'Fine Jewelry for the Modern Connoisseur',
  },

  contact: {
    phone: '+91 70481 04795',
    phoneRaw: '+917048104795', // for tel: links
    whatsapp: '917048104795', // WhatsApp number with country code, no +
    email: 'auratekjewels@gmail.com',
    supportEmail: 'auratekjewels@gmail.com',
  },

  address: {
    line1: '3rd Floor, Office No. 307, Maldeep Apartment',
    line2: 'Bhoja Bhai ni Sheri, Near Patidar Bhavan',
    area: 'Mahidharpura, Haripura',
    city: 'Surat',
    state: 'Gujarat',
    zip: '395003',
    country: 'India',
    full: '3rd Floor, Office No. 307, Maldeep Apartment, Bhoja Bhai ni Sheri, Near Patidar Bhavan, Mahidharpura, Haripura, Surat, Gujarat 395003, India',
  },

  hours: {
    days: 'Mon–Sun',
    time: '11am to 8pm',
    timezone: 'IST',
    display: 'Mon–Sun · 11am to 8pm IST',
  },

  social: {
    instagram: 'https://www.instagram.com/auratekjewels/',
    pinterest: '',
    facebook: '',
    youtube: '',
  },
};

export default siteConfig;
