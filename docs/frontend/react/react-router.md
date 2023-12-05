# React Router

This is of high significance as it's anentry point of your application. There can be several routes in your application and you would need functionalities like validation, authentication, redirection, etc. depending upon the requirement.

react-router **contains all the common components between** react-router-dom and **react-router-native**. When should you use one over the other? If you're on the web then**react-router-dom**should have everything you need as it also exports the common components you'll need. If you're using React Native, **react-router-native** should have everything you need for the same reason. So you'll probably never have to import anything directly from react-router

https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks

[**https://www.freecodecamp.org/news/learn-react-router-6/**](https://www.freecodecamp.org/news/learn-react-router-6/)

A Complete Guide to React Router: Everything You Need to Know

https://ui.dev/react-router-tutorial

https://reactrouter.com/docs/en/v6/getting-started/tutorial

https://reactrouter.com

React Router is a lightweight, fully-featured routing library for the [React](https://reactjs.org/) JavaScript library. React Router runs everywhere that React runs; on the web, on the server (using node.js), and on React Native.

https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation

https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial

- Configuring Routes
- Navigating with Link
- Creating Links with active styling
- Using Nested Routes for Layout
- Navigating programmatically
- Using URL params for data loading
- Using URL Search params
- Creating your own behaviors through composition
- Server Rendering

## React Router Components

- **BrowserRouter**

BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.

- **Route**

Route is the conditionally shown component that renders some UI when its path matches the current URL.

- **Link**

Link component is used to create links to different routes and implement navigation around the application. It works like HTML [anchor tag](https://www.geeksforgeeks.org/html-a-tag/).

- **Switch**

Switch component is used to render only the first route that matches the location rather than rendering all matching routes. Although there is no defying functionality of SWITCH tag in our application because none of the LINK paths are ever going to coincide. But let's say we have a route(Note that there is no EXACT in here), then all the Route tags are going to be processed which start with '/' (all Routes start with /). This is where we need SWITCH statement to process only one of the statements.

https://www.geeksforgeeks.org/reactjs-router

## React-Router

But, the server provides the same page for every request. So, it doesn't make sense to send a request every time to the server. That is why we use the React Router. The router intercepts the request and sends the required component in response. This also prevents the page from reloading every time you go to a new page.
