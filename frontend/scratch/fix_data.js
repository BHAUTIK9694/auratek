const fs = require('fs');
const path = require('path');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

const exactContent = `/**
 * Auratek Home — mock data (products, categories, testimonials, journal).
 *
 * All imagery is stored locally in /public/images/ for reliability.
 */

export const HERO_SLIDES = [
  {
    eyebrow: 'New Drop · Aurum Solstice',
    title: 'Gold that\\ncatches fire.',
    text:
      '18k rose gold, sunlit champagne diamonds, and designs that refuse to whisper. This is jewelry that announces you.',
    ctaPrimary: { label: 'Shop the Drop', to: '/collections/aurum-solstice' },
    ctaSecondary: { label: 'All Collections', to: '/collections' },
    image: '/images/aurum-solstice.jpg',
    tag: 'Just Dropped',
  },
  {
    eyebrow: 'Made for Forever',
    title: 'Your day.\\nYour diamonds.',
    text:
      'Engagement rings, wedding bands, and statement pieces — designed for the moments that change everything.',
    ctaPrimary: { label: 'Explore Bridal', to: '/bridal' },
    ctaSecondary: { label: 'Talk to Us', to: '/contact' },
    image: '/images/bridal-category.jpg',
    tag: 'Bridal',
  },
  {
    eyebrow: 'Everyday Luxury',
    title: 'Wear it.\\nOwn it.',
    text:
      'Lightweight gold, delicate diamonds. Pieces designed to live on your skin — from morning coffee to midnight.',
    ctaPrimary: { label: 'Shop Daily Wear', to: '/daily-wear' },
    ctaSecondary: { label: 'New Arrivals', to: '/new-arrivals' },
    image: '/images/celestial-muse.jpg',
    tag: 'Bestsellers',
  },
];

export const CATEGORIES = [
  {
    title: 'Rings',
    subtitle: 'Solitaires · Cocktail · Bands',
    image: '/images/rings-category.jpg',
    to: '/rings',
    size: 'lg',
  },
  {
    title: 'Necklaces',
    subtitle: 'Chokers · Pendants · Chains',
    image: '/images/necklaces-category.jpg',
    to: '/necklaces',
    size: 'md',
  },
  {
    title: 'Earrings',
    subtitle: 'Studs · Hoops · Chandeliers',
    image: '/images/earrings-category.jpg',
    to: '/earrings',
    size: 'md',
  },
  {
    title: 'Bridal Sets',
    subtitle: 'Engagement · Anniversary',
    image: '/images/layered-diamond-emerald-haaram.jpeg',
    to: '/collections?category=Bridal Sets',
    size: 'lg',
  },
  {
    title: 'Vaddanam',
    subtitle: 'South Indian · Waist Belts',
    image: '/images/vaddanam-3.png',
    to: '/collections?category=Vaddanam',
    size: 'md',
  },
];

export const NEW_ARRIVALS = [`;

let dataJsContent = fs.readFileSync(dataFile, 'utf-8');
const newArrivalsIndex = dataJsContent.indexOf('export const NEW_ARRIVALS = [');

if (newArrivalsIndex !== -1) {
  // Extract everything from NEW_ARRIVALS onwards
  const remaining = dataJsContent.substring(newArrivalsIndex + 'export const NEW_ARRIVALS = ['.length);
  fs.writeFileSync(dataFile, exactContent + remaining);
  console.log('Fixed data.js syntax');
} else {
  console.log('Could not find NEW_ARRIVALS array');
}
