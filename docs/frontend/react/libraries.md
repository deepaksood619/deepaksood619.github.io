# Libraries

## TODO

- **React Query -** https://react-query.tanstack.com
- **React Router -** https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation

## JS libraries

https://underscorejs.org https://github.com/jashkenas/underscore

Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.

## Libraries

- https://github.com/facebook/create-react-app
- https://www.npmjs.com/package/uuid

## Editors

- https://www.sanity.io/guides/top-5-rich-text-react-components
- https://www.npmjs.com/package/easymde
- https://www.npmjs.com/package/react-simplemde-editor
- https://www.npmjs.com/package/react-quill
- https://www.npmjs.com/package/summernote
- https://www.npmjs.com/package/react-scripts
- https://www.npmjs.com/package/react-notifications
- [**https://www.npmjs.com/package/dotenv**](https://www.npmjs.com/package/dotenv)
- https://www.npmjs.com/package/codemirror - CodeMirror is a code editor component for the web. It can be used in websites to implement a text input field with support for many editing features, and has a rich programming interface to allow further extension.
- https://codemirror.net
- https://www.npmjs.com/package/compression
- https://www.npmjs.com/package/cookie-parser
- https://www.npmjs.com/package/jszip
- https://www.npmjs.com/package/mousetrap
- https://www.npmjs.com/package/process
- https://www.npmjs.com/package/history
- https://www.npmjs.com/package/react-responsive
- https://introjs.com
- https://www.npmjs.com/package/react-virtualized (instead use react-window)
- https://www.npmjs.com/package/react-window
- [**https://www.npmjs.com/package/dayjs**](https://www.npmjs.com/package/dayjs)
- https://date-fns.org - date-fns provides the most comprehensive, yet simple and consistent toolset for manipulatingJavaScript dates in a browser & Node.js.
- https://github.com/date-fns/date-fns
- https://github.com/react-dnd/react-dnd (Drag and Drop)
- https://github.com/formatjs/formatjs
- https://github.com/davidhu2000/react-spinners
- https://www.npmjs.com/package/react-contentful
- https://www.npmjs.com/package/contentful
- [GitHub - ckeditor/ckeditor5: Powerful rich text editor framework with a modular architecture, modern integrations, and features like collaborative editing. WYSIWYG](https://github.com/ckeditor/ckeditor5)

## Select2

https://select2.org

## Modernizr

[Modernizr](https://modernizr.com/) is a JavaScript library for conviently detecting HTML5 and CSS3 feature support in web browsers. In detecting feature support, it allows developers to test for some of the new technologies and then provide fallbacks for browsers that do not support them.

WebP support - Look for the properties Modernizr.webp, Modernizr.webp.lossless, Modernizr.webp.alpha and Modernizr.webp.animation.

Modernizr(js library for feature detection)

## Forms

- [**https://github.com/formium/formik**](https://github.com/formium/formik)
- [**https://github.com/react-hook-form/react-hook-form**](https://github.com/react-hook-form/react-hook-form)
	- [Form Builder](https://react-hook-form.com/form-builder)
- https://github.com/final-form/react-final-form
- https://github.com/redux-form/redux-form
- https://engineering.udacity.com/mastering-the-art-of-forms-in-react-1bd65fb664d7
- [5 best open source form builder apps (tried and tested)](https://budibase.com/blog/open-source-form-builder/)
	1. Budibase
	2. Kinto form builder
	3. form.io
	4. Alpaca
	5. Ohmyform
- [Powerful React Form Builders to Consider in 2024 — SitePoint](https://www.sitepoint.com/react-form-builders)
	- [SurveyJS · GitHub](https://github.com/surveyjs)

## react-query

Performant and powerful datasynchronization for React

Fetch, cache and update data in your React and React Native applications all without touching any "global state".

- Backend agnostic
- Dedicated Devtools
- Auto Caching
- Auto Refetching
- Window Focus Refetching
- Polling/Realtime Queries
- Parallel Queries
- Dependent Queries
- Mutations API
- Automatic Garbage Collection
- Paginated/Cursor Queries
- Load-More/Infinite Scroll Queries
- Scroll Recovery
- Request Cancellation
- Suspense Ready!
- Render-as-you-fetch
- Prefetching
- Variable-length Parallel Queries
- Offline Support
- SSR Support
- Data Selectors

https://react-query.tanstack.com

## Flux

https://facebook.github.io/flux

## Testing

## Jest

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

[**Jest**](https://facebook.github.io/jest/) is a JavaScript test runner that lets you access the DOM via [jsdom](https://reactjs.org/docs/testing-environments.html#mocking-a-rendering-surface). While jsdom is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a great iteration speed combined with powerful features like mocking [modules](https://reactjs.org/docs/testing-environments.html#mocking-modules) and [timers](https://reactjs.org/docs/testing-environments.html#mocking-timers) so you can have more control over how the code executes.

https://www.freecodecamp.org/news/how-to-test-react-applications

[**React Testing Library**](https://testing-library.com/react) is a set of helpers that let you test React components without relying on their implementation details. This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. Although it doesn't provide a way to "shallowly" render a component without its children, a test runner like Jest lets you do this by [mocking](https://reactjs.org/docs/testing-recipes.html#mocking-modules).

https://reactjs.org/docs/testing.html

## Cypress

End-to-end testing

- https://www.cypress.io/how-it-works
- https://www.cypress.io
- https://github.com/enzymejs/enzyme
- [Learn End-to-End Testing with Cypress for JavaScript Applications](https://www.freecodecamp.org/news/mastering-end-to-end-testing-with-cypress-for-javascript-applications/)

## classnames

Using `classnames` library to toggle classes

[classnames](https://github.com/JedWatson/classnames) is a simple library that lets you toggle class names easily. You can install it usingnpm install classnamesoryarn add classnames.

Please take a look at its [documentation](https://github.com/JedWatson/classnames) for more details, but here's the basic usage:

- Suppose that you want to create anAlertcomponent which acceptstype, which can be'success'or'error'.
- If it's'success', you want the text color to be green. If it's'error', you want the text color to be red.

You can first write a CSS module (e.g.alert.module.css) like this:

```js
.success {
  color: green;
}
.error {
  color: red;
}
```

And useclassnameslike this:

```js
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
```

https://github.com/JedWatson/classnames

https://www.freecodecamp.org/news/front-end-development-tools-you-should-know
