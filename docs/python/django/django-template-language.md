# Django Template Language

{{ foo }}- this is a placeholder in the template, for the variable *foo*that is passed to the template from a view.

{% %}- when text is surrounded by these delimiters, it means that there is some special function or code running, and the result of that will be placed here. It is used when the text inside is not passed to the template from the view, but rather a function or feature of the template language itself that is being executed (like a for loop, or an if conditional). You can create your own extensions to the template language, which are called template *tags*.

{{ foo|something }}- this is yet another syntax you may come across. The|somethingis a*template filter*. It is usually for transforming the result of the item on the left of the|symbol. For example{{ foo|title }}.

You can read more about tags and filters which are referred to as [template builtins](https://docs.djangoproject.com/en/1.9/ref/templates/builtins/) in the documentation.

This syntax is not unique to django - many other template languages in Python (and some outside of Python) have adopted a similar syntax.

The Python language doesn't have the same syntax, but it does have the concept of [string templates](https://docs.python.org/2/library/string.html#template-strings) which is a very simplified version of a template engine.
