# JSX

JSX Rules

- return single element
- div / section / article or Fragment
- use camelCase for html attribute
- className instead of class (since class is already a keyword)
- close every element
- formatting

dialect of javascript

let us write html inside a javascript

JSX is transpiled to js

```js
Ex - const App = function() {

return <div>Hi!</div>;

}
```

This function is transpiled into (using babel)

```js
"use strict"

var _temporalUndefined = {}
var App = _temporalUndefined;

App = function App() {
 return React.createElement(
  "div",
  null,
  "Hi!"
  );
};
```

Whenever we call a javascript variable inside JSX we wrap the variable around braces;

## Loops

<https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx>

```js
const getAnimalsContent = animals => animals.map(item => (
    <li key={item.id}>{item.animal}</li>
));
return <ul>{getAnimalsContent(animals)}</ul>;
```
