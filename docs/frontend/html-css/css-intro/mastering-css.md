# Mastering CSS

## The Anatomy of a Rule Set and three types of Style Sheets

- Selector
- Property
- Value

```css
/* Inside the selector is called declaration */

Selector {
  Property: value;
  Property: value;
  Property: value;
}
```

<https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage>

## Three types of style sheets

- Inline - written directly within of the html elements
  - Ex- `<h2 style="font-size: 20px; color: deeppink;">`
- Embedded - written directly inside head block using `<style>` tags.
- External - written inside head with a `<link rel="stylesheet" href="css/style.css">`

## The Box Model and Display Properties

Box Model - How wide and tall the elements of a page will be.

Size of element - Width + padding + Border + Margin.

Box-sizing property - value: border-box; This will include padding margin and border into consideration in width and height calculation.

`<h1>, <h2>, <p>, list item divs, are all examples of naturally block level elements.`

## Key characteristics

- They expand the full length available.

- They force a line break after (therefore they stack on top of each other)

Inline Elements sit next to each other, they only take up size only as much as they need.

`<anchor> <span> <i> <b> <strong> <n>`

## CSS resets

Used to eliminate browser inconsistencies with default browser styling and really eliminate all browser defaults in general.

Load css reset - eric meyer's reset <http://meyerweb.com/eric/tools/css/reset>

## CSS Grids

CSS Grid brings with it a whole new value called a fraction unit. The fraction unit is written likefr, and it allows you to split the container into as many fractions as you want.

But using fraction unit doesn't make our layout responsive as if there are 3 columns then in small display also there will be 3 columns but responsive.

We want our grid to vary the amount of columns with the width of the container.

3 main advanced css concepts

- repeat()

This is a more powerful way of specifying your columns and rows. Let's take our original grid and change it to using repeat():

<https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228>

<https://scrimba.com/c/c2gd3T2>

## Responsive Web Design

- Fluid Layout
- Media Queries
- Box Model (margin, border, padding, content)
- Selector
- Attributes
- Span
- browser specific prefixes (for all browser supports)
- <https://www.udacity.com/course/responsive-web-design-fundamentals--ud893>
- Patterns
  - Grid Fluid System
- Category -
- Mostly Fluid
- Layout Shifter
- Column Drop
- Off canvas
- SrcSet for images for different sizes
- Art Direction
- Responsive Images
- Simple Cropping
- Grid System
- Art Direction
- Variable Width
- picture element
- Data URI (Convert images in base64 encoding)
- image sprites (CSS spriting is a technique whereby a number of images are combined into a single - "sprite sheet" image)
