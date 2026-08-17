const fs = require('fs');
const path = require('path');

const srcDir = path.join('public', 'images', 'client images');
const destDir = path.join('public', 'images');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

let files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
// Sort by size descending to get better quality ones
files = files.map(f => {
  return { name: f, size: fs.statSync(path.join(srcDir, f)).size };
}).sort((a, b) => b.size - a.size);

// Take top 60
const selected = files.slice(0, 60);

const categories = ['Necklaces', 'Bridal Sets', 'Earrings', 'Rings', 'Bracelets'];
const metals = ['18k Yellow Gold', '18k Rose Gold', '18k White Gold', 'Platinum 950'];

let newArrivalsAdditions = [];

selected.forEach((file, index) => {
  const ext = path.extname(file.name);
  
  // Assign a semi-random category
  const catIndex = index % categories.length;
  const categoryName = categories[catIndex];
  
  const metalIndex = index % metals.length;
  const metalName = metals[metalIndex];
  
  const newName = `client-${categoryName.toLowerCase().replace(' ', '-')}-${index}${ext}`;
  
  // Copy file
  fs.copyFileSync(path.join(srcDir, file.name), path.join(destDir, newName));
  
  newArrivalsAdditions.push({
    id: `client-bulk-${index}`,
    name: `Bespoke ${categoryName} ${index + 1}`,
    category: `${categoryName} · ${metalName}`,
    image: `/images/${newName}`,
    imageAlt: `/images/${newName}`,
    tones: ['#F1C27D', '#E8E1D9', '#F4C3B0'].slice(0, (index % 3) + 1)
  });
});

let dataJsContent = fs.readFileSync(dataFile, 'utf-8');

// Find the end of NEW_ARRIVALS array
const newArrivalsEndIndex = dataJsContent.indexOf('];', dataJsContent.indexOf('export const NEW_ARRIVALS'));

if (newArrivalsEndIndex !== -1) {
  let additionsStr = newArrivalsAdditions.map(item => JSON.stringify(item, null, 2)).join(',\n  ');
  // Clean up JSON format to match JS file formatting
  additionsStr = additionsStr.replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
  
  const replacement = `,\n  ` + additionsStr + `\n];`;
  dataJsContent = dataJsContent.substring(0, newArrivalsEndIndex) + replacement + dataJsContent.substring(newArrivalsEndIndex + 2);
  fs.writeFileSync(dataFile, dataJsContent);
  console.log('Successfully added ' + selected.length + ' items to data.js');
} else {
  console.log('Could not find NEW_ARRIVALS array end');
}
