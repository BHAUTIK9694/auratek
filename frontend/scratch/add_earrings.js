const fs = require('fs');
const path = require('path');

const clientImagesDir = path.join(__dirname, '..', 'public', 'images', 'client images');
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const dataFile = path.join(__dirname, '..', 'src', 'pages', 'Home', 'data.js');

const files = fs.readdirSync(clientImagesDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

const adjectives = ['Signature', 'Elegant', 'Classic', 'Radiant', 'Intricate', 'Timeless', 'Luminous', 'Majestic', 'Regal', 'Delicate'];
const materials = ['Diamond', 'Rose Gold', 'White Gold', 'Yellow Gold', 'Pearl', 'Emerald', 'Ruby'];
const types = ['Drop Earrings', 'Studs', 'Hoops', 'Chandeliers', 'Jhumkas', 'Dusters'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const newItems = files.map((file, i) => {
  const ext = path.extname(file);
  const newFilename = `earring-collection-${i + 1}${ext}`;
  const sourcePath = path.join(clientImagesDir, file);
  const destPath = path.join(imagesDir, newFilename);
  
  // Copy file
  fs.copyFileSync(sourcePath, destPath);
  
  // Generate name
  const name = `${getRandomItem(adjectives)} ${getRandomItem(materials)} ${getRandomItem(types)}`;
  const materialCat = getRandomItem(['18k Rose Gold', '18k White Gold', '18k Yellow Gold', 'Platinum']);
  
  return {
    id: `earring-${i + 1}`,
    name: name,
    category: `Earrings · ${materialCat}`,
    image: `/images/${newFilename}`,
    imageAlt: `/images/${newFilename}`,
    tones: ['#E8E1D9']
  };
});

let dataJsContent = fs.readFileSync(dataFile, 'utf-8');
const newArrivalsEndIndex = dataJsContent.indexOf('];', dataJsContent.indexOf('export const NEW_ARRIVALS'));

if (newArrivalsEndIndex !== -1) {
  let additionsStr = newItems.map(item => JSON.stringify(item, null, 2)).join(',\n  ');
  additionsStr = additionsStr.replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
  
  const replacement = `,\n  ` + additionsStr + `\n];`;
  dataJsContent = dataJsContent.substring(0, newArrivalsEndIndex) + replacement + dataJsContent.substring(newArrivalsEndIndex + 2);
  fs.writeFileSync(dataFile, dataJsContent);
  console.log(`Successfully added ${newItems.length} earrings to data.js`);
} else {
  console.log('Could not find NEW_ARRIVALS array end');
}
