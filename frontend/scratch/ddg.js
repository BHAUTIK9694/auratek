const https = require('https');
const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent('site:unsplash.com engagement ring photo');

const req = https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/unsplash\.com\/photos\/([a-zA-Z0-9\-_]+)/g;
    let match;
    const links = new Set();
    while ((match = regex.exec(data)) !== null) {
      links.add(match[1]);
    }
    console.log(JSON.stringify(Array.from(links)));
  });
});
req.on('error', (e) => console.error(e));
