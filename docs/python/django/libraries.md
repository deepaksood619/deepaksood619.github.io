# Libaries

<https://dev.to/sm0ke/django-framework-popular-extensions-a-short-list-130>

## Django Channels

Channels is a project that takes Django and extends its abilities beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more. It's built on a Python specification called [ASGI](http://asgi.readthedocs.io/).

It does this by taking the core of Django and layering a fully asynchronous layer underneath, running Django itself in a synchronous mode but handling connections and sockets asynchronously, and giving you the choice to write in either style.

<https://realpython.com/getting-started-with-django-channels>

<https://channels.readthedocs.io/en/latest>

<https://www.sourcelair.com/blog/articles/115/django-channels-chat>

<https://medium.com/@ksarthak4ever/django-websockets-and-channels-85b7d5e59dda>

## Pinax

Pinax is an open source ecosystem of reusable Django apps, themes, and starter project templates.

It takes care of the things that many sites have in common so you can focus on what makes your site different.

Pinax provides:

- Standard project layoutfor consistency and easy deployment
- Starter projectsthat can be used as the basis for any Django website as well as some tailored-to-community sites, company sites, intranets and sites in closed beta
- Reusable appsproviding both back-end functionality and user-facing components
- Default templatesto enable quick prototyping

<https://pinaxproject.com/pinax/what_is_pinax>

## Daphne

Daphne is a HTTP, HTTP2 and WebSocket protocol server for [ASGI](https://github.com/django/asgiref/blob/master/specs/asgi.rst) and [ASGI-HTTP](https://github.com/django/asgiref/blob/master/specs/www.rst), developed to power Django Channels.

It supports automatic negotiation of protocols; there's no need for URL prefixing to determine WebSocket endpoints versus HTTP endpoints.

<https://github.com/django/daphne>

## Django Keycloak

<https://django-keycloak.readthedocs.io/en/latest/index.html>

## Django Cookiecutter

Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly.

<https://github.com/pydanny/cookiecutter-django>

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

<https://djangopackages.org/grids/g/workflow>

[**https://github.com/viewflow/viewflow**](https://github.com/viewflow/viewflow)

Reusable workflow library for Django

## Django Reversion

[**https://github.com/etianen/django-reversion**](https://github.com/etianen/django-reversion)

django-reversion is an extension to the Django web framework that provides version control for model instances.

## Django Crispy Forms

<https://django-crispy-forms.readthedocs.io/en/latest>

django-crispy-forms provides you with a|crispyfilter and{%crispy%}tag that will let you control the rendering behavior of your [Django](https://djangoproject.com/) forms in a very elegant and DRY way. Have full control without writing custom form templates. All this without breaking the standard way of doing things in [Django](https://djangoproject.com/), so it plays nice with any other form application.

## Django haystack

<https://django-haystack.readthedocs.io/en/v2.4.1/index.html>

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

<https://djangopackages.org/grids/g/bulk_update>

<https://github.com/burke-software/django-mass-edit>

<http://whitenoise.evans.io/en/stable>

## Tools

- Django-debug-toolbar
- django-extensions
- django-import-export
- django-rest-swagger
- easy-thumbnails
- django-simple-history
- django-adminactions
- django-model-utils

Django model mixins and utilities

<https://github.com/jazzband/django-model-utils>

<https://django-model-utils.readthedocs.io/en/latest/fields.html>

- **django-storages**

<https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html>

<https://simpleisbetterthancomplex.com/tutorial/2017/08/01/how-to-setup-amazon-s3-in-a-django-project.html>

- Django-compressor
- Celery
- drf-api-logger

<https://pypi.org/project/drf-api-logger>

<https://viewflow.medium.com/top-102-most-downloaded-django-packages-in-2020-108f0cd372e7>
