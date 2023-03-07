# Mixin

A mixin is a special kind of multiple inheritance. There are two main situations where mixins are used:

1. You want to provide a lot of optional features for a class.

2. You want to use one particular feature in a lot of different classes.

### Example

In this example the function clean_name will be added to the AggregatedWidgetCreationForm automatically and parent will be overridden if any

```python
class CleanNameMixin:
"""
Mixin to add clean_name function to every Widget and Screen
"""
 def clean_name(self):
 """
 Only lowercase and underscore allowed
 """
 name=self.cleaned_data['name']

 allowed_chars=frozenset(string.lowercase+'_')

 if not all(c in allowed_chars for c in name):
  raise forms.ValidationError('Only lowercase and underscore allowed')

 return name

class AggregatedWidgetCreationForm(forms.ModelForm, CleanNameMixin):
 class Meta:
 model=AggregatedWidget
 fields=('name','display_name','customer')

```
