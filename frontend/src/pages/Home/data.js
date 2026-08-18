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
  }
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
    title: 'Pendants',
    subtitle: 'Solitaire · Halo · Motif',
    image: '/images/pendant-collection-1.jpeg',
    to: '/collections?category=Pendants',
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
    image: '/images/bracelet-client-1.jpeg',
    to: '/collections?category=Bracelets',
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
  }
];

export const NEW_ARRIVALS = [
  {
  id: 'ring-1',
  name: 'Elegant Engagement Ring 1',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-1.jpeg',
  imageAlt: '/images/ring-collection-1.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-2',
  name: 'Elegant Engagement Ring 2',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-2.jpeg',
  imageAlt: '/images/ring-collection-2.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-3',
  name: 'Elegant Engagement Ring 3',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-3.jpeg',
  imageAlt: '/images/ring-collection-3.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-5',
  name: 'Elegant Engagement Ring 5',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-5.jpeg',
  imageAlt: '/images/ring-collection-5.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-7',
  name: 'Elegant Engagement Ring 7',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-7.jpeg',
  imageAlt: '/images/ring-collection-7.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-10',
  name: 'Elegant Engagement Ring 10',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-10.jpeg',
  imageAlt: '/images/ring-collection-10.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-11',
  name: 'Elegant Engagement Ring 11',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-11.jpeg',
  imageAlt: '/images/ring-collection-11.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-12',
  name: 'Elegant Engagement Ring 12',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-12.jpeg',
  imageAlt: '/images/ring-collection-12.jpeg',
  tones: ['#E8E1D9']
},
  {
  id: 'ring-13',
  name: 'Elegant Engagement Ring 13',
  category: 'Rings · 18k White Gold',
  image: '/images/ring-collection-13.jpeg',
  imageAlt: '/images/ring-collection-13.jpeg',
  tones: ['#E8E1D9']
},

  {
  id: 'bridal-01',
  name: 'Antique Emerald Long Necklace Set',
  category: 'Bridal Sets · 18k Yellow Gold',
  image: '/images/antique-emerald-long-necklace-set.jpeg',
  imageAlt: '/images/antique-emerald-long-necklace-set.jpeg',
  badge: 'new',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'bridal-02',
  name: 'Layered Emerald Drop Haaram',
  category: 'Necklaces · 18k White Gold',
  image: '/images/layered-emerald-drop-haaram.jpeg',
  imageAlt: '/images/layered-emerald-drop-haaram.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-03',
  name: 'Three-Layer Diamond Long Necklace',
  category: 'Necklaces · 18k White Gold',
  image: '/images/three-layer-diamond-long-necklace.jpeg',
  imageAlt: '/images/three-layer-diamond-long-necklace.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-04',
  name: 'Pear Emerald Diamond Choker',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/pear-emerald-diamond-choker.jpeg',
  imageAlt: '/images/pear-emerald-diamond-choker.jpeg',
  badge: 'bestseller',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-05',
  name: 'Square Emerald Diamond Choker',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/square-emerald-diamond-choker.jpeg',
  imageAlt: '/images/square-emerald-diamond-choker.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-06',
  name: 'V-Shape Layered Diamond Haaram',
  category: 'Necklaces · 18k White Gold',
  image: '/images/v-shape-layered-diamond-haaram.jpeg',
  imageAlt: '/images/v-shape-layered-diamond-haaram.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-07',
  name: 'Antique Diamond Necklace with Large Pendant',
  category: 'Necklaces · 18k Yellow Gold',
  image: '/images/antique-diamond-necklace-large-pendant.jpeg',
  imageAlt: '/images/antique-diamond-necklace-large-pendant.jpeg',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'bridal-08',
  name: 'Five-Layer Diamond Haaram',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/five-layer-diamond-haaram.jpeg',
  imageAlt: '/images/five-layer-diamond-haaram.jpeg',
  badge: 'limited',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-09',
  name: 'Heavy Bridal Diamond Choker',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/heavy-bridal-diamond-choker.jpeg',
  imageAlt: '/images/heavy-bridal-diamond-choker.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-10',
  name: 'Diamond Necklace with Emerald Beads',
  category: 'Necklaces · 18k White Gold',
  image: '/images/diamond-necklace-emerald-beads.jpeg',
  imageAlt: '/images/diamond-necklace-emerald-beads.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-11',
  name: 'Majestic Bridal Diamond Necklace',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/majestic-bridal-diamond-necklace.jpeg',
  imageAlt: '/images/majestic-bridal-diamond-necklace.jpeg',
  tones: [
    '#E8E1D9'
  ]
}
,
  {
  id: 'bridal-12',
  name: 'Elegant Emerald Pearl Diamond Necklace',
  category: 'Necklaces · 18k Yellow Gold',
  image: '/images/elegant-emerald-pearl-diamond-necklace.jpeg',
  imageAlt: '/images/elegant-emerald-pearl-diamond-necklace.jpeg',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'bridal-13',
  name: 'Layered Diamond Necklace with Emerald Pendant',
  category: 'Necklaces · 18k White Gold',
  image: '/images/layered-diamond-emerald-pendant.jpeg',
  imageAlt: '/images/layered-diamond-emerald-pendant.jpeg',
  badge: 'new',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-14',
  name: 'Delicate V-Shape Emerald Diamond Necklace',
  category: 'Necklaces · 18k White Gold',
  image: '/images/delicate-v-shape-emerald-diamond.jpeg',
  imageAlt: '/images/delicate-v-shape-emerald-diamond.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-15',
  name: 'Extravagant Tanzanite Diamond Necklace',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/extravagant-tanzanite-diamond.jpeg',
  imageAlt: '/images/extravagant-tanzanite-diamond.jpeg',
  badge: 'limited',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-16',
  name: 'Royal Ruby Emerald Diamond Necklace',
  category: 'Bridal Sets · 18k Yellow Gold',
  image: '/images/royal-ruby-emerald-diamond.jpeg',
  imageAlt: '/images/royal-ruby-emerald-diamond.jpeg',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'bridal-17',
  name: 'Multi-Layered Emerald Diamond Haaram',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/multi-layered-emerald-diamond-haaram.jpeg',
  imageAlt: '/images/multi-layered-emerald-diamond-haaram.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-18',
  name: 'Peacock Coral Diamond Haaram',
  category: 'Bridal Sets · 18k Yellow Gold',
  image: '/images/peacock-coral-diamond-haaram.jpeg',
  imageAlt: '/images/peacock-coral-diamond-haaram.jpeg',
  badge: 'bestseller',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'bridal-19',
  name: 'V-Shape Emerald Drop Diamond Choker',
  category: 'Necklaces · 18k White Gold',
  image: '/images/v-shape-emerald-drop-diamond-choker.jpeg',
  imageAlt: '/images/v-shape-emerald-drop-diamond-choker.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-20',
  name: 'Round Emerald Pendant Diamond Choker',
  category: 'Necklaces · 18k White Gold',
  image: '/images/round-emerald-pendant-diamond-choker.jpeg',
  imageAlt: '/images/round-emerald-pendant-diamond-choker.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'bridal-21',
  name: 'Heavy Wide Emerald Diamond Choker',
  category: 'Bridal Sets · 18k White Gold',
  image: '/images/heavy-wide-emerald-diamond-choker.jpeg',
  imageAlt: '/images/heavy-wide-emerald-diamond-choker.jpeg',
  tones: [
    '#E8E1D9'
  ]
}
,
  {
  id: 'vaddanam-01',
  name: 'Antique Diamond Emerald Vaddanam',
  category: 'Vaddanam / South Indian · 18k White Gold',
  image: '/images/vaddanam-1.png',
  imageAlt: '/images/vaddanam-1.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'vaddanam-02',
  name: 'Heavy Bridal Emerald Vaddanam',
  category: 'Vaddanam / South Indian · 18k White Gold',
  image: '/images/vaddanam-2.png',
  imageAlt: '/images/vaddanam-2.png',
  badge: 'bestseller',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'vaddanam-03',
  name: 'Traditional Gold Diamond Vaddanam',
  category: 'Vaddanam / South Indian · 18k Yellow Gold',
  image: '/images/vaddanam-3.png',
  imageAlt: '/images/vaddanam-3.png',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'vaddanam-04',
  name: 'Lakshmi Motif Diamond Vaddanam',
  category: 'Vaddanam / South Indian · 18k Yellow Gold',
  image: '/images/vaddanam-4.png',
  imageAlt: '/images/vaddanam-4.png',
  badge: 'new',
  tones: [
    '#F1C27D'
  ]
},
  {
  id: 'vaddanam-05',
  name: 'Intricate Diamond Vaddanam with Emerald Centers',
  category: 'Vaddanam / South Indian · 18k Yellow Gold',
  image: '/images/vaddanam-5.png',
  imageAlt: '/images/vaddanam-5.png',
  tones: [
    '#F1C27D'
  ]
}
,
  {
  id: 'earring-1',
  name: 'Radiant Rose Gold Drop Earrings',
  category: 'Earrings · 18k White Gold',
  image: '/images/earring-collection-1.jpeg',
  imageAlt: '/images/earring-collection-1.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-2',
  name: 'Luminous White Gold Drop Earrings',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-2.jpeg',
  imageAlt: '/images/earring-collection-2.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-3',
  name: 'Regal White Gold Hoops',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-3.jpeg',
  imageAlt: '/images/earring-collection-3.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-4',
  name: 'Timeless White Gold Drop Earrings',
  category: 'Earrings · 18k White Gold',
  image: '/images/earring-collection-4.jpeg',
  imageAlt: '/images/earring-collection-4.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-5',
  name: 'Majestic White Gold Jhumkas',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-5.jpeg',
  imageAlt: '/images/earring-collection-5.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-6',
  name: 'Elegant Pearl Jhumkas',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-6.jpeg',
  imageAlt: '/images/earring-collection-6.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-7',
  name: 'Delicate Rose Gold Jhumkas',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-7.jpeg',
  imageAlt: '/images/earring-collection-7.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-8',
  name: 'Radiant Yellow Gold Studs',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-8.jpeg',
  imageAlt: '/images/earring-collection-8.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-9',
  name: 'Delicate Pearl Studs',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-9.jpeg',
  imageAlt: '/images/earring-collection-9.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-10',
  name: 'Delicate Diamond Dusters',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-10.jpeg',
  imageAlt: '/images/earring-collection-10.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-11',
  name: 'Classic Rose Gold Chandeliers',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-11.jpeg',
  imageAlt: '/images/earring-collection-11.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-12',
  name: 'Classic Rose Gold Drop Earrings',
  category: 'Earrings · 18k White Gold',
  image: '/images/earring-collection-12.jpeg',
  imageAlt: '/images/earring-collection-12.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-13',
  name: 'Classic Pearl Studs',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-13.jpeg',
  imageAlt: '/images/earring-collection-13.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-14',
  name: 'Majestic Rose Gold Chandeliers',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-14.jpeg',
  imageAlt: '/images/earring-collection-14.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-15',
  name: 'Classic Pearl Jhumkas',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-15.jpeg',
  imageAlt: '/images/earring-collection-15.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-16',
  name: 'Elegant Ruby Drop Earrings',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-16.jpeg',
  imageAlt: '/images/earring-collection-16.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-17',
  name: 'Delicate White Gold Jhumkas',
  category: 'Earrings · Platinum',
  image: '/images/earring-collection-17.jpeg',
  imageAlt: '/images/earring-collection-17.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-18',
  name: 'Classic Yellow Gold Chandeliers',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-18.jpeg',
  imageAlt: '/images/earring-collection-18.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-19',
  name: 'Elegant Diamond Drop Earrings',
  category: 'Earrings · 18k White Gold',
  image: '/images/earring-collection-19.jpeg',
  imageAlt: '/images/earring-collection-19.jpeg',
  tones: [
    '#E8E1D9'
  ]
}
,
  {
  id: 'bracelet-1',
  name: 'Auratek Bracelet 01',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-1.jpeg',
  imageAlt: 'Auratek bracelet 01',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-2',
  name: 'Auratek Bracelet 02',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-2.jpeg',
  imageAlt: 'Auratek bracelet 02',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-3',
  name: 'Auratek Bracelet 03',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-3.jpeg',
  imageAlt: 'Auratek bracelet 03',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-4',
  name: 'Auratek Bracelet 04',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-4.jpeg',
  imageAlt: 'Auratek bracelet 04',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-5',
  name: 'Auratek Bracelet 05',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-5.jpeg',
  imageAlt: 'Auratek bracelet 05',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-6',
  name: 'Auratek Bracelet 06',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-6.jpeg',
  imageAlt: 'Auratek bracelet 06',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-7',
  name: 'Auratek Bracelet 07',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-7.jpeg',
  imageAlt: 'Auratek bracelet 07',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-8',
  name: 'Auratek Bracelet 08',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-8.jpeg',
  imageAlt: 'Auratek bracelet 08',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-9',
  name: 'Auratek Bracelet 09',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-9.jpeg',
  imageAlt: 'Auratek bracelet 09',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-10',
  name: 'Auratek Bracelet 10',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-10.jpeg',
  imageAlt: 'Auratek bracelet 10',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-11',
  name: 'Auratek Bracelet 11',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-11.jpeg',
  imageAlt: 'Auratek bracelet 11',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-12',
  name: 'Auratek Bracelet 12',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-12.jpeg',
  imageAlt: 'Auratek bracelet 12',
  tones: ['#E8E1D9']
},
  {
  id: 'bracelet-13',
  name: 'Auratek Bracelet 13',
  category: 'Bracelets · Fine Jewelry',
  image: '/images/bracelet-client-13.jpeg',
  imageAlt: 'Auratek bracelet 13',
  tones: ['#E8E1D9']
},
  {
  id: 'pendant-1',
  name: 'Signature Sapphire Motif Pendant',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-1.jpeg',
  imageAlt: '/images/pendant-collection-1.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-2',
  name: 'Radiant Pearl Pendant',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-2.jpeg',
  imageAlt: '/images/pendant-collection-2.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-3',
  name: 'Delicate Yellow Gold Motif Pendant',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-3.jpeg',
  imageAlt: '/images/pendant-collection-3.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-4',
  name: 'Radiant Rose Gold Motif Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-4.jpeg',
  imageAlt: '/images/pendant-collection-4.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-5',
  name: 'Classic Yellow Gold Medallion',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-5.jpeg',
  imageAlt: '/images/pendant-collection-5.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-6',
  name: 'Majestic White Gold Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-6.jpeg',
  imageAlt: '/images/pendant-collection-6.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-7',
  name: 'Ornate White Gold Motif Pendant',
  category: 'Pendants · 18k White Gold',
  image: '/images/pendant-collection-7.jpeg',
  imageAlt: '/images/pendant-collection-7.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-8',
  name: 'Luminous Diamond Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-8.jpeg',
  imageAlt: '/images/pendant-collection-8.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-9',
  name: 'Regal Yellow Gold Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-9.jpeg',
  imageAlt: '/images/pendant-collection-9.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-10',
  name: 'Classic Pearl Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-10.jpeg',
  imageAlt: '/images/pendant-collection-10.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-11',
  name: 'Intricate Ruby Motif Pendant',
  category: 'Pendants · 18k White Gold',
  image: '/images/pendant-collection-11.jpeg',
  imageAlt: '/images/pendant-collection-11.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-12',
  name: 'Regal Ruby Pendant',
  category: 'Pendants · 18k White Gold',
  image: '/images/pendant-collection-12.jpeg',
  imageAlt: '/images/pendant-collection-12.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-13',
  name: 'Signature Ruby Pendant',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-13.jpeg',
  imageAlt: '/images/pendant-collection-13.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-14',
  name: 'Signature Diamond Motif Pendant',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-14.jpeg',
  imageAlt: '/images/pendant-collection-14.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-15',
  name: 'Intricate Sapphire Drop Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-15.jpeg',
  imageAlt: '/images/pendant-collection-15.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-16',
  name: 'Radiant Diamond Pendant',
  category: 'Pendants · 18k Rose Gold',
  image: '/images/pendant-collection-16.jpeg',
  imageAlt: '/images/pendant-collection-16.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-17',
  name: 'Classic Rose Gold Medallion',
  category: 'Pendants · 18k Yellow Gold',
  image: '/images/pendant-collection-17.jpeg',
  imageAlt: '/images/pendant-collection-17.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-18',
  name: 'Majestic Rose Gold Motif Pendant',
  category: 'Pendants · 18k White Gold',
  image: '/images/pendant-collection-18.jpeg',
  imageAlt: '/images/pendant-collection-18.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'pendant-19',
  name: 'Classic Rose Gold Pendant',
  category: 'Pendants · 18k White Gold',
  image: '/images/pendant-collection-19.jpeg',
  imageAlt: '/images/pendant-collection-19.jpeg',
  tones: [
    '#E8E1D9'
  ]
}
,
  {
  id: 'earring-v2-1',
  name: 'Brilliant Yellow Gold Hoops',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-v2-1.png',
  imageAlt: '/images/earring-collection-v2-1.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-2',
  name: 'Opulent Rose Gold Hoops',
  category: 'Earrings · 18k White Gold',
  image: '/images/earring-collection-v2-2.png',
  imageAlt: '/images/earring-collection-v2-2.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-3',
  name: 'Statement Yellow Gold Drop Earrings',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-v2-3.png',
  imageAlt: '/images/earring-collection-v2-3.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-4',
  name: 'Ornate Rose Gold Drop Earrings',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-v2-4.png',
  imageAlt: '/images/earring-collection-v2-4.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-5',
  name: 'Luxury Rose Gold Chandelier Earrings',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-v2-5.png',
  imageAlt: '/images/earring-collection-v2-5.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-6',
  name: 'Sparkling White Gold Chandelier Earrings',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-v2-6.png',
  imageAlt: '/images/earring-collection-v2-6.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-7',
  name: 'Exquisite White Gold Drop Earrings',
  category: 'Earrings · 18k Yellow Gold',
  image: '/images/earring-collection-v2-7.png',
  imageAlt: '/images/earring-collection-v2-7.png',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-8',
  name: 'Ornate White Gold Hoops',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-v2-8.jpeg',
  imageAlt: '/images/earring-collection-v2-8.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'earring-v2-9',
  name: 'Dazzling White Gold Drop Earrings',
  category: 'Earrings · 18k Rose Gold',
  image: '/images/earring-collection-v2-9.jpeg',
  imageAlt: '/images/earring-collection-v2-9.jpeg',
  tones: [
    '#E8E1D9'
  ]
}
,
  {
  id: 'necklace-v2-1',
  name: 'Ornate Yellow Gold Collar',
  category: 'Necklaces · 18k Rose Gold',
  image: '/images/necklace-collection-v2-1.jpeg',
  imageAlt: '/images/necklace-collection-v2-1.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-2',
  name: 'Statement Yellow Gold Layered Necklace',
  category: 'Necklaces · 18k Yellow Gold',
  image: '/images/necklace-collection-v2-2.jpeg',
  imageAlt: '/images/necklace-collection-v2-2.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-3',
  name: 'Luxury Yellow Gold Choker',
  category: 'Necklaces · 18k White Gold',
  image: '/images/necklace-collection-v2-3.jpeg',
  imageAlt: '/images/necklace-collection-v2-3.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-4',
  name: 'Ornate White Gold Layered Necklace',
  category: 'Necklaces · 18k Rose Gold',
  image: '/images/necklace-collection-v2-4.jpeg',
  imageAlt: '/images/necklace-collection-v2-4.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-5',
  name: 'Ornate White Gold Necklace',
  category: 'Necklaces · 18k White Gold',
  image: '/images/necklace-collection-v2-5.jpeg',
  imageAlt: '/images/necklace-collection-v2-5.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-6',
  name: 'Classic Rose Gold Choker',
  category: 'Necklaces · 18k Rose Gold',
  image: '/images/necklace-collection-v2-6.jpeg',
  imageAlt: '/images/necklace-collection-v2-6.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-7',
  name: 'Luxury Yellow Gold Necklace',
  category: 'Necklaces · 18k Rose Gold',
  image: '/images/necklace-collection-v2-7.jpeg',
  imageAlt: '/images/necklace-collection-v2-7.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-8',
  name: 'Classic Yellow Gold Choker',
  category: 'Necklaces · 18k Rose Gold',
  image: '/images/necklace-collection-v2-8.jpeg',
  imageAlt: '/images/necklace-collection-v2-8.jpeg',
  tones: [
    '#E8E1D9'
  ]
},
  {
  id: 'necklace-v2-9',
  name: 'Opulent White Gold Choker',
  category: 'Necklaces · 18k White Gold',
  image: '/images/necklace-collection-v2-9.jpeg',
  imageAlt: '/images/necklace-collection-v2-9.jpeg',
  tones: [
    '#E8E1D9'
  ]
}
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
  }
];

export const JOURNAL_POSTS = [];

export const INSTAGRAM_TILES = [
  '/images/celestial-muse.jpg',
  '/images/rings-category.jpg',
  '/images/earrings-category.jpg',
  '/images/bracelets-category.jpg',
  '/images/bridal-category.jpg',
  '/images/layering-guide.jpg'
];

export const PRESS_LOGOS = [];
