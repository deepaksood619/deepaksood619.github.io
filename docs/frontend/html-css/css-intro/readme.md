# CSS Intro

Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.

CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects.

CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.

## Advantages of CSS

- CSS saves time− You can write CSS once and then reuse same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many Web pages as you want.
- Pages load faster− If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule of a tag and apply it to all the occurrences of that tag. So less code means faster download times.
- Easy maintenance− To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.
- Superior styles to HTML− CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.
- Multiple Device Compatibility− Style sheets allow content to be optimized for more than one type of device. By using the same HTML document, different versions of a website can be presented for handheld devices such as PDAs and cell phones or for printing.
- Global web standards− Now HTML attributes are being deprecated and it is being recommended to use CSS. So its a good idea to start using CSS in all the HTML pages to make them compatible to future browsers.
- Offline Browsing− CSS can store web applications locally with the help of an offline catche.Using of this, we can view offline websites.The cache also ensures faster loading and better overall performance of the website.
- Platform Independence− The Script offer consistent platform independence and can support latest browsers as well.

## Others

- CSS Floats
- CSS Clear
- Psuedo element
- Shadow DOM
- **Cascading** (means you go down and down to rules until the most specific and then it gets applied)
- **Specificity**
  - Browser reads css rules from top to bottom, so if there are two equal css rules, the browser will apply which is last.
  - 1st rule - More specific css rules apply over others
  - Specificity - `<inline styles> <id> <class, attributes and pseudo-classes> <Elements and pseudo elements>`
- **CSS Modules -** Selectors, Box model, Backgrounds and Borders, Text Effects, Transformations
  - **Imports -** merge all imports into one
  - **Nesting -** Moduler code
  - **Mixins -** reusable code, pass arguments, like js code
  - **Functions -** Change color by passing arguments
  - **Math -** like (color - 50)
- **CSS Flexbox** (it provides an efficient way to lay out, align and distribute space among items in a container or div)

[**Learn Flexbox in 15 Minutes**](https://www.youtube.com/watch?v=fYq5PXgSsbE)

- **CSS -** Color, Grid, Helpers, Media, Pulse, Sass, Shadow, Tables, Transitions, Typography
- **BEM -** Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development
- **!Important -** It means, essentially, what it says; that 'this is important, ignore subsequent rules, and any usual specificity issues, apply this rule!'
- **CSS Reset**, set of CSS rules that resets the styling of all HTML elements to a consistent baseline.
- Negative Space (padding or margin)
- **Overflow:** auto (for scroll bar)

## Selectors

- id - `#button`
- class - .button
- tag - a - find all element tag

## CSS Style Selectors (property : value;)

- 369 css properties

## Advanced Selectors

- tag selector `<tag>`
- class selector `.container`
- id selector - `#container`
- Stacked selectors `(a, strong { color: red; })`
- All selector `(* { margin: 0; padding: 0; })`
- Descendant selector `( li a { color: red; })`
- Direct Descendant selector `(.container > ul { border: 6px solid red; })` (One layer deep childrens and not other layers)
- Adjacent Selectors `(ul + p { color: red; })` (only the adjacent p to ul gets selected)
- Sibling Combinator `(ul ~ p { color: red; }`)` (any paragraph following ul will be selected)
- Pseudo Selectors `(a:hover { color: red; })`
- Nth selector `(p:first-child { color: red; })` (first-child, last-of-type, nth-child(3), nth-child(odd), nth-child(even), nth-child(3n))

## CSS Units

| em | Relative to the font-size of the element (2em means 2 times the size of the current font) |
|:---:|:---:|
| ex | Relative to the x-height of the current font (rarely used) |
| ch | Relative to the width of the "0" (zero) |
| rem | Relative to font-size of the root element |
| vw | Relative to 1% of the width of the viewport* |
| vh | Relative to 1% of the height of the viewport* |
| vmin | Relative to 1% of viewport's* smaller dimension |
| vmax | Relative to 1% of viewport's* larger dimension |
| % | Relative to the parent element |

**Tip:** The em and rem units are practical in creating perfectly scalable layout

- Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

<https://www.w3schools.com/cssref/css_units.asp>

## CSS3 Modules

- Selectors
- Box Model
- Backgrounds and Borders
- Image Values and Replaced Content
- Text Effects
- 2D/3D Transformations
- Animations
- Multiple Column Layout
- User Interface
