# 6. Components

## Angular Components

The page you see is the application shell. The shell is controlled by an Angular component named AppComponent.

Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.

A component controls a patch of screen called aview.

For example, the following views are controlled by components:

- The app root with the navigation links.
- The list of heroes.
- The hero editor.

You define a component's application logic - what it does to support the view - inside a class. The class interacts with the view through an API of properties and methods.

For example, this HeroListComponent has a heroes property that returns an array of heroes that it acquires from a service.HeroListComponent also has aselectHero()method that sets a selected Hero property when the user clicks to choose a hero from that list.

Angular creates, updates, and destroys components as the user moves through the application. Your app can take action at each moment in this lifecycle through optional [lifecycle hooks](https://angular.io/guide/lifecycle-hooks), like ngOnInit()

## Templates

You define a component's view with its companion template. A template is a form of HTML that tells Angular how to render the component.

Although this template uses typical HTML elements like `<h2>` and `<p>`, it also has some differences. Code like *[ngFor](https://angular.io/api/common/NgForOf), `{{hero.name}}`, `(click)`, [hero], and `<hero-detail>` uses Angular's [template syntax](https://angular.io/guide/template-syntax).
