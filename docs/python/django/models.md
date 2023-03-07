# Models

A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you're storing. Generally, each model maps to a single database table.

The basics:

- Each model is a Python class that subclasses [**django.db.models.Model**](https://docs.djangoproject.com/en/1.11/ref/models/instances/#django.db.models.Model).
- Each attribute of the model represents a database field.
- With all of this, Django gives you an automatically-generated database-access API

```python
from django.db import models
class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
```

- The name of the table, **myapp_person**, is automatically derived from some model metadata but can be overridden.
- An **id** field is added automatically, but this behavior can be overridden.

## Field types

Each field in your model should be an instance of the appropriate [**Field**](https://docs.djangoproject.com/en/1.11/ref/models/fields/#django.db.models.Field) class. Django uses the field class types to determine a few things:

- The column type, which tells the database what kind of data to store (e.g.**INTEGER**, **VARCHAR**, **TEXT**).
- The default HTML [widget](https://docs.djangoproject.com/en/1.11/ref/forms/widgets/) to use when rendering a form field (e.g.`<inputtype="text">`, `<select>`).
- The minimal validation requirements, used in Django's admin and in automatically-generated forms.

## Common field arguments

<https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-options>

- null
- blank
- choices
- db_column
- db_index
- db_tablespace
- default
- Editable
- Error_messages
- Help_text
- Primary_key
- Unique
- Unique_for_date
- Unique_for_month
- Unique_for_year
- Verbose_name
- Validators

## Common field types

<https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-types>

- Char field
- Text field
- Integer field
- Date field and DateTime field
- EmailField
- FileField and ImageField
- AutoField

## Relationship fields

<https://docs.djangoproject.com/en/2.0/ref/models/fields/#module-django.db.models.fields.related>

- ForeignKey
- ManyToManyField

Use the add() method on the field to add a record to the relation. Including multiple arguments in the call to add() will add multiple records to a ManyToManyField

- OneToOneField

## Metadata

You can declare model-level metadata for your Model by declaringclass Meta, as shown.

```python
class Meta:
    ordering = ["-my_field_name"]
    ...
```

One of the most useful features of this metadata is to control the *default ordering* of records returned when you query the model type. You do this by specifying the match order in a list of field names to theorderingattribute, as shown above. The ordering will depend on the type of field (character fields are sorted alphabetically, while date fields are sorted in chronological order). As shown above, you can prefix the field name with a minus symbol (-) to reverse the sorting order.

## Singleton model in Django

The singleton patternis a design pattern that restricts the instantiation of a class to one object

Sometimes it's useful to have a database table with just one row. A typical example are user-editable settings -- we want to store them with all the other data (in the database), but there's really only one set of settings at any time.

This is easily done in Django by making sure we have only one database entry at model instance save. We can also go one step further and ensure we can always load the singleton object, even if that means creating a new (default) one in memory if the database is still empty.

## Exception Handling

```python
ObjectDoesNotExists
    from django.core.exceptions import ObjectDoesNotExist
    try:
        user = ZenatixUser.objects.get(email='deepak.sood@zenatix.com')
    except ObjectDoesNotExist:
        print('user not found')
```

## Django Models

1. Proxy Model
2. Abstract Model (for just creating a parent class for code reuse, table is not created in database)
3. Multi-table inheritance

## Ordering

Add meta in the object Model

```python
class Meta:
    ordering=('device__owner__client_name','issue__display_name')
```
