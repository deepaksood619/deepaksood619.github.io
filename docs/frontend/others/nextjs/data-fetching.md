# Data Fetching

**Note**: Next.js 13 introduces the `app/` directory (beta). This new directory has support for [colocated data fetching](https://beta.nextjs.org/docs/data-fetching/fundamentals) at the component level, using the new React `use` hook and an extended `fetch` Web API.

Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case. These include pre-rendering with **Server-side Rendering** or **Static Generation**, and updating or creating content at runtime with **Incremental Static Regeneration**.

1. SSR: Server-side rendering
2. SSG: Static-site generation
3. CSR: Client-side rendering
4. Dynamic routing
5. ISR: Incremental Static Regeneration

## getServerSideProps

If you export a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps`.

[Data Fetching: getServerSideProps | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

## getStaticProps

If you export a function called `getStaticProps` (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by `getStaticProps`.

[Data Fetching: getStaticProps | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

## MongoDB

[How to Integrate MongoDB Into Your Next.js App | MongoDB](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)

[Building Modern Applications with Next.js and MongoDB | MongoDB](https://www.mongodb.com/developer/languages/javascript/nextjs-building-modern-applications/)

[How to build a Nextjs application with MongoDB and deploy on Vercel | Engineering Education (EngEd) Program | Section](https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/)

### Prisma ORM

[GitHub - prisma/prisma: Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB](https://github.com/prisma/prisma)

[Using Prisma ORM with MongoDB in Next.js | by Eshwaren M | ITNEXT](https://itnext.io/using-prisma-orm-with-mongodb-in-next-js-e42b1f7543e6)

[Prisma in your stack | Prisma](https://www.prisma.io/stack)

[Authentication and DB access with Next, Prisma, and MongoDB](https://blog.openreplay.com/authentication-and-db-access-with-next-prisma-and-mongodb/)

### Mongoose

[GitHub - Automattic/mongoose: MongoDB object modeling designed to work in an asynchronous environment.](https://github.com/Automattic/mongoose)

[Using Mongoose with Next.js 11. A simple guide on how to use the… | by Eshwaren M | ITNEXT](https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c)

### TypeORM

[GitHub - typeorm/typeorm: ORM for TypeScript and JavaScript. Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.](https://github.com/typeorm/typeorm)

## Caching

[Building Your Application: Caching | Next.js](https://nextjs.org/docs/app/building-your-application/caching)
