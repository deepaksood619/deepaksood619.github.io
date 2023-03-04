# 9. Data Binding

Without a framework, you would be responsible for pushing data values into the HTML controls and turning user responses into actions and value updates. Writing such push/pull logic by hand is tedious, error-prone, and a nightmare to read as any experienced jQuery programmer can attest.

![image](../../../media/AngularJS_9.-Data-Binding-image1.jpg)

Angular supportsdata binding, a mechanism for coordinating parts of a template with parts of a component. Add binding markup to the template HTML to tell Angular how to connect both sides.

As the diagram shows, there are four forms of data binding syntax. Each form has a direction - to the DOM, from the DOM, or in both directions.

TheHeroListComponent [example](https://angular.io/guide/architecture#templates) template has three forms:

```js
<li>{{hero.name}}</li>
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
<li (click)="selectHero(hero)"></li>
```

- The `{{hero.name}}` [*interpolation*](https://angular.io/guide/displaying-data#interpolation) displays the component's `hero.name` property value within the `<li>` element.
- The `[hero]` [*property binding*](https://angular.io/guide/template-syntax#property-binding) passes the value of `selectedHero` from the parent `HeroListComponent` to the `hero` property of the child `HeroDetailComponent`.
- The(click) [*event binding*](https://angular.io/guide/user-input#click) calls the component's `selectHero` method when the user clicks a hero's name.

Two-way data binding is an important fourth form that combines property and event binding in a single notation, using the [ngModel](https://angular.io/api/forms/NgModel) directive.

Here's an example from theHeroDetailComponenttemplate:

`<input [(ngModel)]="hero.name">`

In two-way binding, a data property value flows to the input box from the component as with property binding. The user's changes also flow back to the component, resetting the property to the latest value, as with event binding.

Angular processes *all* data bindings once per JavaScript event cycle, from the root of the application component tree through all child components.

![image](../../../media/AngularJS_9.-Data-Binding-image2.jpg)

Data binding plays an important role in communication between a template and its component.

Data binding is also important for communication between parent and child components.
