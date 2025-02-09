# NextJS

### Why NextJS

To build a complete web application with React from scratch, there are many important details you need to consider:

- Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
- You need to do production optimizations such as code splitting.
- You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
- You might have to write some server-side code to connect your React app to your data store.

A framework can solve these problems. But such a framework must have the right level of abstraction - otherwise it won't be very useful. It also needs to have great "Developer Experience", ensuring you and your team have an amazing experience while writing code.

Enter **Next.js, the React Framework**. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications.

Next.js has the best-in-class "Developer Experience" and many built-in features; a sample of them are:

- An intuitive [page-based](https://nextjs.org/docs/basic-features/pages) routing system (with support for [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes))
- [Pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering), both [static generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)(SSG) and [server-side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering)(SSR) are supported on a per-page basis
- Automatic code splitting for faster page loads
- [Client-side routing](https://nextjs.org/docs/routing/introduction#linking-between-pages) with optimized prefetching
- [Built-in CSS](https://nextjs.org/docs/basic-features/built-in-css-support) and [Sass support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support), and support for any [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js) library
- Development environment with [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh) support
- [API routes](https://nextjs.org/docs/api-routes/introduction) to build API endpoints with Serverless Functions
- Fully extendable
- Incremental Static Regeneration

## Code splitting and prefetching

Next.js does code splitting automatically, so each page only loads what's necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you have hundreds of pages.

Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

Furthermore, in a production build of Next.js, whenever [Link](https://nextjs.org/docs/api-reference/next/link) components appear in the browser's viewport, Next.js automaticallyprefetchesthe code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

## Image Component and Image Optimization

[next/image](https://nextjs.org/docs/api-reference/next/image) is an extension of the HTML `<img>` element, evolved for the modern web.

Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp) when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.

Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

https://nextjs.org/docs/basic-features/image-optimization

## Pre-Rendering

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization).

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration)

### [Two forms of Pre-rendering](https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering)

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

- [Static Generation (Recommended)](https://nextjs.org/docs/basic-features/pages#static-generation-recommended): The HTML is generated at build time and will be reused on each request.
- [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering): The HTML is generated on each request.

Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option.

You can also use Client-side Rendering along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by client side JavaScript. To learn more, take a look at the [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side) documentation.

- Next.js' [pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering) feature.
- The two forms of pre-rendering: [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) and [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering).
- Static Generation [with data](https://nextjs.org/docs/basic-features/pages#static-generation-with-data), and [without data](https://nextjs.org/docs/basic-features/pages#static-generation-without-data).
- [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and how to use it to import external blog data into the index page.
- Some useful information on [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

## Commands

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

npm run dev

yarn # install all dependencies

yarn start # start local server

yarn build # build a production ready deployment

next export #allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.
```

## Deployment

https://nextjs.org/docs/deployment

https://nextjs.org/docs/advanced-features/static-html-export

## Next.js 12

- Middleware
- HTTP Streaming
- Server Components
- URL Imports

## State Management

[React Hooks vs. Redux: Do Hooks and Context replace Redux? - LogRocket Blog](https://blog.logrocket.com/react-hooks-context-redux-state-management/)

## References

- https://www.freecodecamp.org/news/the-next-js-handbook
- https://masteringnextjs.com
- https://www.freecodecamp.org/news/nextjs-tutorial
- [How to Integrate MongoDB Into Your Next.js App | MongoDB](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
- [Learn Next.js by Building a Custom API with MongoDB](https://www.freecodecamp.org/news/full-stack-with-nextjs-and-appwrite-course/)
- [Full Stack JavaScript Course: Build a Hotel Management Site with Next.js, Sanity.io, and Tailwind CSS](https://www.freecodecamp.org/news/build-and-deploy-a-hotel-management-site/)
- [Learn NestJS – Complete Course - YouTube](https://www.youtube.com/watch?v=sFnAHC9lLaw&ab_channel=freeCodeCamp.org)
- [Event-Driven Architecture Course – NextJS, Clerk, Webhooks - YouTube](https://www.youtube.com/watch?v=TtvytXHLAsc&ab_channel=freeCodeCamp.org)
- [Strapi 5 and Next.js 15 Full Stack Project Course - YouTube](https://youtu.be/Q-cPtlYG1cY)
