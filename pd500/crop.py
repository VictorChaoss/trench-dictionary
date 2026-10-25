from PIL import Image

try:
    img = Image.open('logo_transparent.png').convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        cropped_img = img.crop(bbox)
        cropped_img.save('logo_transparent_crop.png')
        print(f"Cropped from {img.size} to {cropped_img.size}. Bbox was {bbox}")
    else:
        print("Image completely transparent or couldn't find bbox")
except Exception as e:
    print(f"Error: {e}")
