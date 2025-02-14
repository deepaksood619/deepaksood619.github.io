# Cache Invalidation

## Cache Invalidation vs Object Versioning

### Understanding Versioning

Versioning refers to the management of changes to documents, programs, and other information stored as computer files. In the context of CloudFront, versioning is crucial for ensuring that users receive the most up-to-date content without experiencing delays or errors caused by cached outdated files.

One effective approach to versioning is appending a query string or file version number to your assets:

```javascript
// Example of versioning with query strings
const imageUrl = 'https://domain.com/image.png?v=1.0';

// Versioning by renaming files
const imageUrl = 'https://domain.com/image-1.0.png';
```

This method guarantees that when you update content, users will request the latest version of the file, avoiding potential caching issues.

### Cache Invalidation Strategies

Cache invalidation is a process whereby entries in a cache are replaced or removed. In CloudFront, this is typically done when you need to force the CDN to fetch the latest content from your origin server.

To invalidate cached content, you can use the AWS Management Console or AWS CLI. Here is an example using the AWS CLI:

```sh
// Invalidate a single file
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths /path/to/your/file.ext

// Invalidate multiple files
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths /path/to/your/file.ext /path/to/another/file.ext

// Invalidate all files
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths '/*'
```

While invalidation is a powerful tool, it should be used judiciously since it can increase load on your origin and may incur additional costs if done frequently. As a best practice, use versioning methods to minimize the need for cache invalidation.

## Strategies

### 1. Use Cache-Control Headers with Appropriate Settings

- **Short Cache Duration for HTML Pages:** Since news websites are updated frequently, set shorter cache durations for HTML pages (e.g., `max-age=300` seconds or 5 minutes). This will allow the CDN to serve the latest content without needing frequent manual invalidations.
- **Long Cache Duration for Static Assets:** For assets like images, CSS, and JavaScript files, use a long cache duration (e.g., `max-age=31536000` or 1 year) with a versioning scheme for file names. This approach reduces the need for invalidation since versioning handles the updates.

### 2. Leverage URL Versioning for Static Assets

- Use version identifiers (like timestamps, hash values, or sequential numbers) in the file names of static assets. For instance, `/styles/main_v1.css` or `/scripts/app_v123.js`. When an update occurs, update the file name to something like `/styles/main_v2.css`.
- Update the references in the HTML to use the new versioned URLs. This ensures that the CDN serves the latest version of the asset immediately.

### 3. Automate Cache Invalidation for Updated Content

- When publishing new articles or updating existing ones, automatically trigger a cache invalidation for the updated content. For example, invalidate the specific article page or a section (e.g., `/news/latest/`).
- Many CDNs offer APIs that can be integrated with your content management system (CMS) to automate the invalidation process upon publishing.

### 4. Stale-While-Revalidate Strategy

- Use the `stale-while-revalidate` directive in your `Cache-Control` header to allow the CDN to serve stale content while fetching an updated version in the background. This approach ensures low latency for users while still updating content frequently.
- Example: `Cache-Control: max-age=300, stale-while-revalidate=60`. This setting allows the page to be served from cache for up to 5 minutes while fetching a new version in the background if needed.

### 5. Dynamic Cache Busting for Critical Updates

- For critical updates (e.g., breaking news), invalidate the cache for the homepage and the specific news article to ensure the latest content is displayed immediately.
- Use a backend-based approach to detect high-priority updates and trigger an immediate cache refresh for the most relevant pages.

### 6. Implement Edge Side Includes (ESI) for Personalization

- If your website supports personalization (like user-specific content or ads), use ESI to dynamically include these components. The core page can still be cached, but personalized sections are fetched from the origin.
- This helps maintain a high cache hit ratio for the majority of the content while allowing personalized content to remain dynamic.

### 7. Consider Using Service Workers for Offline and Pre-caching

- Utilize service workers in the browser to cache specific assets and pages locally. This enables faster access to recently viewed articles and provides a fallback for users with poor connectivity.
- Service workers can also be used to pre-fetch and cache popular or related content, ensuring a seamless user experience.

### 8. Use a Cache-First Strategy for Evergreen Content

- For articles that are unlikely to change (evergreen content), cache them with longer durations and only invalidate when actual updates occur. This minimizes unnecessary cache purges.

## Links

- [Best Practices for Versioning and Cache Invalidation in CloudFront | Reintech media](https://reintech.io/blog/best-practices-versioning-cache-invalidation-cloudfront)
- [Use file versioning to update or remove content with a CloudFront distribution - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/UpdatingExistingObjects.html)
- [Content delivery best practices  |  Cloud CDN  |  Google Cloud](https://cloud.google.com/cdn/docs/best-practices)
- [How does versioning work on Amazon Cloudfront? - Stack Overflow](https://stackoverflow.com/questions/57643059/how-does-versioning-work-on-amazon-cloudfront)
- [Object Versioning Instead of cache invalidation - Acowebs](https://acowebs.com/guideline/plugin-docs-faqs/wordpress-offload-media/object-versioning-instead-of-cache-invalidation/)
