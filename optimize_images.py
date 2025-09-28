#!/usr/bin/env python3
import os
from PIL import Image
import glob

def optimize_image(input_path, output_path, max_width=1200, quality=85):
    """Optimize an image by resizing and compressing"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Calculate new dimensions maintaining aspect ratio
            width, height = img.size
            if width > max_width:
                new_height = int((height * max_width) / width)
                img = img.resize((max_width, new_height), Image.LANCZOS)
            
            # Save with optimization
            if output_path.lower().endswith('.jpg') or output_path.lower().endswith('.jpeg'):
                img.save(output_path, 'JPEG', quality=quality, optimize=True)
            elif output_path.lower().endswith('.png'):
                img.save(output_path, 'PNG', optimize=True)
            elif output_path.lower().endswith('.webp'):
                img.save(output_path, 'WEBP', quality=quality, optimize=True)
            
            print(f"Optimized: {input_path} -> {output_path}")
            return True
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")
        return False

def main():
    # Get all image files
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.webp']
    image_files = []
    
    for ext in image_extensions:
        image_files.extend(glob.glob(f"public/images/{ext}"))
        image_files.extend(glob.glob(f"public/images/{ext.upper()}"))
    
    print(f"Found {len(image_files)} images to optimize")
    
    # Create backup directory
    os.makedirs("public/images/backup", exist_ok=True)
    
    optimized_count = 0
    total_size_before = 0
    total_size_after = 0
    
    for img_path in image_files:
        if not os.path.exists(img_path):
            continue
            
        # Get original size
        original_size = os.path.getsize(img_path)
        total_size_before += original_size
        
        # Create backup
        backup_path = img_path.replace("public/images/", "public/images/backup/")
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        
        # Copy original to backup
        with open(img_path, 'rb') as src, open(backup_path, 'wb') as dst:
            dst.write(src.read())
        
        # Optimize image
        if optimize_image(img_path, img_path):
            optimized_size = os.path.getsize(img_path)
            total_size_after += optimized_size
            optimized_count += 1
            
            size_reduction = original_size - optimized_size
            reduction_percent = (size_reduction / original_size) * 100
            print(f"  Size: {original_size/1024:.1f}KB -> {optimized_size/1024:.1f}KB ({reduction_percent:.1f}% reduction)")
    
    print(f"\nOptimization complete!")
    print(f"Optimized {optimized_count} images")
    print(f"Total size before: {total_size_before/1024:.1f}KB")
    print(f"Total size after: {total_size_after/1024:.1f}KB")
    print(f"Total reduction: {((total_size_before - total_size_after) / total_size_before) * 100:.1f}%")
    print(f"Backups saved in: public/images/backup/")

if __name__ == "__main__":
    main()
