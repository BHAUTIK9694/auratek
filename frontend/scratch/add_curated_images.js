const fs = require('fs');
const path = require('path');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

const curatedItems = [
  {
    id: 'bridal-01',
    name: 'Antique Emerald Long Necklace Set',
    category: 'Bridal Sets · 18k Yellow Gold',
    image: '/images/antique-emerald-long-necklace-set.jpeg',
    imageAlt: '/images/antique-emerald-long-necklace-set.jpeg',
    badge: 'new',
    tones: ['#F1C27D']
  },
  {
    id: 'bridal-02',
    name: 'Layered Emerald Drop Haaram',
    category: 'Necklaces · 18k White Gold',
    image: '/images/layered-emerald-drop-haaram.jpeg',
    imageAlt: '/images/layered-emerald-drop-haaram.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-03',
    name: 'Three-Layer Diamond Long Necklace',
    category: 'Necklaces · 18k White Gold',
    image: '/images/three-layer-diamond-long-necklace.jpeg',
    imageAlt: '/images/three-layer-diamond-long-necklace.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-04',
    name: 'Pear Emerald Diamond Choker',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/pear-emerald-diamond-choker.jpeg',
    imageAlt: '/images/pear-emerald-diamond-choker.jpeg',
    badge: 'bestseller',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-05',
    name: 'Square Emerald Diamond Choker',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/square-emerald-diamond-choker.jpeg',
    imageAlt: '/images/square-emerald-diamond-choker.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-06',
    name: 'V-Shape Layered Diamond Haaram',
    category: 'Necklaces · 18k White Gold',
    image: '/images/v-shape-layered-diamond-haaram.jpeg',
    imageAlt: '/images/v-shape-layered-diamond-haaram.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-07',
    name: 'Antique Diamond Necklace with Large Pendant',
    category: 'Necklaces · 18k Yellow Gold',
    image: '/images/antique-diamond-necklace-large-pendant.jpeg',
    imageAlt: '/images/antique-diamond-necklace-large-pendant.jpeg',
    tones: ['#F1C27D']
  },
  {
    id: 'bridal-08',
    name: 'Five-Layer Diamond Haaram',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/five-layer-diamond-haaram.jpeg',
    imageAlt: '/images/five-layer-diamond-haaram.jpeg',
    badge: 'limited',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-09',
    name: 'Heavy Bridal Diamond Choker',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/heavy-bridal-diamond-choker.jpeg',
    imageAlt: '/images/heavy-bridal-diamond-choker.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-10',
    name: 'Diamond Necklace with Emerald Beads',
    category: 'Necklaces · 18k White Gold',
    image: '/images/diamond-necklace-emerald-beads.jpeg',
    imageAlt: '/images/diamond-necklace-emerald-beads.jpeg',
    tones: ['#E8E1D9']
  },
  {
    id: 'bridal-11',
    name: 'Majestic Bridal Diamond Necklace',
    category: 'Bridal Sets · 18k White Gold',
    image: '/images/majestic-bridal-diamond-necklace.jpeg',
    imageAlt: '/images/majestic-bridal-diamond-necklace.jpeg',
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
  console.log('Successfully added curated items to data.js');
} else {
  console.log('Could not find NEW_ARRIVALS array end');
}
