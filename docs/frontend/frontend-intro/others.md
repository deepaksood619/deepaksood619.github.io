# Others

## BFCache

Back/forward cache (or bfcache) is a browser optimization that enables instant back and forward navigation. It significantly improves the browsing experience for users-especially those with slower networks or devices.

[Back/forward cache](https://web.dev/bfcache/)

[Back/Forward Cache: What It Is and How to Use It to Serve Content Immediately](https://nitropack.io/blog/post/back-forward-cache)

## Image Compression / Compress Image / Image Tools

- https://imgix.com
- [**https://squoosh.app/**](https://squoosh.app/)
- Birme - https://www.birme.net
- [TinyPNG - Compress WebP, PNG and JPEG images intelligently](https://tinypng.com/)
- [AI Image Upscaler - Enlarge & Enhance Your Photos for Free - Upscale.media](https://www.upscale.media/)
- [Image Resizer - Crop & Resize Image Online | RedKetchup](https://redketchup.io/image-resizer)

### ImageMagick

```bash
brew install imagemagick

mogrify -format jpg -quality 50% /path/to/folder/abc.png

mogrify -format jpg /path/to/folder/*.png

mogrify -format jpg -quality 50% *.png
mogrify -format jpg -quality 50% *.png && rm *.png

mogrify -quality 20% /path/to/folder/*.jpg

mogrify -quality 50% *.jpg
mogrify -quality 10% *.jpg
mogrify -format jpg -quality 50% *.jpeg

# Reduce: If you set a lower quality value (e.g., `-quality 50`), the image file size is reduced by increasing compression. This may lead to a loss in visual quality (e.g., pixelation or artifacts), but the image becomes lighter and faster to load.

# Leave (High Quality): If you set a higher quality value (e.g., `-quality 90` or `-quality 100`), the image retains more detail with minimal compression. This ensures better visual fidelity but results in a larger file size.

# convert pdf to images
convert input.pdf output.jpg # deprecated
magick input.pdf output.jpg
magick convert input.pdf output.jpg

# For good quality use these parameters
magick convert -density 300 -quality 100 in.pdf out.jpg

# resize image to width 25, keeping aspect ratio
magick convert -geometry 25x src/image1.png out/image1.png
magick convert -geometry 600x src/image1.png out/image1.png

# resize image to height 25, keeping aspect ratio
magick convert -geometry x25 src/image1.png out/image1.png

# [ImageMagick - Command-line Tools: Convert](https://www.imagemagick.org/script/convert.php)
```

#### Script - PNG to JPG Conversion, Resizing, and Compression

```bash
#!/bin/bash

# Set maximum dimensions for resizing (e.g., width=1000px, height=650px)
max_width=1000
max_height=650

# Initialize loop counter
counter=0

# Loop through both PNG and JPG files
for file in *.png *.jpg *.jpeg; do
  # Check if the file exists and is a regular file (not a directory)
  if [ -f "$file" ]; then
    # Increment the loop counter
    ((counter++))

    # Get the current file size in bytes (macOS compatible)
    original_size=$(stat -f %z "$file")

    # Check if it's a PNG file and convert it to JPG
    if [[ "$file" =~ \.png$ ]]; then
      # Convert PNG to JPG with quality 50, save it with the same name but a .jpg extension
      magick "$file" -quality 50 "${file%.png}.jpg"
      # Remove the original PNG file after conversion
      rm "$file"
      # Set the filename to the new JPG file for further processing
      file="${file%.png}.jpg"
    fi

    # Get the current image dimensions (width x height)
    dimensions=$(identify -format "%wx%h" "$file")
    width=$(echo $dimensions | cut -d 'x' -f 1)
    height=$(echo $dimensions | cut -d 'x' -f 2)

    # Resize image while maintaining aspect ratio
    if [ "$width" -gt "$max_width" ]; then
      # Calculate new height while maintaining aspect ratio
      new_height=$((max_width * height / width))
      magick "$file" -resize "${max_width}x${new_height}" "$file"
    elif [ "$height" -gt "$max_height" ]; then
      # Calculate new width while maintaining aspect ratio
      new_width=$((max_height * width / height))
      magick "$file" -resize "${new_width}x${max_height}" "$file"
    fi

    # Optimize image with quality set to 50
    mogrify -strip -interlace Plane -quality 50 "$file"

    # Get the new file size (macOS compatible)
    new_size=$(stat -f %z "$file")

    # Compare sizes and keep the smaller one
    if [ "$new_size" -ge "$original_size" ]; then
      echo "[$counter] Skipping $file, new size is not smaller."
    else
      echo "[$counter] Processed $file successfully."
    fi
  fi
done
```

[imagemagick](ai/computer-vision-cv/imagemagick.md)

[GitHub - kornelski/pngquant: Lossy PNG compressor - pngquant command based on libimagequant library](https://github.com/kornelski/pngquant)

### jpegoptim

- **Description**: A tool specifically for optimizing JPEG images. It supports both lossy and lossless optimization.
- **Compression Method**: Lossy and lossless.

```bash
# installation
brew install jpegoptim

# Compresses all JPG files to a maximum quality of 75% while preserving EXIF data.
jpegoptim --max=75 *.jpg

# Maximum Compression
# --strip-all - Strips all metadata (e.g., EXIF, comments, color profiles) to reduce file size.
# --all-progressive - Converts images to progressive JPEGs, which are better for web and often smaller.
jpegoptim --max=75 --strip-all --all-progressive *.jpg
```

[GitHub - tjko/jpegoptim: jpegoptim - utility to optimize/compress JPEG files](https://github.com/tjko/jpegoptim)

### mozjpeg (via `cjpeg`)

- **Description**: A JPEG encoder that offers excellent lossy compression with reduced file sizes.
- **Compression Method**: Lossy.

```bash
# installation
brew install mozjpeg

# Compresses `original.jpg` into `compressed.jpg` with 75% quality.
cjpeg -quality 75 -outfile compressed.jpg original.jpg

# Maximum Compression with Optimized Huffman Tables
cjpeg -quality 85 -progressive -optimize -tune-psnr -outfile temp.jpg
```

[GitHub - mozilla/mozjpeg: Improved JPEG encoder.](https://github.com/mozilla/mozjpeg)

### ImageOptim CLI

- **Description**: A macOS-friendly tool that focuses on lossless compression, preserving image quality while reducing file size.
- **Compression Method**: Lossless.

```bash
# installation
brew install imageoptim-cli

# Compresses all JPG files with a focus on smaller file sizes.
imageoptim --quality-low *.jpg
```

[GitHub - mozilla/mozjpeg: Improved JPEG encoder.](https://github.com/mozilla/mozjpeg)

[MozJpeg - Compress/edit images online.](https://mozjpeg.com/)

### jpegtran

- **Description**: A lossless JPEG compressor that rearranges file structure for optimal compression.
- **Compression Method**: Lossless.
- **Installation**:

    `brew install jpeg`

- **Example Command**:

    `jpegtran -optimize -progressive -outfile compressed.jpg original.jpg`

    - Optimizes and converts the image to a progressive JPEG format.

### Recommendation

- Use **ImageMagick** or **jpegoptim** if you want flexibility between lossy and lossless compression.
- Use **mozjpeg** for maximum reduction in file size with excellent visual quality.
- Use **pngquant** for png images
