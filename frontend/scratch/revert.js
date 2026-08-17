const fs = require('fs');
const path = require('path');
const dataFile = path.join('src', 'pages', 'Home', 'data.js');

let dataJsContent = fs.readFileSync(dataFile, 'utf-8');

const badStartIndex = dataJsContent.indexOf('id: \'client-bulk-0\',');
if (badStartIndex !== -1) {
  // Go backwards to find the start of the object and the comma
  const commaIndex = dataJsContent.lastIndexOf(',', badStartIndex);
  const newArrivalsEndIndex = dataJsContent.indexOf('];', badStartIndex);
  if (commaIndex !== -1 && newArrivalsEndIndex !== -1) {
    dataJsContent = dataJsContent.substring(0, commaIndex) + '\n];' + dataJsContent.substring(newArrivalsEndIndex + 2);
    fs.writeFileSync(dataFile, dataJsContent);
    console.log('Reverted bad additions.');
  } else {
    console.log('End not found.');
  }
} else {
  console.log('Start not found.');
}
