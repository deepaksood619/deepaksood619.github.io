# Behavioral - Mediator

A mediator is a behavioral design pattern that allows you to reduce the connectivity of multiple classes with each other, by moving these connections to the one mediation class.
Suppose you have a dialog for creating a user profile. It consists of all possible controls - the text fields, checkboxes, buttons.

The individual elements of the dialog should interact with each other. For example, the checkbox "I have a dog" opens a hidden field for entering the name of a pet, and the clicking on the submit button initiates the checking of all fields values of the form.

By introducing this very logic directly in the control's code, you'll put an end to their reuse in other places of the application. They'll become too closely connected to the elements of the profile editing dialog that aren't needed in other contexts. Therefore, you can use either all elements at once, or none.

The Mediator pattern causes objects to communicate not directly with each other, but through a separate mediator object that knows to which one of them a particular request needs to be redirected. Due to this, the system components will depend only on the mediator, and not on dozens of other components. In our example, a dialog could become a mediator. Most likely, the dialog class already knows its elements, so no new connections will have to be added.

The main changes will occur within the individual elements of the dialog. Whereas previously, upon the receiving of the user's click, the button object checked the values ​​of the dialog fields itself, now its only responsibility is to inform the dialog that there was a click. The notified dialog will perform all necessary field verifications. Thus, instead of having several dependencies on other elements, for the button there will be only one - from the dialog itself.

To make code even more flexible, you can select a common interface for all of the mediators, that is, the program dialogs. Our button will become dependent not on the specific dialog of creating the user, but on the abstract one, thus allowing to use it in other dialogs. This way, the mediator conceals all complex connections and dependencies between the classes of individual program components within itself. And the fewer connections the classes have, the easier it is to modify, extend and reuse them.

Let's look at another example:

The pilots of landing aircrafts or the ones that are taking off don't communicate directly with other pilots. Instead, they contact the dispatcher, who coordinates the actions of several aircrafts at the same time. Without a dispatcher, pilots would have to be on a high alert all the time and monitor all the surrounding aircraft on their own, which would lead to frequent disasters in the sky. It's important to understand that the dispatcher is not needed during the entire flight. He's involved only in the area of the airport, when it's necessary to coordinate the interactions of a lot of aircrafts.

## Situations in which the pattern is worth using

## 1.When it's difficult for you to change some classes because they have many chaotic connections to other classes

The mediator allows you to put all these connections in one class, after which it'll be easier for you to correct them (if necessary), make them more understandable and flexible.

## 2.When you can't reuse a class, because it depends on a lot of other classes

After applying the pattern, the components lose their previous connections to other components, and all their interactions occur strictly through the mediator object.

## 3.When you have to create multiple subclasses of components to use the same components in different contexts

If earlier the connection changes in one component could lead to a huge avalanche of changes in all other components, now it's enough for you to create a mediator subclass and change the connections between its components.

## Pros

- it eliminates the dependencies between the components allowing them to be reused;

- simplifies the interaction between the components;

- centralizes management in one place.

## Cons

- the mediator class can "blow itself up" quite a bit, which can complicate the work with it.

## References

<https://py.checkio.org/blog/design-patterns-part-2>
