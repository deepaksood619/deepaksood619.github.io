# Others

## Debouncing in JavaScript

Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

## Application

Debouncing can be applied in implementing suggestive text, where we wait for the user to stop typing for a few seconds before suggesting the text. thus, on every keystroke, we wait for some seconds before giving out suggestions.

Another application of debouncing is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling. In these scenarios, if the scroll event is fired too frequently, there might be a performance impact, as it contains lots of videos and images. Thus the scroll event must make use of debouncing.

- **debounce:**Grouping a sudden burst of events (like keystrokes) into a single one.
- **throttle:**Guaranteeing a constant flow of executions every X milliseconds. Like checking every 200ms your scroll position to trigger a CSS animation.
- **requestAnimationFrame:**a throttle alternative. When your function recalculates and renders elements on screen and you want to guarantee smooth changes or animations. Note: no IE9 support.

| **Library**                                                                           | **Example**                  |
|------------------------------|------------------------------------------|
| [jQuery (via library)](http://benalman.com/projects/jquery-throttle-debounce-plugin/) | $.debounce(300, saveInput); |
| [Lodash](https://lodash.com/docs/4.17.15#debounce)                                    | _.debounce(saveInput, 300); |
| [Underscore](https://underscorejs.org/#debounce)                                      | _.debounce(saveInput, 300); |

<https://www.geeksforgeeks.org/debouncing-in-javascript>

<https://css-tricks.com/debouncing-throttling-explained-examples>

## Currying

<https://www.freecodecamp.org/news/how-to-use-currying-and-composition-in-javascript>
