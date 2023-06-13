import pytesseract
from PIL import Image

def perform_ocr(image_path, target_label):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    
    if target_label in text:
       return target_label
    
    return ''  # Return an empty string if the target label is not found

