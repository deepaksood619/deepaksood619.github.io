# Code / Commands / Snippets

## dependenciesare the packages your project depends on

## devDependenciesare the packages that are needed during the development phase. Say a testing framework like [Jest](https://flaviocopes.com/jest/) or other utilities like [Babel](https://flaviocopes.com/babel/) or [ESLint](https://flaviocopes.com/eslint/)

In both cases, when you install a package, its dependencies and devDependencies are automatically installed by [npm](https://flaviocopes.com/npm/).

## peerDependenciesare different. They are not automatically installed

When a dependency is listed in a package as a peerDependency, it is not automatically installed. Instead, the code that includes the package must include it as its dependency.

## Commands

```bash
npx create-react-app my-app
npx create-react-app react-shopping-cart --template typescript

npm i @material-ui/core @material-ui/icons
npm i react-query
npm i styled-components @types/styled-components

yarn add react-admin ra-data-json-server prop-types

npm start - http://localhost:3000
    Starts the development server.

    npm run build
    Bundles the app into static files for production.
    npm install -g serve
        serve -s build

    https://reactjs.org/docs/optimizing-performance.html

    npm test
    Starts the test runner.

    npm run eject
    Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

    yarn install
    yarn install --prod
    yarn install --production --frozen-lockfile
    yarn cache clean

    yarn start
    Starts the development server.

    yarn build
    Bundles the app into static files for production.

    yarn test
    Starts the test runner.

    yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

yarn add -D babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-react eslint-plugin-import prettier pretty-quick

npm install --global prettier
prettier --write .

npm install -g depcheck
depcheck

yarn upgrade-interactive --latest

npx unimported
npx eslint . --fix

https://create-react-app.dev/docs/analyzing-the-bundle-size/
    Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

    yarn add source-map-explorer
    yarn build
    yarn analyze
```

## Code Snippets

```js
const Example = (props) => {
    // You can use Hooks here!
    return <div />;
}

function Example(props) {
    // You can use Hooks here!
    return <div />;
}
```

## Toggle

```js
class Toggle extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
    }
    render() {
    return (
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
    }
}
ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
```

## Digital Clock

```js
class Clock extends React.Component {
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
    }
    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }
    componentWillUnmount() {
    clearInterval(this.timerID);
    }
    tick() {
    this.setState({
        date: new Date()
    });
    }
    render() {
    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }
}
function Clocks() {
    return (
    <div>
        <Clock/>
        <Clock/>
        <Clock/>
    </div>
    );
}
ReactDOM.render(
    <Clocks />,
    document.getElementById('root')
);
```

## Login / Logout

```js
function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please sign up!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
    return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props) {
    return (
    <button onClick={props.onClick}>
        Login
    </button>
    );
}
function LogoutButton(props) {
    return (
    <button onClick={props.onClick}>
        Logout
    </button>
    );
}
class LoginControl extends React.Component {
    constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
    this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
    this.setState({isLoggedIn: false});
    }
    render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
        <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        </div>
    );
    }
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
```

## blog

```js
function Blog(props) {
    const sidebar = (
    <ul>
        {props.posts.map((post) =>
        <li key={post.id}>
            {post.title}
        </li>
        )}
    </ul>
    );
    const content = props.posts.map((post) =>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    );
    return (
    <div>
        {sidebar}
        <hr />
        {content}
    </div>
    );
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);
```

## name form

```js
class NameForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
    this.setState({value: event.target.value});
    }
    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
    }
}
ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
```

## temperature change fahrenheit to celsius

```js
const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
    return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class TemperatureInput extends React.Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
    }
    handleChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    }
    render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
        <fieldset style={{ padding: "3px 20px" }}>
        <legend>Enter temperature in {scaleNames [scale]}:</legend>
        <input
            style={{ margin: ".4rem" }}
            value={temperature}
            onChange={this.handleChange}
        />
        </fieldset>
    );
    }
}
class Calculator extends React.Component {
    constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
    }
    handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
    }
    handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
    }
    render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
        <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
    }
}
ReactDOM.render(<Calculator />, document.getElementById("root"));
```

## Filterable list

```js
class ProductCategoryRow extends React.Component {
    render() {
    const category = this.props.category;
    return (
        <tr>
        <th colSpan="2">
            {category}
        </th>
        </tr>
    );
    }
}
class ProductRow extends React.Component {
    render() {
    const product = this.props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
        {product.name}
        </span>;
    return (
        <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        </tr>
    );
    }
}
class ProductTable extends React.Component {
    render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
        return;
        }
        if (inStockOnly && !product.stocked) {
        return;
        }
        if (product.category !== lastCategory) {
        rows.push(
            <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
        }
        rows.push(
        <ProductRow
            product={product}
            key={product.name}
        />
        );
        lastCategory = product.category;
    });
    return (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
    );
    }
}
class SearchBar extends React.Component {
    constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
    }

    render() {
    return (
        <form>
        <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
        />
        <p>
            <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
        </p>
        </form>
    );
    }
}
class FilterableProductTable extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        filterText: '',
        inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText) {
    this.setState({
        filterText: filterText
    });
    }

    handleInStockChange(inStockOnly) {
    this.setState({
        inStockOnly: inStockOnly
    })
    }
    render() {
    return (
        <div>
        <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
        />
        <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
        />
        </div>
    );
    }
}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
);
```

## todo app

[Learn React In 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY)
