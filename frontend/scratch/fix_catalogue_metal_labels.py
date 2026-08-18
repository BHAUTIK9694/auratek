from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / 'src' / 'pages' / 'Home' / 'data.js'

ROSE_GOLD_IMAGES = {
    'bracelet-client-10.jpeg',
    'bracelet-client-11.jpeg',
    'bracelet-client-5.jpeg',
    'earring-collection-1.jpeg',
    'earring-collection-12.jpeg',
    'earring-collection-13.jpeg',
    'earring-collection-14.jpeg',
    'earring-collection-15.jpeg',
    'earring-collection-16.jpeg',
    'earring-collection-17.jpeg',
    'earring-collection-2.jpeg',
    'earring-collection-3.jpeg',
    'earring-collection-4.jpeg',
    'earring-collection-6.jpeg',
    'earring-collection-7.jpeg',
    'earring-collection-9.jpeg',
    'necklace-collection-v2-4.jpeg',
    'ring-collection-1.jpeg',
    'ring-collection-3.jpeg',
}

GOLD_IMAGES = {
    'bracelet-client-12.jpeg',
    'bracelet-client-13.jpeg',
    'bracelet-client-4.jpeg',
    'bracelet-client-6.jpeg',
    'bracelet-client-7.jpeg',
    'bracelet-client-8.jpeg',
    'earring-collection-10.jpeg',
    'earring-collection-11.jpeg',
    'earring-collection-18.jpeg',
    'earring-collection-5.jpeg',
    'earring-collection-8.jpeg',
    'earring-collection-v2-1.png',
    'earring-collection-v2-2.png',
    'earring-collection-v2-3.png',
    'earring-collection-v2-4.png',
    'earring-collection-v2-5.png',
    'earring-collection-v2-6.png',
    'earring-collection-v2-7.png',
    'earring-collection-v2-8.jpeg',
    'earring-collection-v2-9.jpeg',
    'necklace-collection-v2-1.jpeg',
    'necklace-collection-v2-2.jpeg',
    'necklace-collection-v2-3.jpeg',
    'necklace-collection-v2-5.jpeg',
    'necklace-collection-v2-6.jpeg',
    'necklace-collection-v2-7.jpeg',
    'necklace-collection-v2-8.jpeg',
    'necklace-collection-v2-9.jpeg',
    'pendant-collection-1.jpeg',
    'pendant-collection-11.jpeg',
    'pendant-collection-14.jpeg',
    'pendant-collection-15.jpeg',
    'pendant-collection-16.jpeg',
    'pendant-collection-17.jpeg',
    'pendant-collection-18.jpeg',
    'pendant-collection-19.jpeg',
    'pendant-collection-2.jpeg',
    'pendant-collection-3.jpeg',
    'pendant-collection-4.jpeg',
    'pendant-collection-5.jpeg',
    'pendant-collection-6.jpeg',
    'pendant-collection-7.jpeg',
    'ring-collection-2.jpeg',
    'ring-collection-5.jpeg',
    'vaddanam-3.png',
    'vaddanam-4.png',
}


def detect_metal(image_value: str) -> str:
    filename = image_value.split('/')[-1]
    if filename in ROSE_GOLD_IMAGES:
        return 'Rose Gold'
    if filename in GOLD_IMAGES:
        return 'Gold'
    return 'Silver'

text = DATA_PATH.read_text(encoding='utf-8')
start = text.index('export const NEW_ARRIVALS = [')
end = text.index('];', start)
arrivals_section = text[start:end]

pattern = re.compile(r"\{\s*id:\s*'[^']+'[\s\S]*?\n\s*\}", re.MULTILINE)
objects = pattern.findall(arrivals_section)
updated_count = 0

for idx, obj in enumerate(objects):
    image_match = re.search(r"(?:image|imageAlt)\s*:\s*'([^']+)'", obj)
    category_match = re.search(r"category\s*:\s*'([^']+)'", obj)

    if not image_match or not category_match:
        continue

    current_category = category_match.group(1)
    product_type = current_category.split('·', 1)[0].strip()
    expected = f"{product_type} · {detect_metal(image_match.group(1))}"

    if current_category != expected:
        updated_count += 1
        objects[idx] = obj.replace(category_match.group(0), f"category: '{expected}'", 1)

new_section = arrivals_section.replace('\n'.join(pattern.findall(arrivals_section)), '\n' + ',\n'.join(objects) + '\n')

# Safer replacement: rebuild exact NEW_ARRIVALS block from object list.
reconstructed = 'export const NEW_ARRIVALS = [\n' + ',\n'.join(objects) + '\n];'
final_text = text[:start] + reconstructed + text[end + 2:]
DATA_PATH.write_text(final_text, encoding='utf-8')
print(f'Updated {updated_count} category labels to match the image metal.')
