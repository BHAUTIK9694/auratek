const fs = require('fs');
const path = require('path');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

const curatedItems = [
  {
    id: 'vaddanam-01',
    name: 'Antique Diamond Emerald Vaddanam',
    category: 'Vaddanam / South Indian · 18k White Gold',
    image: '/images/vaddanam-1.png',
    imageAlt: '/images/vaddanam-1.png',
    tones: ['#E8E1D9']
  },
  {
    id: 'vaddanam-02',
    name: 'Heavy Bridal Emerald Vaddanam',
    category: 'Vaddanam / South Indian · 18k White Gold',
    image: '/images/vaddanam-2.png',
    imageAlt: '/images/vaddanam-2.png',
    badge: 'bestseller',
    tones: ['#E8E1D9']
  },
  {
    id: 'vaddanam-03',
    name: 'Traditional Gold Diamond Vaddanam',
    category: 'Vaddanam / South Indian · 18k Yellow Gold',
    image: '/images/vaddanam-3.png',
    imageAlt: '/images/vaddanam-3.png',
    tones: ['#F1C27D']
  },
  {
    id: 'vaddanam-04',
    name: 'Lakshmi Motif Diamond Vaddanam',
    category: 'Vaddanam / South Indian · 18k Yellow Gold',
    image: '/images/vaddanam-4.png',
    imageAlt: '/images/vaddanam-4.png',
    badge: 'new',
    tones: ['#F1C27D']
  },
  {
    id: 'vaddanam-05',
    name: 'Intricate Diamond Vaddanam with Emerald Centers',
    category: 'Vaddanam / South Indian · 18k Yellow Gold',
    image: '/images/vaddanam-5.png',
    imageAlt: '/images/vaddanam-5.png',
    tones: ['#F1C27D']
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
  console.log('Successfully added Vaddanam batch to data.js');
} else {
  console.log('Could not find NEW_ARRIVALS array end');
}
