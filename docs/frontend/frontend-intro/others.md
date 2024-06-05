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

```bash
brew install imagemagick

mogrify -format jpg -quality 50% /path/to/folder/abc.png

mogrify -format jpg /path/to/folder/*.png

mogrify -format jpg -quality 20% *.png

mogrify -quality 20% /path/to/folder/*.jpg

mogrify -quality 10% *.jpg

# convert pdf to images
convert input.pdf output.jpg

# For good quality use these parameters
convert -density 300 -quality 100 in.pdf out.jpg

# [ImageMagick - Command-line Tools: Convert](https://www.imagemagick.org/script/convert.php)
```

[imagemagick](ai/computer-vision-cv/imagemagick.md)

[GitHub - kornelski/pngquant: Lossy PNG compressor - pngquant command based on libimagequant library](https://github.com/kornelski/pngquant)
