/**
 * Auratek Home — mock data (products, categories, testimonials, journal).
 *
 * Imagery references Unsplash's royalty-free CDN. Unsplash's license
 * (https://unsplash.com/license) permits free use for commercial and
 * non-commercial purposes. When replacing with real product photography,
 * simply swap the `image` URLs.
 */

export const HERO_SLIDES = [
  {
    eyebrow: 'The Aurum Solstice · New Collection',
    title: 'A Sunlit\nHeirloom.',
    text:
      'Twenty-two artisans. Four hundred and eighty hours. One collection composed to catch every hour of the sun in 18k rose gold.',
    ctaPrimary: { label: 'Explore Collection', to: '/collections/aurum-solstice' },
    ctaSecondary: { label: 'The Story', to: '/journal/aurum-solstice-story' },
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=85',
    tag: 'Limited Edition',
  },
  {
    eyebrow: 'Bridal · Anaya Collection',
    title: 'Sworn in\nDiamonds.',
    text:
      'Solitaires cut for the moment two lives become one. Each stone is chosen, matched and set at our Jaipur atelier.',
    ctaPrimary: { label: 'Discover Bridal', to: '/bridal' },
    ctaSecondary: { label: 'Book a Stylist', to: '/appointment' },
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1600&q=85',
    tag: 'Signature',
  },
  {
    eyebrow: 'Celestial Muse · Everyday Icons',
    title: 'Everyday,\nExalted.',
    text:
      'Whisper-thin gold chains, star-cut diamonds. Layer them like memories — worn once, worn always.',
    ctaPrimary: { label: 'Shop the Edit', to: '/collections/celestial-muse' },
    ctaSecondary: { label: 'Style Journal', to: '/journal' },
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1600&q=85',
    tag: 'Editor’s Pick',
  },
];

export const CATEGORIES = [
  {
    title: 'Rings',
    subtitle: 'Solitaires · Cocktail · Bands',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1100&q=85',
    to: '/rings',
    size: 'lg',
  },
  {
    title: 'Necklaces',
    subtitle: 'Chokers · Pendants · Chains',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1100&q=85',
    to: '/necklaces',
    size: 'md',
  },
  {
    title: 'Earrings',
    subtitle: 'Studs · Hoops · Chandeliers',
    image: 'https://images.unsplash.com/photo-1535632066274-8c9569fbd9d2?auto=format&fit=crop&w=1100&q=85',
    to: '/earrings',
    size: 'md',
  },
  {
    title: 'Bracelets',
    subtitle: 'Tennis · Cuffs · Bangles',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1100&q=85',
    to: '/bracelets',
    size: 'md',
  },
  {
    title: 'Bridal',
    subtitle: 'Engagement · Anniversary',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1100&q=85',
    to: '/bridal',
    size: 'lg',
  },
  {
    title: 'Men',
    subtitle: 'Signet Rings · Chains · Cufflinks',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1100&q=85',
    to: '/mens',
    size: 'md',
  },
];

export const NEW_ARRIVALS = [
  {
    id: 'aur-01',
    name: 'Solstice Halo Solitaire',
    category: 'Rings · 18k Rose Gold',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85',
    price: '₹4,85,000',
    badge: 'new',
    tones: ['#F1C27D', '#E8E1D9', '#F4C3B0'],
  },
  {
    id: 'cel-14',
    name: 'Celestial Muse Pendant',
    category: 'Necklaces · 18k Yellow Gold',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=85',
    price: '₹2,15,000',
    originalPrice: '₹2,40,000',
    badge: 'bestseller',
    tones: ['#F1C27D', '#E8E1D9'],
  },
  {
    id: 'pet-08',
    name: 'Petal Rose Studs',
    category: 'Earrings · 18k Rose Gold',
    image: 'https://images.unsplash.com/photo-1535632066274-8c9569fbd9d2?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?auto=format&fit=crop&w=900&q=85',
    price: '₹98,500',
    badge: 'new',
    tones: ['#F4C3B0', '#F1C27D'],
  },
  {
    id: 'nir-22',
    name: 'Nirvaana Tennis Bracelet',
    category: 'Bracelets · Platinum 950',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1626784215021-2e39ccec0b76?auto=format&fit=crop&w=900&q=85',
    price: '₹6,20,000',
    badge: 'limited',
    tones: ['#E8E1D9'],
  },
  {
    id: 'aur-07',
    name: 'Aurum Bar Necklace',
    category: 'Necklaces · 18k Yellow Gold',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=900&q=85',
    price: '₹1,42,000',
    tones: ['#F1C27D', '#E8E1D9', '#F4C3B0'],
  },
  {
    id: 'aur-11',
    name: 'Eternity Wedding Band',
    category: 'Rings · Platinum & Diamonds',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1595781572981-d63151b232ed?auto=format&fit=crop&w=900&q=85',
    price: '₹2,05,000',
    tones: ['#E8E1D9', '#F1C27D'],
  },
  {
    id: 'cel-27',
    name: 'Astra Diamond Hoops',
    category: 'Earrings · 18k White Gold',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?auto=format&fit=crop&w=900&q=85',
    price: '₹1,58,000',
    badge: 'new',
    tones: ['#E8E1D9'],
  },
  {
    id: 'nir-03',
    name: 'Aria Chain Ring',
    category: 'Rings · 18k Yellow Gold',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048a9?auto=format&fit=crop&w=900&q=85',
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
      'You feel the care in every gram. My grandmother’s pendant, remade, still carries her hands in it.',
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

export const JOURNAL_POSTS = [
  {
    tag: 'The Atelier',
    title: 'Twenty-Two Hands. One Solitaire.',
    excerpt:
      'A quiet afternoon in our Jaipur workshop, following a single stone from rough to ring.',
    image: 'https://images.unsplash.com/photo-1616624828017-83c9c6e50e9c?auto=format&fit=crop&w=900&q=85',
    to: '/journal/twenty-two-hands',
    read: '6 min read',
  },
  {
    tag: 'Style Notes',
    title: 'The Art of Layering — A Modern Guide.',
    excerpt:
      'How to build a personal signature with chains, pendants and a considered ear stack.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85',
    to: '/journal/layering-guide',
    read: '4 min read',
  },
  {
    tag: 'Provenance',
    title: 'What "Ethically Sourced" Really Means.',
    excerpt:
      'Behind our Kimberley-compliant diamonds and traceable gold — a promise you can audit.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=85',
    to: '/journal/ethical-sourcing',
    read: '5 min read',
  },
];

export const INSTAGRAM_TILES = [
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1535632066274-8c9569fbd9d2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
];

export const PRESS_LOGOS = ['Vogue', 'Harper’s Bazaar', 'Grazia', 'Elle', 'Robb Report', 'Condé Nast Traveller'];
