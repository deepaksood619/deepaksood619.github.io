# Component Libraries

https://lwc.dev

## CSS in JS

1. https://github.com/vercel/styled-jsx
2. https://github.com/emotion-js/emotion

    Emotion is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS. With source maps and labels, Emotion has a great developer experience and great performance with heavy caching in production.

    https://blog.logrocket.com/emotion-in-react

3. styled-components
4. Treat
5. TypeStyle
6. Fela
7. Stitches
8. JSS
9. Goober
10. Compiled
11. Aphrodite
12. Radium
13. Styletron
14. Glamorous
15. Glamor

https://css-tricks.com/a-thorough-analysis-of-css-in-js

https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b

## Component Libraries

1. Material UI / MaterialUI
2. https://github.com/ant-design/ant-design
3. Styled Components
4. React bootstrap - https://react-bootstrap.github.io

    https://www.toptal.com/bootstrap/react-bootstrap-components

5. ReactStrap - https://reactstrap.github.io https://github.com/reactstrap/reactstrap
6. https://github.com/bvaughn/react-virtualized
7. https://github.com/gabrielbull/react-desktop
8. https://github.com/rebassjs/rebass
9. **https://github.com/grommet/grommet (for mobile UIs) - https://v2.grommet.io**
10. https://github.com/Semantic-Org/Semantic-UI-React
11. https://github.com/palantir/blueprint
12. https://github.com/microsoft/fluentui
13. https://tailwindui.com
14. https://chakra-ui.com
15. [Mantine](https://mantine.dev/)

https://technostacks.com/blog/react-component-libraries

https://www.onestopdevshop.io/best-react-component-library-in-2021

https://github.com/brillout/awesome-react-components

## VueJS

https://element.eleme.io/#/en-US

https://madewithvuejs.com/element-ui

## Icons - https://iconscout.com/blog/best-react-icons-library

https://www.npmjs.com/package/react-feather

[google.com/fonts](http://google.com/fonts)

[**https://mui.com/components/icons/**](https://mui.com/components/icons/)

https://www.npmjs.com/package/@material-ui/icons

yarn add @mui/icons-material

MUI provides icons support in three ways

1. Standardized [Material Design icons](https://mui.com/components/icons/#material-icons) exported as React components (SVG icons)
2. With the [SvgIcon](https://mui.com/components/icons/#svgicon) component, a React wrapper for custom SVG icons
3. With the [Icon](https://mui.com/components/icons/#icon-font-icons) component, a React wrapper for custom font icons

Whenever possible SVG is preferred as it allows code splitting, supports more icons, and renders faster and better

react-icons

unicorns

Styled icons

## Placeholders

placehold.it / placekitten.com / placepuppy.it

## CSS Frameworks

- Bulma (https://bulma.io) - CSS Framework
- **Twitter bootstrap**
- **tailwindcss**
    - Atomic CSS
    - Tree shaking
    - Autocompletion
    - [Headless UI - Unstyled, fully accessible UI components](https://headlessui.com/)

## Customizing PostCSS Config

Out of the box, with no configuration, Next.js compiles CSS using [PostCSS](https://postcss.org/).

To customize PostCSS config, you can create a top-level file called [postcss.config.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins). This is useful if you're using libraries like [Tailwind CSS](https://tailwindcss.com/).

Here are the steps to add [Tailwind CSS](https://tailwindcss.com/). We recommend using postcss-preset-env and postcss-flexbugs-fixes to match [Next.js's default behavior](https://nextjs.org/docs/advanced-features/customizing-postcss-config#default-behavior). First, install the packages:

`npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes`

Then write the following for [postcss.config.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins):

```js
module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}
```

We also recommend [removing unused CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) by specifying the purge option on `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ]
  // ...
}
```

https://tailwindcss.com

- YAML by Derk Jesse
- 960 framework
- susy
- Frameless
- MaterializeCSS
- Nag - Semantic UI
- Prime NG
- Foundation4 by Zurb

https://www.tutorialspoint.com/css/what_is_css.htm

https://css-tricks.com

https://www.freecodecamp.org/news/learn-css-flexbox

[Learn CSS in 20 Minutes](https://www.youtube.com/watch?v=1PnVor36_40)

Grunt & Gulp - To combine modules of CSS (Command Line Tools)

### What are the advantages and caveats of using a CSS framework such as Bootstrap or Foundation? What's the proper way to include frameworks in your workflow?

#### Advantages

Frameworks allow for fast prototyping of layouts, elements and pages, and promote reusability of consistent elements across the whole project. This often eliminates the need of dead end deliverables such as Photoshop mockups or other high-fidelity static sketches. In contrast, the HTML prototypes powered by a framework later evolve into the actual production templates code used by the new site. Another advantage is the myriad of development tools that come with the better frameworks: LESS/SASS preprocessors, variables for key values in the design, builder tools like Grunt/Gulp, ready to use JS scripts for commonly used interactions (modals, carousels and collapsing boxes, among others). Finally, frameworks come with good practices and commonly used pieces of standardized, well documented code built-in, and a large community to turn to when issues arise.

#### Disadvantages

Although frameworks provide tons of built-in features and eliminate the need to write repetitive code, they also tend to generalize common elements and often lead to samey-looking designs. Another caveat is that when using a framework for a complex or unconventional design or a layout with a more complex grid, there's more effort involved in "fighting" the frameworks compared to simply writing the code from scratch. Sometimes, frameworks come with too much stuff that never gets used, or redundant styles that get overridden if not used correctly, leading to slower load times compared to a clean code written from scratch.

To properly utilise a CSS framework, developers should not include the compiled CSS of the framework and then write their own overrides. To take full advantage of the framework, the built-in development tools should be used: variables to be set, LESS/SASS mix-ins to be utilised, and the unused components to be excluded. Another frequent mistake is the heavy reliance on framework markup for layout and styling, which makes the separation of content and style harder and leads to design changes requiring editing HTML instead of CSS.
