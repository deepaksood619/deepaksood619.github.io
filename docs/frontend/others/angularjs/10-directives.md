# 10. Directives

![image](../../../media/AngularJS_10.-Directives-image1.jpg)

Angular templates are *dynamic*. When Angular renders them, it transforms the DOM according to the instructions given bydirectives.

A directive is a class with a@[Directive](https://angular.io/api/core/Directive) decorator. A component is a *directive-with-a-template*; a@[Component](https://angular.io/api/core/Component) decorator is actually a@[Directive](https://angular.io/api/core/Directive) decorator extended with template-oriented features.

While a component is technically a directive, components are so distinctive and central to Angular applications that this architectural overview separates components from directives.

Two *other* kinds of directives exist: *structural* and *attribute* directives.

They tend to appear within an element tag as attributes do, sometimes by name but more often as the target of an assignment or a binding.

Structural directives alter layout by adding, removing, and replacing elements in DOM.

- [*ngFor](https://angular.io/guide/displaying-data#ngFor) tells Angular to stamp out one `<li>` per hero in the heroes list.
- [*ngIf](https://angular.io/guide/displaying-data#ngIf) includes the HeroDetail component only if a selected hero exists.

Other Directives

- ngSwitch
- ngStyle
- ngClass

Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.

The [ngModel](https://angular.io/api/forms/NgModel) directive, which implements two-way data binding, is an example of an attribute directive.[ngModel](https://angular.io/api/forms/NgModel) modifies the behavior of an existing element (typically an `<input>`) by setting its display value property and responding to change events.
