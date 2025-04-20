# Others

## Fixtures

It's sometimes useful to pre-populate your database with hard-coded data when you're first setting up an app. You can provide initial data with fixtures or migrations.

### Providing initial data with fixtures

A fixture is a collection of data that Django knows how to import into a database. The most straightforward way of creating a fixture if you've already got some data is to use the [manage.pydumpdata](https://docs.djangoproject.com/en/1.11/ref/django-admin/#django-admin-dumpdata) command. Or, you can write fixtures by hand; fixtures can be written as JSON, XML or YAML (with [PyYAML](http://www.pyyaml.org/) installed) documents.

## PostgreSQL-specific ModelFields

- Introduced in Django 1.8
- ArrayField
- HStoreField
- Range Fields
- JSONField

A field for storing JSON encoded data. In Python the data is represented in its Python native format: dictionaries, lists, strings, numbers, booleans and **None**.

PostgreSQL has two native JSON based data types: **json** and **jsonb**. The main difference between them is how they are stored and how they can be queried. PostgreSQL's **json** field is stored as the original string representation of the JSON and must be decoded on the fly when queried based on keys. The **jsonb** field is stored based on the actual structure of the JSON which allows indexing. The trade-off is a small additional cost on writing to the **jsonb** field. **JSONField** uses **jsonb**.

Can Supply RAW PostgreSQL queries for filtering and other direct postgres statements

`RawSQL("metadata->>%s", ("TPA_License"),")`

Use psycopg2 for connecting to database instance

[http://initd.org/psycopg/docs/module.html](http://initd.org/psycopg/docs/module.html#psycopg2.connect)

## Optimizations

1. Never use len on queryset, use exists or count instead
2. Auto-generate models

    Utility - inspectdb can create models by introspecting an existing database.

    `python manage.py inspectdb > models.py`

3. Use values() or values_list() and only() query expressions for getting specific values

```python
names = []

for name in Song.objects.filter(artist=a).values_list("name", flat=True):
    names.append(name)
```

https://www.peterbe.com/plog/django-orm-optimization-story-on-selecting-the-least-possible

## Messages Framework

Django apps - `django.contrib.messages`

Quite commonly in web applications, you need to display a one-time notification message (also known as "flash message") to the user after processing a form or some other types of user input.

For this, Django provides full support for cookie- and session-based messaging, for both anonymous and authenticated users. The messages framework allows you to temporarily store messages in one request and retrieve them for display in a subsequent request (usually the next one). Every message is tagged with a specificlevelthat determines its priority (e.g., info, warning, orerror).

## Concepts

```python
mysite/urls.py

from django.conf.urls import include, url
from django.contrib import admin
 urlpatterns = [
    url(r'^polls/', include('polls.urls')),
    url(r'^admin/', admin.site.urls),
]
```

The [include()](https://docs.djangoproject.com/en/1.11/ref/urls/#django.conf.urls.include) function allows referencing other URLconfs. Note that the regular expressions for the [include()](https://docs.djangoproject.com/en/1.11/ref/urls/#django.conf.urls.include) function doesn't have a$(end-of-string match character) but rather a trailing slash. Whenever Django encounters [include()](https://docs.djangoproject.com/en/1.11/ref/urls/#django.conf.urls.include), it chops off whatever part of the URL matched up to that point and sends the remaining string to the included URLconf for further processing.

The idea behind [include()](https://docs.djangoproject.com/en/1.11/ref/urls/#django.conf.urls.include) is to make it easy to plug-and-play URLs. Since polls are in their own URLconf (polls/urls.py), they can be placed under "/polls/", or under "/fun_polls/", or under "/content/polls/", or any other path root, and the app will still work.

## Generic View: less code is better

Generic views abstract common patterns to the point where you don't even need to write Python code to write an app.

## Deleting an app in Django

- Remove models from the apps
- Run migrations and migrate
- Delete all files
- Remove from installed apps
- Delete Content Type

```python
python manamge.py shell

from django.contrib.contenttypes.models import ContentType

for c in ContentType.objects.all():
    if not c.model_class():
        print "deleting %s"%c
        c.delete()
```

## Managers

A Manager is the interface through which database query operations are provided to Django models. At least one Manager exists for every model in a Django application.

### Manager names

By default, Django adds a Manager with the name objects to every Django model class. However, if you want to use objects as a field name, or if you want to use a name other than objects for the Manager, you can rename it on a per-model basis. To rename the Manager for a given class, define a class attribute of type `models.Manager()` on that model. For example:

```python
from django.db import models

class Person(models.Model):
    #...

people = models.Manager()
```

Using this example model, Person.objects will generate an AttributeError exception, but Person.people.all()will provide a list of all Person objects.

```python
from django.db import models
from django.db.models import Sum
from django.db.models.functions import Coalesce

class AuthorManager(models.Manager):
    def get_queryset(self):
        return AuthorQuerySet(self.model, using=self._db)

    def annotate_with_copies_sold(self):
        return self.get_queryset().annotate_with_copies_sold()

class AuthorQuerySet(models.QuerySet):
    def annotate_with_copies_sold(self):
        # Write your solution here
        return self.annotate(copies_sold=Coalesce(Sum('books__copies_sold'), 0))

class Author(models.Model):
    # Make sure this manager is available.
    objects = AuthorManager()
    # objects = models.Manager.from_queryset(AuthorQuerySet)()
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

class Book(models.Model):
    title = models.CharField(max_length=30)
    copies_sold = models.PositiveIntegerField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')

author = Author.objects.create(first_name='Mark', last_name='Twain')
Book.objects.create(author=author, title='Adventures of Huckleberry Finn', copies_sold=7)
Book.objects.create(author=author, title='The Adventures of Tom Sawyer', copies_sold=4)

author = Author.objects.annotate_with_copies_sold().first()
author.copies_sold
11
```

https://docs.djangoproject.com/en/2.2/topics/db/managers

## reStructured Text (reST)

Markup language for Sphinx Documentation in Django.

https://pythonhosted.org/an_example_pypi_project/sphinx.html

Bold and italics are done like this:

`**bold** and *italics*`

## Django Resources

- https://www.reddit.com/r/django/comments/rrcj0m/any_enterprise_level_open_source_django_project
- https://github.com/getsentry/sentry
- https://github.com/taigaio
- https://github.com/edx/edx-platform

## Others

- https://medium.com/@DoorDash/tips-for-building-high-quality-django-apps-at-scale-a5a25917b2b5
- https://medium.com/@hakibenita/things-you-must-know-about-django-admin-as-your-app-gets-bigger-6be0b0ee9614
- https://data-flair.training/blogs/django-file-upload
- https://docs.djangoproject.com/en/2.0/topics/class-based-views/intro/#decorating-the-class
- https://simpleisbetterthancomplex.com/tutorial/2018/01/18/how-to-implement-multiple-user-types-with-django.html
- [Python Django and Google APIs - Project Tutorial](https://www.youtube.com/watch?v=_vCT42vDfgw&ab_channel=freeCodeCamp.org)
- https://www.freecodecamp.org/news/django-project-create-a-digital-resume-using-django-and-python
- https://www.freecodecamp.org/news/create-a-netflix-clone-with-django-and-tailwind-css
- https://www.toptal.com/django/django-top-10-mistakes
- [Django App Security: A Pydantic Tutorial, Part 4 | Toptal](https://www.toptal.com/django/secure-django-heroku-pydantic-tutorial-part-4)
