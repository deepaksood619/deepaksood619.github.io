# Image Formats

## Exchangeable image file format (EXIF)

Exchangeable image file format(officiallyExif, according to JEIDA/JEITA/CIPA specifications) is a standard that specifies the [formats](https://en.wikipedia.org/wiki/File_format) for [images](https://en.wikipedia.org/wiki/Image), [sound](https://en.wikipedia.org/wiki/Sound), and ancillary tags used by [digital cameras](https://en.wikipedia.org/wiki/Digital_camera) (including [smartphones](https://en.wikipedia.org/wiki/Smartphone)), [scanners](https://en.wikipedia.org/wiki/Image_scanner) and other systems handling image and sound files recorded by digital cameras.

<https://en.wikipedia.org/wiki/Exif>

<https://www.exifdata.com>

## JPG

- Progressive rendering

## JPEG-XL

- Progressive rendering

## PNG

- Progressive rendering

- **JPEGcompression** reduces the image size by finding areas of a similar color; the higher the compression level, the more aggressively it looks for such areas leading to a loss of visual information and the generation of artefacts at the edges of the compressed areas. This compression is effective for photos, drawings, gradients, most illustrations and other colorful, rich images. JPEG doesn't work as well for screenshots, simple UI elements, flat icons, schematics, and it is especially bad for text.
- **PNGcompression** works by reducing the number of used colors. Depending on the level of compression this could lead to slight loss of color shades. PNG is great for logos, icons, signs, images containing text, for simple illustrations, UI elements and screenshots. Unlike JPEG, it also allows images to have transparent areas. PNG files are usually larger than JPEGs and don't provide good compression for photos and complex, colorful images and gradients.

## AVIF

- No progressive rendering
- AVIF + Blur is good

## WebP-v2

## WebP

WebP is a modernimage formatthat provides superiorlossless and lossycompression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster.

WebP lossless images are [26% smaller](https://developers.google.com/speed/webp/docs/webp_lossless_alpha_study#results) in size compared to PNGs. WebP lossy images are [25-34% smaller](https://developers.google.com/speed/webp/docs/webp_study) than comparable JPEG images at equivalent [SSIM](https://en.wikipedia.org/wiki/Structural_similarity) quality index.

Lossless WebPsupports transparency(also known as alpha channel) at a cost of just [22% additional bytes](https://developers.google.com/speed/webp/docs/webp_lossless_alpha_study#results). For cases when lossy RGB compression is acceptable, lossy WebP also supports transparency, typically providing 3× smaller file sizes compared to PNG.

### How WebP Works

Lossy WebP compression uses predictive coding to encode an image, the same method used by the VP8 video codec to compress keyframes in videos. Predictive coding uses the values in neighboring blocks of pixels to predict the values in a block, and then encodes only the difference.

Lossless WebP compression uses already seen image fragments in order to exactly reconstruct new pixels. It can also use a local palette if no interesting match is found.

`brew install webp`

<https://developers.google.com/speed/webp>

## Image Recognition

- Categorization
- Segmentation Problems

## Tools

<http://www.libpng.org/pub/png/apps/pngcheck.html>

### pngcheck

`pngcheck` verifies the integrity of PNG, JNG and MNG files (by checking the internal 32-bit CRCs, a.k.a. checksums, and decompressing the image data); it can optionally dump almost all of the chunk-level information in the image in human-readable form. For example, it can be used to print the basic statistics about an image (dimensions, bit depth, etc.); to list the color and transparency info in its palette (assuming it has one); or to extract the embedded text annotations. This is a command-line program with batch capabilities

## Image processing

[sharp - High performance Node.js image processing](https://sharp.pixelplumbing.com/)

## References

[Progressively loading images - HTTP 203 - YouTube](https://www.youtube.com/watch?v=-7k3H2GxE5E)

[How does a camera work? - YouTube](https://www.youtube.com/watch?v=B7Dopv6kzJA)

[How are Images Compressed? [46MB ↘↘ 4.07MB] JPEG In Depth - YouTube](https://www.youtube.com/watch?v=Kv1Hiv3ox8I)
