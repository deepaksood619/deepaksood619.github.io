# Hooks

- [1. Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [2. Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [3. Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [4. Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [5. Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [6. Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
- [7. Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [8. Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

## What is a Hook?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes - they let you use React without classes.

React provides a few built-in Hooks likeuseState. You can also create your own Hooks to reuse stateful behavior between different components.

## When would I use a Hook?

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We're going to do that right now!

## Rules

- Only call Hooks**at the top level**. Don't call Hooks inside loops, conditions, or nested functions.
- Only call Hooks**from React function components**. Don't call Hooks from regular JavaScript functions.

## Hooks

- [**Basic Hooks**](https://reactjs.org/docs/hooks-reference.html#basic-hooks)
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [**Additional Hooks**](https://reactjs.org/docs/hooks-reference.html#additional-hooks)
  - [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  - [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
  - [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
  - [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
  - [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
  - [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
  - [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

1. **useEffect / Effect Hook**

You've likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations "side effects" (or "effects" for short) because they can affect other components and can't be done during rendering

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, andcomponentWillUnmount in React classes, but unified into a single API

There are two common kinds of side effects in React components: those that don't require cleanup, and those that do.

- Effects without cleanup

Network requests, manual DOM mutations, and logging are common examples of effects that don't require a cleanup. We say that because we can run them and immediately forget about them.

- Effects with cleanup

If your effect returns a function, React will run it when it is time to clean up

```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  // Specify how to clean up after this effect:
  return function cleanup() {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
```

2. **useMemo**

The useMemo is a hook used in the functional component of react that returns a memoized value.

<https://www.geeksforgeeks.org/react-js-usememo-hook>

## Lifecycle components and Hooks Equivalent

- constructor: Function components don't need a constructor. You can initialize the state in the [useState](https://reactjs.org/docs/hooks-reference.html#usestate) call. If computing the initial state is expensive, you can pass a function touseState.
- getDerivedStateFromProps: Schedule an update [while rendering](https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops) instead.
- shouldComponentUpdate: SeeReact.memo [below](https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate).
- render: This is the function component body itself.
- componentDidMount, componentDidUpdate, componentWillUnmount: The [useEffectHook](https://reactjs.org/docs/hooks-reference.html#useeffect) can express all combinations of these (including [less](https://reactjs.org/docs/hooks-faq.html#can-i-skip-an-effect-on-updates)[common](https://reactjs.org/docs/hooks-faq.html#can-i-run-an-effect-only-on-updates) cases).
- getSnapshotBeforeUpdate, componentDidCatchandgetDerivedStateFromError: There are no Hook equivalents for these methods yet, but they will be added soon.

## Examples

## Hooks

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Search using axios async await api

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
      if (!ignore) setData(result.data);
    }
    fetchData();
    return () => { ignore = true; }
  }, [query]);
  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<SearchResults />, rootElement);
```

<https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f>

`useState()`

We need to create the timer only once when the component is first rendered.

When we pass an empty array as the second argument touseEffectit runs the callback function only once.

Some effects require clean-ups, like our timer. When the component unmounts we need to stop the timer.

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
      if (!ignore) setData(result.data);
    }
    fetchData();
    return () => { ignore = true; }
  }, [query]);
  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<SearchResults />, rootElement);
```

<https://www.toptal.com/react-hooks/stale-while-revalidate>

<https://www.toptal.com/react/react-hooks-typescript-example>

<https://hackernoon.com/whats-the-right-way-to-fetch-data-in-react-hooks-a-deep-dive-2jc13230>
