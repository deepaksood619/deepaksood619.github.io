# Redux

Redux is a library which controls the state of your JavaScript application. It provides a "unidirectional data flow" that helps to manage and organise data better and makes debugging a lot easier.

Redux is a layer on top of React which helps in state management. Redux is mainly used in applications which rely on using class-based components. Redux has two tasks and they are

- creating a central data store for all the data in the application
- providing access to the data for all the components.

Redux makes state management really easy.

## Redux expects that all state updates are done immutably

<https://redux.js.org/tutorials/essentials/part-1-overview-concepts>

Redux is a pattern and library for managing and updating application state, using events called "actions".It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

Redux works in 4 simple steps:

1. A Redux store needs to be created where we store all the data

2. Components subscribe to the data in the store so that it can be used by them.

3. Whenever we want to update the state, we need to dispatch an action. Ex. You want to delete a list item when you click on it. So, in the callback function which deals with the onClick event, we dispatch an action to the reducer, which is like the manager of the store. Only the reducer has access to the store. We can also pass additional data along with the action.

4. Based on the type of the action, the reducer carries out different assignments. Continuing with the previous example, if the action type was 'DELETE_ITEM', the reducer is told what to do to deal with this action. And in our case, it would be to delete a specific item from an array structure (probably based on its ID).

5. Now, once the action is carried out, the store is swiftly updated. And in turn, the components which subscribed to the data which also get updated.

## Terminology

- **Actions**

Anactionis a plain JavaScript object that has atypefield.You can think of an action as an event that describes something that happened in the application.

- **Action Creators**

Anaction creatoris a function that creates and returns an action object

- **Reducers**

A **reducer** is a function that receives the currentstateand anactionobject, decides how to update the state if necessary, and returns the new state:(state, action) => newState.**You can think of a reducer as an event listener which handles events based on the received action (event) type.**

- **Store**

The current Redux application state lives in an object called thestore

- Dispatch

The Redux store has a method calleddispatch.The only way to update the state is to callstore.dispatch()and pass in an action object. The store will run its reducer function and save the new state value inside, and we can callgetState()to retrieve the updated value

## How to Use Redux

Firstly, we will need to install 2 npm packages. And they are:

- redux (to create store)
- react-redux (to connect the store with the application)
- yarn add redux-toolkit

Then, we will create the store in the index.js file. This is because index.js is the file that starts the application.

```js
// index.js

import { createStore } from 'redux' // to create store
import { Provider } from 'react-redux' // to provide the store to the app
import rootReducer from './reducers/RootReducer'; // the reducer

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
<App
</Provider>,
document.getElementById('root')
);
```

We pass the rootReducer (the main reducer) as an argument when we are creating the store. This is to specify that this reducer is the one that has access to the store.

In a component, to connect to the store, we need to import a function called connect. Connect, on being invoked, returns a higher order component (HOC) which we wrap around the component. We pass a function, mapStateToProps, in which we specify the data from the store that we want to subscribe to.

We can also pass a second function which we use to dispatch an action and is called mapDispatchToProps. A method is added to the props of the components and is called whenever a certain DOM event is triggered. Then, the action gets dispatched and passed into the reducer.

```js
// component

const mapStateToProps = (state, ownProps) => {

let id = ownProps.match.params.post_id;

return {

post: state.posts.find(post => post.id === id)

}

}

const mapDispatchToProps = (dispatch) => {

return {

deletepost: (id) => dispatch({type: 'DELETE_POST', id})

}

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
```

Initially the state is empty. So, we must define an initial state in the reducer. In the reducer, we must write conditions for what must occur when an action of a specific type is dispatched.

```js
// rootReducer

const initState = {

posts: [

{id: '1', title: 'Squirtle Laid an Egg'},

{id: '2', title: 'Charmander Laid an Egg'},

{id: '3', title: 'a Helix Fossil was Found'}

]

}

const rootReducer = (state=initState, action) => {

if (action.type === 'DELETE_POST') {

let newPosts = state.posts.filter(post => {

return post.id !== action.id;

})

return ({

...state,

posts: newPosts

})

}

return state;

}

export default rootReducer;
```

<https://dev.to/nrabhiram/react-redux-1622>

<https://www.toptal.com/react/react-state-management-tools-enterprise>

## Which state management is best in React?

React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.

## Why not use React Context API?

Context API's functionality is tiny out of the box. It was not built and optimized for high-frequency updates but rather for low-frequency updates like theme updates and authentication management.

[What is Redux?](https://www.youtube.com/watch?v=np8A_aW7Pew)

[React Redux Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

<https://www.toptal.com/react-native/react-redux-rxjs-tutorial>

Redux Thunk - [React Redux Tutorials - 29 - Redux Thunk Get Request](https://www.youtube.com/watch?v=tcCS4mGAq7Q)

Redux Saga

## Redux Toolkit

The official, opinionated, batteries-included toolset for efficient Redux development

<https://github.com/reduxjs/redux-toolkit>

<https://redux-toolkit.js.org>

<https://www.freecodecamp.org/news/learn-redux-toolkit-the-recommended-way-to-use-redux>

Redux Toolkit allows us to write shorter logic that's easier to read, while still following the same Redux behavior and data flow.

```js
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({

name: 'counter',

initialState: {

value: 0

},

reducers: {

incremented: state => {

// Redux Toolkit allows us to write "mutating" logic in reducers. It

// doesn't actually mutate the state because it uses the Immer library,

// which detects changes to a "draft state" and produces a brand new

// immutable state based off those changes

state.value += 1

},

decremented: state => {

state.value -= 1

}

}

})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({

reducer: counterSlice.reducer

})

// Can still subscribe to the store

store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us

store.dispatch(incremented())

// {value: 1}

store.dispatch(incremented())

// {value: 2}

store.dispatch(decremented())

// {value: 1}
```

## References

<https://daveceddia.com/react-redux-immutability-guide>

<https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained>

## Others

<https://github.com/mobxjs/mobx>

<https://github.com/pmndrs/zustand>

[Akita](https://datorama.github.io/akita/)

[Recoil](https://recoiljs.org/)
