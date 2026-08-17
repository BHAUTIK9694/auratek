const fs = require('fs');
const path = require('path');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

let dataJsContent = fs.readFileSync(dataFile, 'utf-8');

// The original array starts at `export const NEW_ARRIVALS = [\n  {`
// And the first item is `id: 'aur-01'`
// We want to delete everything until the first `bridal-` or `client-` id.
// The curated items start with `id: 'bridal-01'` (or `client-01` if any).
// Let's find `export const NEW_ARRIVALS = [\n`
const newArrivalsStart = dataJsContent.indexOf('export const NEW_ARRIVALS = [');
if (newArrivalsStart !== -1) {
  const listStart = newArrivalsStart + 'export const NEW_ARRIVALS = ['.length;
  // Find the first curated item: `  {\n    id: 'client-01'`
  const firstCuratedStart = dataJsContent.indexOf('{\n    id: \'client-01\'', listStart);
  
  if (firstCuratedStart !== -1) {
    // Delete from `listStart` to `firstCuratedStart`
    dataJsContent = dataJsContent.substring(0, listStart) + '\n  ' + dataJsContent.substring(firstCuratedStart);
    fs.writeFileSync(dataFile, dataJsContent);
    console.log('Successfully removed dummy template items from NEW_ARRIVALS.');
  } else {
    // Maybe it's `id: 'bridal-01'`
    const firstBridalStart = dataJsContent.indexOf('{\n  id: \'bridal-01\'', listStart);
    if (firstBridalStart !== -1) {
      dataJsContent = dataJsContent.substring(0, listStart) + '\n  ' + dataJsContent.substring(firstBridalStart);
      fs.writeFileSync(dataFile, dataJsContent);
      console.log('Successfully removed dummy template items from NEW_ARRIVALS.');
    } else {
      console.log('Could not find the start of the curated items.');
    }
  }
} else {
  console.log('Could not find NEW_ARRIVALS array.');
}
