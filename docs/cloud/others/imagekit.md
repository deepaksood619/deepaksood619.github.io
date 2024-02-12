# Imagekit

### Intro

- https://imagekit.io
- Image crop with Focus mode
- https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#focus-fo

### Features

- [Performance monitoring - ImageKit.io Docs](https://docs.imagekit.io/features/performance-monitoring)
- [SEO-friendly image URL - ImageKit.io Docs](https://docs.imagekit.io/features/dynamic-seo-suffix)
- [Default Images - ImageKit.io Docs](https://docs.imagekit.io/features/default-images)
- [Progressive JPEGs - ImageKit.io Docs](https://docs.imagekit.io/features/progressive-jpegs)
- [Webhooks - ImageKit.io Docs](https://docs.imagekit.io/api-reference/api-introduction/webhooks)
- [Upload files - ImageKit.io Docs](https://docs.imagekit.io/media-library/overview/upload-files)
- [Digital Asset Storage and Management | ImageKit.io](https://imagekit.io/features/digital-asset-storage/)

### Bulk Upload

- [How to bulk upload images in ImageKit? | ImageKit Help Center](https://help.imagekit.io/en/articles/2558077-how-to-bulk-upload-images-in-imagekit)
- [Amazon S3 bucket - ImageKit.io Docs](https://docs.imagekit.io/integration/configure-origin/amazon-s3-bucket-origin)
- [S3 Compatible External Storages - ImageKit.io Docs](https://docs.imagekit.io/integration/configure-origin/s3-compatible-external-storages)
- [How it works? - ImageKit.io Docs](https://docs.imagekit.io/integration/how-it-works)
- [Optimize and resize images in AWS S3 in real-time with ImageKit](https://imagekit.io/blog/image-optimization-resize-aws-s3-imagekit/)

#### Question

For optimizing the upload process of a huge size of images with a lot of images, what is the way to go, where uploads are distributed throughout the world?

1. We should upload to S3 using S3 presigned URLs and serve those images via imagekit, by connecting to S3 bucket using external storage?
2. Upload to imagekit directly using it's react library and authenticationEndpoint and don't use S3?

Currently we are sending images to backend, and backend uploads to imagekit, which is not a good scalable method, so we will migrate to one of the above methods.

### Optimizations

- [Understanding different image settings in your ImageKit dashboard | ImageKit Help Center](https://help.imagekit.io/en/articles/2513507-understanding-different-image-settings-in-your-imagekit-dashboard)
- Optimizations
    - [Quality Optimization - ImageKit.io Docs](https://docs.imagekit.io/features/image-optimization/quality-optimization)
        - [Test Image with parameter - tr:q-30](https://ik.imagekit.io/blocktoonsofficial/comics/656816bd25b970fa8e826090/chapter_2/tr:q-30/1)
    - [Automatic image format conversion - ImageKit.io Docs](https://docs.imagekit.io/features/image-optimization/automatic-image-format-conversion)
    - [Chroma Subsampling - ImageKit.io Docs](https://docs.imagekit.io/features/image-optimization/chroma-subsampling)
    - [Metadata, Color Profile and Orientation - ImageKit.io Docs](https://docs.imagekit.io/features/image-optimization/metadata-color-profile-and-orientation)
    - [PNG Compression - ImageKit.io Docs](https://docs.imagekit.io/features/image-optimization/png-compression)
- [Lighter And Automatic Responsive Images With Client Hints](https://imagekit.io/blog/lighter-automatic-responsive-images-client-hints/)
- [Responsive Images - A Reference Guide from A to Z | ImageKit.io](https://imagekit.io/responsive-images/)
- [Perfectly Optimize Images Using ImageKit’s Tools And Analytics](https://imagekit.io/blog/how-to-use-imagekits-tools-and-analytics-to-perfectly-optimize-your-images/)
- [React Image Optimization: A Guide for Web Developers](https://imagekit.io/blog/react-image-optimization/)
- [6 Best Ways To Share Large Files For Seamless Collaboration](https://imagekit.io/blog/how-to-share-large-files-over-internet/)
- [How can I retrieve my original image with ImageKit? | ImageKit Help Center](https://help.imagekit.io/en/articles/3129423-how-can-i-retrieve-my-original-image-with-imagekit)

### Caching

Age on "Embedded URL" is 178571 seconds, i.e. approx 50 hours.
Age on the "Individual URL is 12951 sectors i.e. approx 3.5 hours.
​
If I try to skip the cache on the embedded URL by adding a versioning parameter v1, it does give the updated dimensions.
​
Purging the cache for this URL or adding a versioning parameter should help you fix this.

---

ImageKit follows a recommended setting of a 365-day cache time, by default. If you'd like this cache time to be customised, there are two ways to resolve this for you -

#### 1. Versioning of your image URLs

Since caches are based on the image URL, adding a simple parameter like the last updated timestamp to the URL is the most effective way of automatically clearing cache, when it is actually needed.

For eg, If there are two images 1.jpg and 2.jpg both of them get updated at timestamp 156237123. There URLs would look like - 1.jpg?t=156237123 and 2.jpg?t=156237123

Now, if image 2.jpg is updated, you can use the last updated timestamp from your database to change the value of the parameter 1.jpg?t=156237123 (this URL continues to remain cached as long as possible) 2.jpg?t=158268232 (this URL is now automatically purged from cache)It requires a small change to your code, but this would work the best regardless of what service you use.
​

#### 2. Using a custom cache-control time with ImageKit

This option allows caching based on the cache control headers being passed from your [origin](https://app.intercom.com/integration/configure-origin) attached to ImageKit.io. For example, if your origin [https://storage.googleapis.com/](https://storage.googleapis.com/) sends a cache-control header to cache a file for 1 hour (which it does on your website), ImageKit.io applies the cache-control header across all its internal caches, generated transformations, and CDN.This ensures that the cache control set by you is obeyed at all times.

Please note: We will have to enable this option for you at our end. And this can only be enabled on a paid plan.

I would personally recommend that if cache clear can be resolved with option 1, then please prefer that. It maximises the benefit of caching on the CDN while purging it for only images that actually get updated, instead of a periodic cache clear for all images.
​
In case there is a specific URL that you would like to purge cache for, as an exception, you can always do so from the dashboard here: [https://imagekit.io/dashboard/purge-cache](https://imagekit.io/dashboard/purge-cache). More details on how to use this method of cache purge here: [https://docs.imagekit.io/features/cache-purging](https://docs.imagekit.io/features/cache-purging)

---

The cache purging methodology would essentially remain the same even if images are stored on ImageKit's media library.

However, it does simplify the process for you.
If you make any edits to the image, you can save it as a new version or as a new file on the media library.

If a new version of an image is created on ImageKit's media library, we update the time stamp on the newer version's URL.
If you save the image as a new file, we added a random string to the image's name, thus also updating the URL.
If you replace the old URL with the new URL on the front end, it would have an effect of skipping the cached response of the older version.

For example: If this is the older image: [https://ik.imagekit.io/uf5ueu4sr6/sakura%20tree%20in%20bloom.jpg?updatedAt=1704462165134](https://ik.imagekit.io/uf5ueu4sr6/sakura%20tree%20in%20bloom.jpg?updatedAt=1704462165134)
I make edits and create this newer version: [https://ik.imagekit.io/uf5ueu4sr6/sakura%20tree%20in%20bloom.jpg?updatedAt=1704462541504](https://ik.imagekit.io/uf5ueu4sr6/sakura%20tree%20in%20bloom.jpg?updatedAt=1704462541504)
If you update the time stamp on your URL to the one on newer version, you skip the cached response, without having to purge the cache.

[Purge cache - ImageKit.io Docs](https://docs.imagekit.io/api-reference/media-api/purge-cache)

### Settings

- Use best format for Image Delivery - Turned on
- Optimize image quality before delivery - 50%
- Restrict image size based on user's device
    - Desktop - 2000x2000
    - Mobile - 1000x1000
    - Width of 1440px for laptops, 960px for tablets, 480px and High-density images for bigger phones, and 320px for smaller phones.
- Parameters - [Dynamic image resizing](https://imagekit.io/blog/dynamic-image-resizing/)

### Libraries / SDKs

- [SDK - ImageKit.io Docs](https://docs.imagekit.io/api-reference/api-introduction/sdk)
- [GitHub - imagekit-developer/imagekit-javascript: Javascript SDK for using ImageKit.io](https://github.com/imagekit-developer/imagekit-javascript)
- [GitHub - imagekit-developer/imagekit-react: React SDK for using ImageKit.io](https://github.com/imagekit-developer/imagekit-react)
- [GitHub - imagekit-developer/imagekit-python: ImageKit.io Python SDK](https://github.com/imagekit-developer/imagekit-python)

## Others

- [Serverless Image Handler | AWS Solutions](https://aws.amazon.com/solutions/implementations/serverless-image-handler/)
- [Use image CDNs to optimize images](https://web.dev/image-cdns/)
- Cloudinary
