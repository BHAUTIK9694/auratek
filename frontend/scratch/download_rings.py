import urllib.request
import json
import re
import urllib.parse
import os

req = urllib.request.Request('https://html.duckduckgo.com/html/?q=' + urllib.parse.quote('site:unsplash.com engagement ring'), headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    links = re.findall(r'href=[\"\']https://unsplash\.com/photos/([a-zA-Z0-9\-_]+)[\"\']', html)
    unique_links = list(set(links))
    print(json.dumps(unique_links))
except Exception as e:
    print('Error:', e)
