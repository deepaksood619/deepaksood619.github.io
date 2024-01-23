# Others

Locally Linear Embedding

EigenFace

## Viola--Jones object detection framework

TheViola--Jones object detection frameworkis the first [object detection](https://en.wikipedia.org/wiki/Object_detection) framework to provide competitive object detection rates in real-time proposed in 2001 by [Paul Viola](https://en.wikipedia.org/wiki/Paul_Viola) and [Michael Jones](https://en.wikipedia.org/wiki/Michael_Jones_(scientist)).

The characteristics of Viola--Jones algorithm which make it a good detection algorithm are:

- Robust -- very high detection rate (true-positive rate) & very low false-positive rate always.
- Real time -- For practical applications at least 2 frames per second must be processed.

- Face detection only (not recognition) - The goal is to distinguish faces from non-faces (detection is the first step in the recognition process).

The algorithm has four stages:

1. Haar Feature Selection
2. Creating an Integral Image
3. Adaboost Training
4. Cascading Classifiers

The features sought by the detection framework universally involve the sums of image pixels within rectangular areas. As such, they bear some resemblance to [Haar basis functions](https://en.wikipedia.org/wiki/Haar-like_feature), which have been used previously in the realm of image-based object detection. However, since the features used by Viola and Jones all rely on more than one rectangular area, they are generally more complex. The figure on the right illustrates the four different types of features used in the framework. The value of any given feature is the sum of the pixels within clear rectangles subtracted from the sum of the pixels within shaded rectangles. Rectangular features of this sort are primitive when compared to alternatives such as [steerable filters](https://en.wikipedia.org/wiki/Steerable_filter). Although they are sensitive to vertical and horizontal features, their feedback is considerably coarser.

## single-image super-resolution (SISR)

create a large-sized image from a low- resolution image

EnhanceNet-PAT does not attempt pixel-perfect reconstruction, but rather aims for faithful texture synthesis

By detecting and generating patterns in a low-resolution image and applying these patterns in the upsampling process, EnhanceNet-PAT adds extra pixels to the low-resolution image

https://webdav.tue.mpg.de/pixel/enhancenet

https://github.com/msmsajjadi/EnhanceNet-Code

## Waifu2

waifu2xis an [image scaling](https://en.wikipedia.org/wiki/Image_scaling) and [noise reduction](https://en.wikipedia.org/wiki/Noise_reduction) program for anime-style art and other types of photos.

waifu2x was inspired by [Super-Resolution](https://en.wikipedia.org/wiki/Super-resolution_imaging)[Convolutional Neural Network](https://en.wikipedia.org/wiki/Convolutional_Neural_Network)(SRCNN).It uses [Nvidia](https://en.wikipedia.org/wiki/Nvidia)[CUDA](https://en.wikipedia.org/wiki/CUDA) for computing, although alternative implementations that allow for [OpenCL](https://en.wikipedia.org/wiki/OpenCL) and [Vulkan](https://en.wikipedia.org/wiki/Vulkan_(API)) have been created.

https://github.com/nagadomi/waifu2x

https://en.wikipedia.org/wiki/Comparison_gallery_of_image_scaling_algorithms

https://analyticsindiamag.com/extraction-of-aadhar-ids-using-opencv-tensorflow-sushil-ostwal-head-data-science-at-motilal-oswal-financial-services

https://towardsdatascience.com/deep-learning-based-super-resolution-with-opencv-4fd736678066

## Rasterization

Rasterisation (or rasterization) is the task of taking an image described in a vector graphics format (shapes) and converting it into a raster image (pixels or dots) for output on a video display or printer, or for storage in a bitmap file format. It refers to both rasterisation of models and 2D rendering primitives such as polygons, line segments, etc.

https://en.wikipedia.org/wiki/Rasterisation

## Dithering

Remove fuzziness in medical or other images (uses MST)

## Video Multimethod Assessment Fusion (VMAF)

Video Multimethod Assessment Fusion (VMAF)is an objective full-reference [video quality](https://en.wikipedia.org/wiki/Video_quality) metric developed by [Netflix](https://en.wikipedia.org/wiki/Netflix) in cooperation with the [University of Southern California](https://en.wikipedia.org/wiki/University_of_Southern_California) and the Laboratory for Image and Video Engineering (LIVE) at [The University of Texas at Austin](https://en.wikipedia.org/wiki/The_University_of_Texas_at_Austin). It predicts subjective video quality based on a reference and distorted video sequence. The metric can be used to evaluate the quality of different [video codecs](https://en.wikipedia.org/wiki/Video_codec), encoders, encoding settings, or transmission variants.

## Datasets

- **ImageNet**

https://image-net.org

## Vertex AI Matching Engine

Vertex AI Matching Engine provides the industry's leading high scale, low latency, vector-similarity matching (also known as approximate nearest neighbor) service, and industry-leading algorithms to train semantic embeddings for similarity-matching use cases.

https://cloud.google.com/vertex-ai/docs/matching-engine/overview

## Liveness detection

https://towardsdatascience.com/implementing-liveness-detection-with-google-ml-kit-5e8c9f6dba45

## Border Detection / Segementation

[Comic book panel segmentation • Max Halford](https://maxhalford.github.io/blog/comic-book-panel-segmentation/)

## Others

https://github.com/imazen/imageflow
