# Docs

## MAIN CONCEPTS

- [1. Hello World](https://reactjs.org/docs/hello-world.html)
- [2. Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [3. Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [4. Components and Props](https://reactjs.org/docs/components-and-props.html)
- [5. State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [6. Handling Events](https://reactjs.org/docs/handling-events.html)
- [7. Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [8. Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [9. Forms](https://reactjs.org/docs/forms.html)
  - Controlled Components
- [10. Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [11. Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [12. Thinking In React](https://reactjs.org/docs/thinking-in-react.html)

## ADVANCED GUIDES

- [Accessibility](https://reactjs.org/docs/accessibility.html)
- [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
  - Bundling
  - Code-splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

- import()
- React.lazy
- Error boundaries
- Route-based code splitting
- Named Exports

- [Context](https://reactjs.org/docs/context.html)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, we manually thread through a "theme" prop in order to style the Button component

- [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

A JavaScript error in a part of the UI shouldn't break the whole app. To solve this problem for React users, React 16 introduces a new concept of an "error boundary".

Error boundaries are React components thatcatch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UIinstead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

- [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)

Ref forwarding is a technique for automatically passing a [ref](https://reactjs.org/docs/refs-and-the-dom.html) through a component to one of its children.

1. We create a [React ref](https://reactjs.org/docs/refs-and-the-dom.html) by callingReact.createRefand assign it to arefvariable.

2. We pass ourrefdown to `<FancyButton ref={ref}>` by specifying it as a JSX attribute.

3. React passes therefto the (props, ref) => ... function inside forwardRef as a second argument.

4. We forward thisrefargument down to `<button ref={ref}>` by specifying it as a JSX attribute.

5. When the ref is attached, ref.currentwill point to the `<button>` DOM node.

- [Fragments](https://reactjs.org/docs/fragments.html)

Fragments let you group a list of children without adding extra nodes to the DOM

```js
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}

use <> or <React.Fragment>
```

## Keyed Fragments

Fragments declared with the explicit `<React.Fragment>` syntax may have keys. A use case for this is mapping a collection to an array of fragments. For example, to create a description list. keyis the only attribute that can be passed toFragment.

- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)

Higher-order component is a function that takes a component and returns a new component.

- [Integrating with Other Libraries](https://reactjs.org/docs/integrating-with-other-libraries.html)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)
- [Portals](https://reactjs.org/docs/portals.html)

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

A typical use case for portals is when a parent component has anoverflow: hiddenorz-indexstyle, but you need the child to visually "break out" of its container. For example, dialogs, hovercards, and tooltips.

- [Profiler](https://reactjs.org/docs/profiler.html)

TheProfilermeasures how often a React application renders and what the "cost" of rendering is. Its purpose is to help identify parts of an application that are slow and may benefit from [optimizations such as memoization](https://reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations).

- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [Render Props](https://reactjs.org/docs/render-props.html)

The term ["render prop"](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) refers to a technique for sharing code between React components using a prop whose value is a function.

<https://medium.com/@mjackson/use-a-render-prop-50de598f11ce>

- [Static Type Checking](https://reactjs.org/docs/static-type-checking.html)
- [Strict Mode](https://reactjs.org/docs/strict-mode.html)
- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)
- [Web Components](https://reactjs.org/docs/web-components.html)

## API REFERENCE

- [React](https://reactjs.org/docs/react-api.html)
- [React.Component](https://reactjs.org/docs/react-component.html)
- [ReactDOM](https://reactjs.org/docs/react-dom.html)
- [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html)
- [DOM Elements](https://reactjs.org/docs/dom-elements.html)
- [SyntheticEvent](https://reactjs.org/docs/events.html)
- [Test Utilities](https://reactjs.org/docs/test-utils.html)
- [Test Renderer](https://reactjs.org/docs/test-renderer.html)
- [JS Environment Requirements](https://reactjs.org/docs/javascript-environment-requirements.html)
- [Glossary](https://reactjs.org/docs/glossary.html)

## TESTING

- [Testing Overview](https://reactjs.org/docs/testing.html)
- [Testing Recipes](https://reactjs.org/docs/testing-recipes.html)
- [Testing Environments](https://reactjs.org/docs/testing-environments.html)

<https://reactjs.org/docs/concurrent-mode-suspense.html>

React 16.6 added a `<Suspense>` component that lets you "wait" for some code to load and declaratively specify a loading state (like a spinner) while we're waiting

<https://reactjs.org/docs/concurrent-mode-patterns.html>

<https://reactjs.org/docs/concurrent-mode-adoption.html>

<https://reactjs.org/docs/getting-started.html>

<https://reactjs.org/tutorial/tutorial.html>
