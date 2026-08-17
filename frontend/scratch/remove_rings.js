const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../src/pages/Home/data.js');
let dataJs = fs.readFileSync(DATA_FILE, 'utf-8');

const ringsToRemove = [15, 14, 9, 4, 6, 8];

ringsToRemove.forEach(id => {
  // Try to match with trailing comma and optional whitespace
  const regex = new RegExp(`\\s*\\{\\s*id: 'ring-${id}',[\\s\\S]*?tones: \\['#E8E1D9'\\]\\s*\\},?`, 'g');
  dataJs = dataJs.replace(regex, '');
});

// Fix potential trailing commas in array if the last item was removed (though in our case ring-15 might have been first or last depending on insertion)
dataJs = dataJs.replace(/,\s*\]/g, '\n]');

fs.writeFileSync(DATA_FILE, dataJs);
console.log('Removed rings from data.js');
