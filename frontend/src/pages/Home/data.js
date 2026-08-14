/**
 * Auratek Home — mock data (products, categories, testimonials, journal).
 *
 * All imagery is stored locally in /public/images/ for reliability.
 */

export const HERO_SLIDES = [
  {
    eyebrow: 'New Drop · Aurum Solstice',
    title: 'Gold that\ncatches fire.',
    text:
      '18k rose gold, sunlit champagne diamonds, and designs that refuse to whisper. This is jewelry that announces you.',
    ctaPrimary: { label: 'Shop the Drop', to: '/collections/aurum-solstice' },
    ctaSecondary: { label: 'All Collections', to: '/collections' },
    image: '/images/aurum-solstice.jpg',
    tag: 'Just Dropped',
  },
  {
    eyebrow: 'Made for Forever',
    title: 'Your day.\nYour diamonds.',
    text:
      'Engagement rings, wedding bands, and statement pieces — designed for the moments that change everything.',
    ctaPrimary: { label: 'Explore Bridal', to: '/bridal' },
    ctaSecondary: { label: 'Talk to Us', to: '/contact' },
    image: '/images/bridal-category.jpg',
    tag: 'Bridal',
  },
  {
    eyebrow: 'Everyday Luxury',
    title: 'Wear it.\nOwn it.',
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
    title: 'Bracelets',
    subtitle: 'Tennis · Cuffs · Bangles',
    image: '/images/bracelets-category.jpg',
    to: '/bracelets',
    size: 'md',
  },
  {
    title: 'Bridal',
    subtitle: 'Engagement · Anniversary',
    image: '/images/bridal-category.jpg',
    to: '/bridal',
    size: 'lg',
  },
  {
    title: 'Men',
    subtitle: 'Signet Rings · Chains · Cufflinks',
    image: '/images/mens-category.jpg',
    to: '/mens',
    size: 'md',
  },
];

export const NEW_ARRIVALS = [
  {
    id: 'aur-01',
    name: 'Solstice Halo Solitaire',
    category: 'Rings · 18k Rose Gold',
    image: '/images/rings-category.jpg',
    imageAlt: '/images/eternity-band.jpg',
    price: '₹4,85,000',
    badge: 'new',
    tones: ['#F1C27D', '#E8E1D9', '#F4C3B0'],
  },
  {
    id: 'cel-14',
    name: 'Celestial Muse Pendant',
    category: 'Necklaces · 18k Yellow Gold',
    image: '/images/celestial-muse.jpg',
    imageAlt: '/images/celestial-pendant-alt.jpg',
    price: '₹2,15,000',
    originalPrice: '₹2,40,000',
    badge: 'bestseller',
    tones: ['#F1C27D', '#E8E1D9'],
  },
  {
    id: 'pet-08',
    name: 'Petal Rose Studs',
    category: 'Earrings · 18k Rose Gold',
    image: '/images/earrings-category.jpg',
    imageAlt: '/images/petal-studs-alt.jpg',
    price: '₹98,500',
    badge: 'new',
    tones: ['#F4C3B0', '#F1C27D'],
  },
  {
    id: 'nir-22',
    name: 'Nirvaana Tennis Bracelet',
    category: 'Bracelets · Platinum 950',
    image: '/images/bracelets-category.jpg',
    imageAlt: '/images/tennis-bracelet-alt.jpg',
    price: '₹6,20,000',
    badge: 'limited',
    tones: ['#E8E1D9'],
  },
  {
    id: 'aur-07',
    name: 'Aurum Bar Necklace',
    category: 'Necklaces · 18k Yellow Gold',
    image: '/images/necklaces-category.jpg',
    imageAlt: '/images/bar-necklace-alt.jpg',
    price: '₹1,42,000',
    tones: ['#F1C27D', '#E8E1D9', '#F4C3B0'],
  },
  {
    id: 'aur-11',
    name: 'Eternity Wedding Band',
    category: 'Rings · Platinum & Diamonds',
    image: '/images/eternity-band.jpg',
    imageAlt: '/images/eternity-band-alt.jpg',
    price: '₹2,05,000',
    tones: ['#E8E1D9', '#F1C27D'],
  },
  {
    id: 'cel-27',
    name: 'Astra Diamond Hoops',
    category: 'Earrings · 18k White Gold',
    image: '/images/diamond-hoops.jpg',
    imageAlt: '/images/petal-studs-alt.jpg',
    price: '₹1,58,000',
    badge: 'new',
    tones: ['#E8E1D9'],
  },
  {
    id: 'nir-03',
    name: 'Aria Chain Ring',
    category: 'Rings · 18k Yellow Gold',
    image: '/images/aria-chain-ring.jpg',
    imageAlt: '/images/aria-chain-ring-alt.jpg',
    price: '₹68,000',
    tones: ['#F1C27D', '#F4C3B0'],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'The stylist listened for an hour before she showed me anything. When she did, it was the ring I never knew I was looking for.',
    author: 'Ananya S.',
    location: 'Mumbai',
    piece: 'Solstice Halo Solitaire',
  },
  {
    quote:
      "You feel the care in every gram. My grandmother's pendant, remade, still carries her hands in it.",
    author: 'Ishaan K.',
    location: 'Bangalore',
    piece: 'Heritage Restoration',
  },
  {
    quote:
      'This is jewelry that quietly says everything. Nothing screams. Everything endures.',
    author: 'Meera N.',
    location: 'Delhi',
    piece: 'Celestial Muse Set',
  },
];

export const JOURNAL_POSTS = [];

export const INSTAGRAM_TILES = [
  '/images/celestial-muse.jpg',
  '/images/rings-category.jpg',
  '/images/earrings-category.jpg',
  '/images/bracelets-category.jpg',
  '/images/bridal-category.jpg',
  '/images/layering-guide.jpg',
];

export const PRESS_LOGOS = [];
