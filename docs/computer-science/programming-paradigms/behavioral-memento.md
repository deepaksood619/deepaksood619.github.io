# Behavioral - Memento

## Mementois a behavioral design pattern that allows you to save and restore the past states of the objects without revealing the details of their implementation

Let's say that you are writing a text editor program. Apart from the usual addition and removal of the text, your editor allows you to change the text formatting, insert pictures and other. At some point, you've decided to make all of these actions cancelable. To do this, you need to save the current state of the text before performing any actions. If you then decide to cancel your action, you'll get a copy of the state from the history and restore the old state of the text.
Let's now take a look at the copies of the editor's state. It should have several fields for storing the current text and all of its properties (font, color, etc.), cursor and scroll position of the screen, inserted images and much more. To make a copy of the state, you need to write the values ​​of all these fields in a certain "container". Most likely, you'll need to store a lot of such containers as a history of operations, so the most convenient thing is to make them the objects of the same class. This class must have many fields, but almost no methods.
The Memento pattern perfectly handles all of these requirements. It suggests holding a copy of the state in a special image object with a limited interface, which allows, for example, to find out the date/time of storage or the name of the snapshot. But, on the other hand, the snapshot should be open to its creator, allowing you to read and restore its internal state.
Such a scheme allows the creators to take snapshots and give them away for storage to other objects called guardians. The guardians will only have access to a limited image interface, so they won't be able to affect the "insides" of the image itself. At the right time, the guardian can ask the creator to restore its state, providing it with the appropriate snapshot.
In the example with the editor, you can choose a separate class to be the guardian that will store the list of completed operations. The limited interface of images will show the user a beautiful list with names and dates of the performed operations. And when the user decides to roll back the operation, the history class takes the last snapshot from the stack and sends it to the editor to restore it.

## Situations in which it's appropriate to use the pattern

1. When you need to save snapshots of the object's state (or a part of it), so that the object could later be restored in the same state

The Memento pattern allows you to create any number of the object's snapshots and store them, regardless of the object from which they've been taken. Snapshots are often used not only to implement a cancellation operation, but also for transactions when the state of the object needs to be "rolled back" if the operation failed.

2. When the direct interface for obtaining the state of the object reveals details of the implementation and violates the encapsulation of the object

## Pros

- Doesn't violate the encapsulation of the input object.

- Simplifies the structure of the input object. It doesn't need to keep a history of its state versions.

## Cons

- Requires a lot of memory if clients create images too often.

- It can entail additional memory costs, if the objects storing the history don't release the resources occupied by the outdated images.**References**

<https://py.checkio.org/blog/design-patterns-part-3>
