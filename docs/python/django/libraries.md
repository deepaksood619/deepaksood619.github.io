# Libaries

https://dev.to/sm0ke/django-framework-popular-extensions-a-short-list-130

## Django Channels

Channels is a project that takes Django and extends its abilities beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more. It's built on a Python specification called [ASGI](http://asgi.readthedocs.io/).

It does this by taking the core of Django and layering a fully asynchronous layer underneath, running Django itself in a synchronous mode but handling connections and sockets asynchronously, and giving you the choice to write in either style.

https://realpython.com/getting-started-with-django-channels

https://channels.readthedocs.io/en/latest

https://www.sourcelair.com/blog/articles/115/django-channels-chat

https://medium.com/@ksarthak4ever/django-websockets-and-channels-85b7d5e59dda

[valberg.dk - Writing a chat application in Django 4.2 using async StreamingHttpResponse, Server-Sent Events and PostgreSQL LISTEN/NOTIFY](https://valberg.dk/django-sse-postgresql-listen-notify.html)

## Pinax

Pinax is an open source ecosystem of reusable Django apps, themes, and starter project templates.

It takes care of the things that many sites have in common so you can focus on what makes your site different.

Pinax provides:

- Standard project layoutfor consistency and easy deployment
- Starter projectsthat can be used as the basis for any Django website as well as some tailored-to-community sites, company sites, intranets and sites in closed beta
- Reusable appsproviding both back-end functionality and user-facing components
- Default templatesto enable quick prototyping

https://pinaxproject.com/pinax/what_is_pinax

## Daphne

Daphne is a HTTP, HTTP2 and WebSocket protocol server for [ASGI](https://github.com/django/asgiref/blob/master/specs/asgi.rst) and [ASGI-HTTP](https://github.com/django/asgiref/blob/master/specs/www.rst), developed to power Django Channels.

It supports automatic negotiation of protocols; there's no need for URL prefixing to determine WebSocket endpoints versus HTTP endpoints.

https://github.com/django/daphne

## Django Keycloak

https://django-keycloak.readthedocs.io/en/latest/index.html

## Django Cookiecutter

Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly.

https://github.com/pydanny/cookiecutter-django

## django-taggit

[https://github.com/jazzband/django-taggit](https://github.com/jazzband/django-taggit)

django-taggit a simpler approach to tagging with Django. Add "taggit"to your INSTALLED_APPS then just add a TaggableManager to your model.

Comma seperate values

### Cons

- Can't control the quality of entries
- Can't select using view

## Django River

[https://github.com/javrasya/django-river](https://github.com/javrasya/django-river)

Django workflow library that supports on the fly changes

https://djangopackages.org/grids/g/workflow

[**https://github.com/viewflow/viewflow**](https://github.com/viewflow/viewflow)

Reusable workflow library for Django

## Django Reversion

[**https://github.com/etianen/django-reversion**](https://github.com/etianen/django-reversion)

django-reversion is an extension to the Django web framework that provides version control for model instances.

[Management commands — django-reversion 5.0.12 documentation](https://django-reversion.readthedocs.io/en/latest/commands.html)

```bash
./manage.py deleterevisions
# keep any changes from last 30 days
./manage.py deleterevisions your_app.YourModel --days=30
# keep 30 most recent changes for each item.
./manage.py deleterevisions your_app.YourModel --keep=30
# Keep anything from last 30 days and at least 3 from older changes.
./manage.py deleterevisions your_app.YourModel --keep=3 --days=30

# With no arguments, this command will delete your entire revision history! Read the command help for ways to limit which revisions should be deleted.
```

[django-reversion/reversion/management/commands/deleterevisions.py at a781656740bcb0d998324cd3a8c11c8754e1e1b2 · etianen/django-reversion · GitHub](https://github.com/etianen/django-reversion/blob/a781656740bcb0d998324cd3a8c11c8754e1e1b2/reversion/management/commands/deleterevisions.py)

## Django Crispy Forms

https://django-crispy-forms.readthedocs.io/en/latest

django-crispy-forms provides you with `a|crispyfilter` and `{%crispy%}` tag that will let you control the rendering behavior of your [Django](https://djangoproject.com/) forms in a very elegant and DRY way. Have full control without writing custom form templates. All this without breaking the standard way of doing things in [Django](https://djangoproject.com/), so it plays nice with any other form application.

## Django haystack

https://django-haystack.readthedocs.io/en/v2.4.1/index.html

Haystack provides modular search for Django. It features a unified, familiar API that allows you to plug in different search backends (such as [Solr](http://lucene.apache.org/solr/), [Elasticsearch](http://elasticsearch.org/), [Whoosh](https://bitbucket.org/mchaput/whoosh/), [Xapian](http://xapian.org/), etc.) without having to modify your code.

## Django ratelimit

[Django Ratelimit - Django Ratelimit 4.0.0 documentation](https://django-ratelimit.readthedocs.io/)

```python
from django_ratelimit.decorators import ratelimit

@ratelimit(key="get:chat_id", rate="1/30s", block=False)
def send_email_and_push(request):

    if request.method == "GET":
        send_chat_link(request, "email")
        push_response = send_chat_link(request, "push")

        return push_response
```

## Django API Documentation

- [Documenting your API - Django REST framework](https://www.django-rest-framework.org/topics/documenting-your-api/)
- [drf-yasg — drf-yasg 1.21.7 documentation](https://drf-yasg.readthedocs.io/)
	- [GitHub - axnsan12/drf-yasg: Automated generation of real Swagger/OpenAPI 2.0 schemas from Django REST Framework code.](https://github.com/axnsan12/drf-yasg)
- [GitHub - tfranzel/drf-spectacular: Sane and flexible OpenAPI 3 schema generation for Django REST framework.](https://github.com/tfranzel/drf-spectacular)

## Others

```python
django-admin-rangefilter==0.3.8 #for selecting date range in django admin site
django-cors-headers==2.4.0
django-crispy-forms==1.7.2
django-filter==1.1.0 #used by graphene-django for filtering on fields
django-redis==4.10.0
django-seed==0.1.9
django-ses==0.8.12
django-silk==3.0.4
django-smart-selects==1.5.4 #for adding filter or group (chained) models in dropdowns
django-sortedm2m==1.5.0
gevent==1.4.0
graphene-django==2.3.2

pyinotify==0.9.6
```

https://djangopackages.org/grids/g/bulk_update

https://github.com/burke-software/django-mass-edit

http://whitenoise.evans.io/en/stable

## Tools

- Django-debug-toolbar
- [GitHub - jazzband/django-silk: Silky smooth profiling for Django](https://github.com/jazzband/django-silk)
- django-extensions
- django-import-export
- django-rest-swagger
- easy-thumbnails
- django-simple-history
- django-adminactions
- Django-compressor
- Celery
- [django-structlog — django-structlog 9.1.1 documentation](https://django-structlog.readthedocs.io/en/latest/)

### django-model-utils

Django model mixins and utilities

https://github.com/jazzband/django-model-utils

https://django-model-utils.readthedocs.io/en/latest/fields.html

### django-storages

https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html

https://simpleisbetterthancomplex.com/tutorial/2017/08/01/how-to-setup-amazon-s3-in-a-django-project.html

### drf-api-logger

https://pypi.org/project/drf-api-logger

https://viewflow.medium.com/top-102-most-downloaded-django-packages-in-2020-108f0cd372e7
