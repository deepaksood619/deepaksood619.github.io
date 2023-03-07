# Django Rest Framework DRF

Django REST framework is a powerful and flexible toolkit for building Web APIs.

## Features

1. Web browsable API
2. Authentication policies
3. Serialization

## Commands

```bash
pip install pygments # for code highlighting

# Set up a new project with a single application
django-admin.py startproject tutorial . # Note the trailing '.' character

cd tutorial
django-admin.py startapp quickstart
```

1. **Serialization**

    **Model Serializers**

    ```python
    class SnippetSerializer(serializers.ModelSerializer):
        class Meta:
            model = Snippet
            fields = ('id', 'title', 'code', 'linenos', 'language', 'style')
    ```

    One nice property that serializers have is that you can inspect all the fields in a serializer instance, by printing its representation. Open the Django shell with `python manage.py shell`, then try the following:

    ```python
    from snippets.serializers import SnippetSerializer
    serializer = SnippetSerializer()
    print(repr(serializer))
    ```

    **HyperlinkedModelSerializer**

2. **Requests &Responses**

3. **Class-based views**

4. **Authentication & Permissions**

    <https://nezhar.com/blog/django-rest-framework-permissions-in-depth>

5. **Relationships & hyperlinked APIs**

6. **Viewsets & routers**

7. **Schemas & client libraries**

<https://www.youtube.com/playlist?list=PLLxk3TkuAYnrO32ABtQyw2hLRWt1BUrhj>
