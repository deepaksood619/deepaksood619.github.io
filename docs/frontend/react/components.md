# Components

- Always component name should start with Capital letter
- CamelCase with first letter capatilized
- One component in one file with same name (MyInfo.js)

```js
// creating a component
const App = function() {
    return <div>Hi!</div>;
}

// This function can also be written using fat arrow in ES6 (terse and compact representation of keyword function)

const App = () => {
    return <div>Hi!</div>;
}

App is a type of instances. This is a const class and can have many instances. This is like a factory method

To create an instance <App /> or <App></App> (wrap component name with JSX tags)

// put the generated html from the component on the page (in the DOM)
// registering a component
React.render(App);

// Error: thrown (React is not defined)
// import react
import React from 'react';

// Error: React.render is deprecated. Please use ReactDOM.render from require('react-dom') instead. Invariant Violation.
import ReactDOM from 'react-dom'

React is diverged into two libraries
 - React (core - render, nest)
 - React-DOM (insertion into DOM)

// Error: Target container is not a DOM element
 Where to put the rendered HTML must be specified
 ReactDOM.render(<App />, document.queryselector('.container.'))

=> - fat arrow
```

## Components Structure

A web page can be divided into different components each one with its own file. We can break up our app into smaller components with different functionalities. We use also next other components into each other. This increases reusability.

One component per file.

```js
// Export a component (to be imported into other files)

export default SearchBar;

// Import a component to a file (give the full relative path to the file)
import SearchBar from './components/search_bar';
```

## Components Type

- Functional component (it's a function)

    Some info goes in, some JSX comes out.

    ```js
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    ```

- Class component

    Component to have some time of internal record-keeping. Some ability to be aware of itself and know what has happenned since its been rendered.

    ```js
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```

## Class based component (extends React.Component)

```js
class SearchBar extends React.Component {
    render() {
        return <input
    }
}
```

## Choosing functional component or Class component

Always start with functional component and then switch to class based component if required.

## Writing a handler for user_events

```js
render() {
    return <input onChange={this.onInputChange} />
}

onInputChange(event) {
    // whenever input changes run this code
    console.log(event.target.value)
}

// or

render() {
    return <input onChange={event => console.log(event.target.value)}
}
```

## Converting a Function to a Class

1. Create an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes), with the same name, that extendsReact.Component.
2. Add a single empty method to it calledrender().
3. Move the body of the function into therender()method.
4. Replace props with `this.props` in therender()body.
5. Delete the remaining empty function declaration.

```js
class Clock extends React.Component {
  render() {
    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}
```

Clock is now defined as a class rather than a function.

The render method will be called each time an update happens, but as long as we render `<Clock />` into the same DOM node, only a single instance of the Clock class will be used. This lets us use additional features such as local state and lifecycle methods.

## Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this returnnullinstead of its render output.

Returning null from a component's render method does not affect the firing of the component's lifecycle methods. For instance componentDidUpdate will still be called.

## Controlled Components / Fields

```js
<input
    value={this.state.term}
    onChange={event => this.setState({ term: event.target.value })} />
```

When we set the attribute value to `{this.state.term}`, this makes the component a controller form element. In this configuration, value is updated when state is updated and not the other way around. this.setState causes the element to re-render and when the component re-render its value is updated to `this.state.term`.

Whenever we have a key and value same for a json

```js
this.setState({ videos })
// this means this.setState({ videos : videos })
// ES6 syntax
```

Passing some data from parent component to children components

```js
<VideoList videos={this.state.videos} />
// passing data like this is refered to as passing props in React
// here we are passing prop videos to VideoList
// everytime the app renders it will get a list of videos
```

Receiving arguments in functional component

```js
const VideoList = (props) => {
    return (
        {props.videos.length}
    );
};

// here props object is an argument
// in class based components we have to use this.props to access arguments
```

## Controlled Input Null Value

Specifying thevalueprop on a [controlled component](https://reactjs.org/docs/forms.html#controlled-components) prevents the user from changing the input unless you desire so. If you've specified avaluebut the input is still editable, you may have accidentally set value to undefined or null.

https://reactjs.org/docs/forms.html
