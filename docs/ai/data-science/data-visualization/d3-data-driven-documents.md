# D3 (Data Driven Documents)

<https://www.freecodecamp.org/learn/data-visualization>

D3, or D3.js, stands for Data Driven Documents. It's a JavaScript library for creating dynamic and interactive data visualizations in the browser.

D3 is built to work with common web standards -- namely HTML, CSS, and **Scalable Vector Graphics (SVG).**

D3 supports many different kinds of input data formats. Then, using its powerful built-in methods, you can transform those data into different charts, graphs, and maps.

## Technical Principles

The D3.js library uses pre-built functions to select elements, create SVG objects, style them, or add transitions, dynamic effects or [tooltips](https://en.wikipedia.org/wiki/Tooltip) to them. These objects can also be styled using CSS. Large datasets can be bound to SVG objects using D3.js functions to generate text/graphic charts and diagrams. The data can be in various formats such as [JSON](https://en.wikipedia.org/wiki/JSON), [comma-separated values](https://en.wikipedia.org/wiki/Comma-separated_values)(CSV) or [geoJSON](https://en.wikipedia.org/wiki/GeoJSON), but, if required, JavaScript functions can be written to read other data formats.

### Selections

The central principle of D3.js design is to enable the programmer to first use a CSS-style selector to select a given set of [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)(DOM) nodes, then use operators to manipulate them in a similar manner to [jQuery](https://en.wikipedia.org/wiki/JQuery).For example, one may select all HTML `<p>...</p>` elements, and then change their text color, e.g. to lavender:

```html
d3.selectAll("p")             // select all <p> elements
.style("color", "lavender")  // set style "color" to value "lavender"   .attr("class", "squares")   // set attribute "class" to value "squares"   .attr("x", 50);         // set attribute "x" (horizontal position) to value 50px

d3.selectAll("li")
.text("list item")
```

The selection can be based on an HTML tag, class, identifier, attribute, or place in the hierarchy. Once elements are selected, one can apply operations to them. This includes getting and setting attributes, display texts, and styles. Elements may also be added and removed. This process of modifying, creating and removing HTML elements can be made dependent on data, which is the basic concept of D3.js.

The **select()** method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name.

The **append()** method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The **text()** method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

```html
d3.select("body")
.append("h1")
.text("Learning D3")
```

### Transitions

By declaring a transition, values for attributes and styles can be smoothly interpolated over a certain time. The following code will make all HTML `<p>...</p>` elements on a page gradually change their text color to pink:

```html
d3.selectAll("p")          // select all <p> elements   .transition("trans_1")     // transition with name "trans_1"     .delay(0)                  // transition starting 0ms after trigger     .duration(500)             // transitioning for 500ms     .ease(d3.easeLinear)       // transition easing progression is linear...   .style("color", "pink");   // ... to color:pink
```

### Data-binding

```python
// Data
var countriesData = [
     { name:"Ireland",  income:53000, life: 78, pop:6378, color: "black"},
     { name:"Norway",   income:73000, life: 87, pop:5084, color: "blue" },
     { name:"Tanzania", income:27000, life: 50, pop:3407, color: "grey" }
  ];

// Create SVG container  var svg = d3.select("#hook").append("svg")
        .attr("width", 120)
        .attr("height", 120)
        .style("background-color", "#D0D0D0");
       
// Create SVG elements from data

svg.selectAll("circle")   // create virtual circle template      .data(countriesData)     // bind data      
.join("circle")     // joins data to the selection and creates circle elements for each individual data       
.attr("id", function(d) { return d.name })          // set the circle's id according to the country name       
.attr("cx", function(d) { return d.income / 1000  })// set the circle's horizontal position according to income       
.attr("cy", function(d) { return d.life })         // set the circle's vertical position according to life expectancy       
.attr("r",  function(d) { return d.pop / 1000 *2 })// set the circle's radius according to country's population       
.attr("fill", function(d) { return d.color });    // set the circle's color according to country's color

svg.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", 25)
.attr("height", 100)

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.attr("x", (d, i) => i * 30)
.attr("y", (d, i) => h-3 - (3 * d))
.text((d) => d)
```

Generated SVG graphics are designed according to the provided data.

### Appending nodes using data

Once a dataset is bound to a document, use of D3.js typically follows a pattern wherein an explicit.enter()function, an implicit "update," and an explicit.exit()function is invoked for each item in the bound dataset. Any [methods chained](https://en.wikipedia.org/wiki/Method_chaining) after the.enter() command will be called for each item in the dataset not already represented by a DOM node in the selection (the previousselectAll()). Likewise, the implicit update function is called on all existing selected nodes for which there is a corresponding item in the dataset, and.exit() is called on all existing selected nodes that do not have an item in the dataset to bind to them. The D3.js documentation provides several examples of how this works.

The first step is to make D3 aware of the data. Thedata()method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.

A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has theenter()method for this purpose.

When enter()is combined with thedata()method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

```python
<body>
 <ul></ul>
 <script>
  const dataset = ["a", "b", "c"];
  d3.select("ul").selectAll("li")        
  .data(dataset)        
  .enter()        
  .append("li")        
  .text("New item");

  d3.select("body").selectAll("h2")
   .style("color", (d) => {
    if (d < 20) {
     return "red"
    } else {
     return "green"
    }
  });
 </script>
</body>
```

The D3 text() method can take a string or a callback function as an argument:

```python
selection.text((d) => d)
selection.text((d) => d+"USD")
```

the parameter d refers to a single entry in the dataset that a selection is bound to.

D3.js API contains several hundred functions, and they can be grouped into following logical units:

- Selections
- Transitions
- Arrays
- Math
- Color
- Scales
- SVG
- Time
- Layouts
- Geography
- Geometry
- Behaviors

<https://github.com/d3/d3>
<https://www.d3-graph-gallery.com>
