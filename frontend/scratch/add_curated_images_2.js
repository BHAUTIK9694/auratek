const fs = require('fs');
const path = require('path');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

const curatedItems = [
  {
    id: 'bridal-12',
    name: 'Elegant Emerald Pearl Diamond Necklace',
    category: 'Necklaces · 18k Yellow Gold',
    image: '/images/elegant-emerald-pearl-diamond-necklace.jpeg',
    imageAlt: '/images/elegant-emerald-pearl-diamond-necklace.jpeg',
    tones: ['#F1C27D']
  },
  {
    id: 'bridal-13',
    name: 'Layered Diamond Necklace with Emerald Pendant',
    category: 'Necklaces · 18k White Gold',
    image: '/images/layered-diamond-emerald-pendant.jpeg',
    imageAlt: '/images/layered-diamond-emerald-pendant.jpeg',
    badge: 'new',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-14',
    name: 'Delicate V-Shape Emerald Diamond Necklace',
    category: 'Necklaces · 18k White Gold',
    image: '/images/delicate-v-shape-emerald-diamond.jpeg',
    imageAlt: '/images/delicate-v-shape-emerald-diamond.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-15',
    name: 'Extravagant Tanzanite Diamond Necklace',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/extravagant-tanzanite-diamond.jpeg',
    imageAlt: '/images/extravagant-tanzanite-diamond.jpeg',
    badge: 'limited',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-16',
    name: 'Royal Ruby Emerald Diamond Necklace',
    category: 'Bridal Sets · 18k Yellow Gold',
    image: '/images/royal-ruby-emerald-diamond.jpeg',
    imageAlt: '/images/royal-ruby-emerald-diamond.jpeg',
    tones: ['#F1C27D']
  },
  {
    id: 'bridal-17',
    name: 'Multi-Layered Emerald Diamond Haaram',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/multi-layered-emerald-diamond-haaram.jpeg',
    imageAlt: '/images/multi-layered-emerald-diamond-haaram.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-18',
    name: 'Peacock Coral Diamond Haaram',
    category: 'Bridal Sets · 18k Yellow Gold',
    image: '/images/peacock-coral-diamond-haaram.jpeg',
    imageAlt: '/images/peacock-coral-diamond-haaram.jpeg',
    badge: 'bestseller',
    tones: ['#F1C27D']
  },
  {
    id: 'bridal-19',
    name: 'V-Shape Emerald Drop Diamond Choker',
    category: 'Necklaces · 18k White Gold',
    image: '/images/v-shape-emerald-drop-diamond-choker.jpeg',
    imageAlt: '/images/v-shape-emerald-drop-diamond-choker.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-20',
    name: 'Round Emerald Pendant Diamond Choker',
    category: 'Necklaces · 18k White Gold',
    image: '/images/round-emerald-pendant-diamond-choker.jpeg',
    imageAlt: '/images/round-emerald-pendant-diamond-choker.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-21',
    name: 'Heavy Wide Emerald Diamond Choker',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/heavy-wide-emerald-diamond-choker.jpeg',
    imageAlt: '/images/heavy-wide-emerald-diamond-choker.jpeg',
    tones: ['#E8E1D9']
  }
];

let dataJsContent = fs.readFileSync(dataFile, 'utf-8');

const newArrivalsEndIndex = dataJsContent.indexOf('];', dataJsContent.indexOf('export const NEW_ARRIVALS'));

if (newArrivalsEndIndex !== -1) {
  let additionsStr = curatedItems.map(item => JSON.stringify(item, null, 2)).join(',\n  ');
  additionsStr = additionsStr.replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
  
  const replacement = `,\n  ` + additionsStr + `\n];`;
  dataJsContent = dataJsContent.substring(0, newArrivalsEndIndex) + replacement + dataJsContent.substring(newArrivalsEndIndex + 2);
  fs.writeFileSync(dataFile, dataJsContent);
  console.log('Successfully added batch 2 to data.js');
} else {
  console.log('Could not find NEW_ARRIVALS array end');
}
