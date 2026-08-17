# batch_cleanup.py
"""Automated image cleanup script for product images.

Features:
- Removes background using the `rembg` library (U²‑Net based).
- Detects and removes textual/measurement markings using OCR (pytesseract) and OpenCV inpainting.
- Preserves the product region and saves a cleaned copy for each input image.
"""

import os
import sys
import argparse
from pathlib import Path
import cv2
import numpy as np
from rembg import remove
from PIL import Image
import pytesseract
from tqdm import tqdm

def load_image(path: Path) -> np.ndarray:
    """Load image as RGBA numpy array."""
    img = Image.open(path).convert('RGBA')
    return np.array(img)

def save_image(img: np.ndarray, path: Path):
    """Save RGBA numpy array as PNG."""
    im = Image.fromarray(img)
    im.save(path)

def remove_background(img: np.ndarray) -> np.ndarray:
    """Use rembg to remove background, returning an RGBA image with transparent background."""
    pil_img = Image.fromarray(img)
    result = remove(pil_img)
    return np.array(result)

def mask_text_regions(img: np.ndarray) -> np.ndarray:
    """Detect text regions via pytesseract and return a mask suitable for inpainting."""
    gray = cv2.cvtColor(img, cv2.COLOR_RGBA2GRAY)
    data = pytesseract.image_to_data(gray, output_type=pytesseract.Output.DICT)
    mask = np.zeros(img.shape[:2], dtype=np.uint8)
    n_boxes = len(data['level'])
    for i in range(n_boxes):
        (x, y, w, h) = (data['left'][i], data['top'][i], data['width'][i], data['height'][i])
        if w * h < 100:
            continue
        cv2.rectangle(mask, (x, y), (x + w, y + h), 255, -1)
    return mask

def inpaint_image(img: np.ndarray, mask: np.ndarray) -> np.ndarray:
    """Inpaint the masked regions using Telea's method (fast)."""
    rgb = cv2.cvtColor(img, cv2.COLOR_RGBA2RGB)
    inpainted = cv2.inpaint(rgb, mask, 3, cv2.INPAINT_TELEA)
    a = img[:, :, 3]
    result = cv2.cvtColor(inpainted, cv2.COLOR_RGB2RGBA)
    result[:, :, 3] = a
    return result

def process_image(input_path: Path, output_path: Path):
    img = load_image(input_path)
    bg_removed = remove_background(img)
    text_mask = mask_text_regions(bg_removed)
    cleaned = inpaint_image(bg_removed, text_mask)
    save_image(cleaned, output_path)

def ensure_dir(path: Path):
    path.mkdir(parents=True, exist_ok=True)

def main():
    parser = argparse.ArgumentParser(description='Batch clean product images')
    parser.add_argument('input_folder', type=str, help='Folder containing original images')
    parser.add_argument('output_folder', type=str, help='Folder to store cleaned images')
    args = parser.parse_args()

    input_dir = Path(args.input_folder)
    output_dir = Path(args.output_folder)
    ensure_dir(output_dir)

    supported_ext = {'.png', '.jpg', '.jpeg', '.bmp', '.tiff'}
    files = [p for p in input_dir.rglob('*') if p.suffix.lower() in supported_ext]
    if not files:
        print('No supported image files found in', input_dir)
        sys.exit(1)

    for img_path in tqdm(files, desc='Processing images'):
        rel = img_path.relative_to(input_dir)
        out_path = output_dir / rel
        ensure_dir(out_path.parent)
        process_image(img_path, out_path)

if __name__ == '__main__':
    main()
