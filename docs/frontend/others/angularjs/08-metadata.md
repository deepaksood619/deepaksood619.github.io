# 8. Metadata

Decorators are functions that modify JavaScript classes. Angular has many decorators that attach metadata to classes so that it knows what those classes mean and how they should work.

## Decorator Function

1. [NgModule](https://angular.io/api/core/NgModule) is a decorator function that takes a single metadata object whose properties describe the module. The most important properties are:
    - declarations - the*view classes*that belong to this module. Angular has three kinds of view classes:[components](https://angular.io/guide/architecture#components), [directives](https://angular.io/guide/architecture#directives), and [pipes](https://angular.io/guide/pipes).
    - exports - the subset of declarations that should be visible and usable in the component [templates](https://angular.io/guide/architecture#templates) of other modules.
    - imports - other modules whose exported classes are needed by component templates declared in *this*module.
    - providers - creators of [services](https://angular.io/guide/architecture#services) that this module contributes to the global collection of services; they become accessible in all parts of the app.
    - bootstrap - the main application view, called the*root component*, that hosts all other app views. Only the*root module*should set thisbootstrapproperty.

2. @[Component](https://angular.io/api/core/Component) is a decorator function that specifies the Angular metadata for the component.

Here is the@[Component](https://angular.io/api/core/Component) decorator, which identifies the class immediately below it as a component class.

The@[Component](https://angular.io/api/core/Component) decorator takes a required configuration object with the information Angular needs to create and present the component and its view.

Here are a few of the most useful@[Component](https://angular.io/api/core/Component) configuration options:

- selector: CSS selector that tells Angular to create and insert an instance of this component where it finds a `<hero-list>` tag in *parent*HTML. For example, if an app's HTML contains `<hero-list></hero-list>`, then Angular inserts an instance of theHeroListComponentview between those tags.
- templateUrl: module-relative address of this component's HTML template, shown [above](https://angular.io/guide/architecture#templates).
- providers: array ofdependency injection providersfor services that the component requires. This is one way to tell Angular that the component's constructor requires aHeroServiceso it can get the list of heroes to display.

The metadata @Component tells Angular where to get the major building blocks you specify for the component

## The template, metadata and component together describe a view

Other Decorators -

1. @Injectable
2. @Input
3. @Output
