# Centering

```css
/* Centering a div in a page, Basic */
.center-div
{
  margin: 0 auto;
  width: 100px;
}

/* Centering a div within a div, old-school */
.outer-div
{
  padding: 30px;
}
.inner-div
{
  margin: 0 auto;
  width: 100px;
}

/* Centering a div within a div with inline-block */
.outer-div
{
  padding: 30px;
  text-align: center;
}
.inner-div
{
  display: inline-block;
  padding: 50px;
}

/* Centering a div within a div, horizontally and vertically */
.outer-div
{
  padding: 30px;
}
.inner-div
{
  margin: auto;
  width: 100px;
  height: 100px;
}

/* Centering a div at the bottom of a page */
.outer-div
{
  position: absolute;
  bottom: 30px;
  width: 100%;
}
.inner-div
{
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}

/* Centering a div in a page, horizontally and vertically */
.center-div
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
}

/* Centering a div in a page, responsive */
.center-div
{
  margin: 0 auto;
  max-width: 700px;
}

/* Centering a div within a div, inner div responsive */
.outer-div
{
  padding: 30px;
}
.inner-div
{
  margin: 0 auto;
  max-width: 700px;
}

/* Centering two responsive divs, side by side */
.container
{
  text-align: center;
}
.left-div
{
  display: inline-block;
  max-width: 300px;
  vertical-align: top;
}
.right-div
{
  display: inline-block;
  max-width: 150px;
}
@media screen and (max-width: 600px)
{
  .left-div, .right-div
  {
   max-width: 100%;
  }
}

/* Flexbox, div centered */
.container
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.item
{
  background-color: #f3f2ef;
  border-radius: 3px;
  width: 200px;
  height: 100px;
}
```

<http://www.tipue.com/blog/center-a-div>

<https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways>
