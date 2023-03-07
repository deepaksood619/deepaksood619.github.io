# State

## Props vs State

- "props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument.
- "state" is data that changes over the lifetime of a specific instance of a React component.

React state is intended to track data values over the lifetime of the component (so long as the component exists on the page)

propsare a way of passing data from parent to child. If you're familiar with the concept ofstate, don't use state at allto build the static version of any site. State is reserved only for interactivity, that is, data that changes over time.

## Downwards Data Flow

Only the most parent component in application must be responsible to fetch data be it from an API or Flux framework or Redux

<https://overreacted.io/react-as-a-ui-runtime>

For each piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

## Props

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object "props".

## Example

```js
function Welcome(**props**) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" ;
```

## Introduction to State

State is similar to props, but it is private and fully controlled by the component.

State is a plain javascript object that is used to record and react to user events. Each class based component has its own state object. Whenever a component's state is changed, the component immediately re-renders and forces all its children to re-render.

Every class based component has a function called constructor, and is called automatically when new instance of a class is created

```js
constructor (props) {
    super(props);

    // we want to update state to term i.e. whatever user search
    this.state = { term : ''};
}

Only inside our constructor function we update our state
this.state = { term : '' };
```

<https://reactjs.org/docs/lifting-state-up.html>

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up".

## State Management

In React, Components are either one of two types:

- Class-Based Components
- Functional Components

A component can share the data it contains with other components by adding them as properties to the props object.

This becomes tedious when you are dealing with a large application. So there are tools like Redux which make state management a lot easier.

However, recently, a new concept of Context API and hooks has been introduced and it is an even more convenient way to manage the state.

## State management

- React - Redux, **Context API with Hooks**
- Vue - **Vuex**
- Angular - NGRX, **Services**
- Apollo Client
