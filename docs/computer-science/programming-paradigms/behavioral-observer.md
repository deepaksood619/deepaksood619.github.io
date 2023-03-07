# Behavioral - Observer

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
All the items that are subscribed, will call the observer whenever an event happens.

## Example - in our oopd assignment, we implemented observer pattern in a full stack project where we have to implement facebook, where people can share updates, send friend requests and more. So when a person share an update then every person who is the friend of the current person will get notified of the new post

## Real world example - After you've subscribed to a newspaper or magazine, you no longer need to go to the supermarket and check if the next issue is available. Instead, the publishing house will send new issues by mail directly to your home right after they've been released. The publishing house maintains a list of subscribers and knows which magazine send to whom. You can unsubscribe at any time, and you'll stop receiving this magazine

## Pros

- the publishers are independent from specific subscriber classes and vice versa;
- you can subscribe and unsubscribe recipients on the fly.

## Cons

- the subscribers are notified at random (it's worth bearing in mind, since this may be important for some situations)

## References

<https://py.checkio.org/blog/design-patterns-part-2>

<https://www.youtube.com/watch?v=oNalXg67XEE>
