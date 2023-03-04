# Content Types

## Content Types

it's a built in app that keeps track of models from the installed apps of your Django application. And one of the use cases of theContentTypesis to create generic relationships between models.

## GenericForeignKey

If we want to store the user activities with these models like "created User, created Project, created Task" in a timeline, we have to create all the three models(User, Project, Task)as 'ForeignKey' fields. This is not a good programming practice. To overcome this, [Django's](https://micropyramid.com/django-development-services/) content types frameworkprovides a special field type (GenericForeignKey) which allows the relationship to be with any model.

Using 'GenericForeignKey':

- Give your model aForeignKeytoContentType. The usual name for this field is "content_type".
- Give your model a field that can store primary key values from the models you'll be relating to. For most models, this means aPositiveIntegerField. The usual name for this field is "object_id".
- Give your model aGenericForeignKey, and pass it the names of the two fields described above. If these fields are named "content_type" and "object_id", you can omit this -- those are the default field names GenericForeignKey will look for.

## References

## Generic Relations - <https://simpleisbetterthancomplex.com/tutorial/2016/10/13/how-to-use-generic-relations.html>

<https://micropyramid.com/blog/understanding-genericforeignkey-in-django>

<https://axiacore.com/blog/how-use-genericforeignkey-django>

## Avoid GenericForeignKey - <https://lukeplant.me.uk/blog/posts/avoid-django-genericforeignkey>
