const fs = require('fs');
const https = require('https');
const path = require('path');

const NUM_RINGS = 15;
const IMAGE_DIR = path.join(__dirname, '../public/images');
const DATA_FILE = path.join(__dirname, '../src/pages/Home/data.js');

if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        let loc = response.headers.location;
        if (!loc.startsWith('http')) {
          const urlObj = new URL(url);
          loc = `${urlObj.protocol}//${urlObj.host}${loc}`;
        }
        downloadImage(loc, dest).then(resolve).catch(reject);
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
}

async function addRings() {
  console.log('Downloading images...');
  const newRings = [];
  
  for (let i = 1; i <= NUM_RINGS; i++) {
    const filename = `ring-collection-${i}.jpeg`;
    const dest = path.join(IMAGE_DIR, filename);
    const url = `https://loremflickr.com/800/800/engagement,ring,diamond?lock=${i + 1000}`;
    
    try {
      console.log(`Downloading ${filename}...`);
      await downloadImage(url, dest);
      
      newRings.push(`  {
  id: 'ring-${i}',
  name: 'Elegant Engagement Ring ${i}',
  category: 'Rings · 18k White Gold',
  image: '/images/${filename}',
  imageAlt: '/images/${filename}',
  tones: ['#E8E1D9']
}`);
    } catch (e) {
      console.error(`Failed to download ${filename}: ${e}`);
    }
  }

  if (newRings.length === 0) {
    console.error('No images downloaded, aborting.');
    return;
  }

  console.log('Updating data.js...');
  let dataJs = fs.readFileSync(DATA_FILE, 'utf-8');
  
  const insertIndex = dataJs.indexOf('export const NEW_ARRIVALS = [') + 'export const NEW_ARRIVALS = ['.length;
  const ringsString = '\n' + newRings.join(',\n') + ',\n';
  dataJs = dataJs.slice(0, insertIndex) + ringsString + dataJs.slice(insertIndex);
  
  fs.writeFileSync(DATA_FILE, dataJs);
  console.log('Done!');
}

addRings();
