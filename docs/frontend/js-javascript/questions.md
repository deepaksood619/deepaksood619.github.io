# Questions

### Event Delegation

JS event listeners fire not only on a single DOM element, but on all its descendants.

### Event Bubbling

Inverse of Event Delegation. Also known as propogation, events on an element will " "bubble up" and also fires on all parents.

### Difference between "target" and "currentTarget"

"target" is the actual element that triggered the event, and "currentTarget" is the element with the listener attached.

```js
function foo() {
    // this is a definition or statement
}

var foo = function() {
    // this is an expression
    // this resolves to a value, even if just "undefined"
}
```

Functions as expressions vs definition

MDN - An expression is any valid unit of code that resolves to a value.

### What is the difference between == and ===

- `==` checks for equality
- `===` checks for equality and type

### Difference between call stack and task queue

<https://www.toptal.com/javascript/interview-questions>
