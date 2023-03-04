# QuerySet & Query Expressions

A QuerySet is, in essence, a list of objects of a given Model. QuerySets allow you to read the data from the database, filter it and order it. Internally, a **QuerySet** can be constructed, filtered, sliced, and generally passed around without actually hitting the database. No database activity actually occurs until you do something to evaluate the queryset.

## When QuerySets are Evaluated

Internally, a **QuerySet** can be constructed, filtered, sliced, and generally passed around without actually hitting the database. No database activity actually occurs until you do something to evaluate the queryset.

1. Iteration
2. Slicing
3. Pickling/Caching
4. repr()
5. len()
6. list()
7. bool()

## QuerySet Modifications that return querysets

1. filter()
2. exclude()
3. annotate()
4. order_by()
5. reverse()
6. distinct()
7. **values()**

    Returns a **QuerySet** that returns dictionaries, rather than model instances, when used as an iterable.

    Each of those dictionaries represents an object, with the keys corresponding to the attribute names of model objects.

    The **values()** method takes optional positional arguments, ***fields**, which specify field names to which the **SELECT** should be limited. If you specify the fields, each dictionary will contain only the field keys/values for the fields you specify. If you don't specify the fields, each dictionary will contain a key and value for every field in the database table.

8. **values_list()**

    This is similar to **values()** except that instead of returning dictionaries, it returns tuples when iterated over. Each tuple contains the value from the respective field or expression passed into the **values_list()** call - so the first item is the first field, etc

    If you only pass in a single field, you can also pass in the **flat** parameter. If **True**, this will mean the returned results are single values, rather than one-tuples.

    Example
    `Client.objects.filter(customer__name=customer_name).values_list('metrics_metadata', flat=True).exclude(metrics_metadata={}).distinct()`

    values() **and** values_list() are both intended as optimizations for a specific use case: retrieving a subset of data without the overhead of creating a model instance. This metaphor falls apart when dealing with many-to-many and other multivalued relations (such as the one-to-many relation of a reverse foreign key) because the "one row, one object" assumption doesn't hold

9. dates()
10. datetimes()
11. none()
12. all()
13. union()
14. intersection()
15. difference()
16. **select_related()**

    Returns a QuerySet that will "follow" foreign-key relationships, selecting additional related-object data when it executes its query. This is a performance booster which results in a single more complex query but means later use of foreign-key relationships won't require database queries.

    Product.objects.select_related('category').all()

    - Select related does one query to JOIN the tables
    - Select related could be used with ForeignKey and OneToOneField
    - Select related doesn't work with ManyToMany fields

17. **prefetch_related()**

    When we are using many to many relationshipswe could use prefetch_related method to booster our queries

    ```python
    Category.objects.prefetch_related('subcategories')

    Category.objects.prefetch_related(
        Prefetch(
            'subcategories',
            queryset=Category.objects.filter(is_active=True),
            to_attr='active_subcategories'
        )
    )
    ```

    )

    - Prefetch related makes two queries and do the JOIN using Python
    - Prefetch related loses it effect when you change the base query

18. extra()
19. defer()
20. **only()**
21. using()
22. select_for_update()
23. **raw()**

## QuerySet Modifications that do not return QuerySets

1. get()
2. create()
3. get_or_create()
4. update_or_create()
5. bulk_create()
6. count()
7. in_bulk()
8. iterator()
9. latest()
10. earliest()
11. first()
12. last()
13. aggregate()
14. exists()
15. update()
16. delete()
17. as_manager()

## Field lookups

- Field lookups are how you specify the meat of an SQL WHERE clause. They're specified as keyword arguments to the QuerySet methods filter(), exclude() and get().
- Can also create custom lookups for model fields
- Where no lookup type is provided, the lookup type is assumed to be **exact.**

1. exact
2. iexact
3. contains
4. icontains
5. in
6. gt
7. gte
8. lt
9. lte
10. startswith
11. istartswith
12. endswith
13. iendswith
14. range
15. date
16. year
17. month
18. day
19. week
20. week_day
21. quarter
22. time
23. hour
24. minute
25. second
26. **isnull**
27. regex
28. iregex

## Aggregation Functions

1. Avg
2. Count
3. Max
4. Min
5. StdDev
6. Sum
7. Variance

Defined in django.db.models.expressions and django.db.models.aggregates

## F() Expressions

An F() object represents the value of a model field or annotated column. It makes it possible to refer to model field values and **perform database operations using them without actually having to pull them out of the database into Python memory.**

This is easiest to understand through an example. Normally, one might do something like this:

```python
# Tintin filed a news story!
reporter = Reporters.objects.get(name='Tintin')
reporter.stories_filed += 1
reporter.save()
```

Here, we have pulled the value of**reporter.stories_filed**from the database into memory and manipulated it using familiar Python operators, and then saved the object back to the database. But instead we could also have done:

```python
from django.db.models import F
reporter = Reporters.objects.get(name='Tintin')
reporter.stories_filed = F('stories_filed') + 1
reporter.save()
```

Although **reporter.stories_filed=F('stories_filed')+1** looks like a normal Python assignment of value to an instance attribute, in fact it's an SQL construct describing an operation on the database.

When Django encounters an instance of **F()**, it overrides the standard Python operators to create an encapsulated SQL expression; in this case, one which instructs the database to increment the database field represented by **reporter.stories_filed**.

F expressions also can be used to compare the value of a model field with another field on the same model. Instances of F() act as a reference to a model field within a query. These references can then be used in query_filters to compare the values of two different fields on the same model instance

`Entry.objects.filter(rating__lt=F('n_comments') + F('n_pingbacks'))`

- Django supports the use of addition, subtraction, multiplication, division, modulo, and power arithmetic with**F()**objects, both with constants and with other **F()** objects.
- You can also use the double underscore notation to span relationships in an **F()** object. An **F()** object with a double underscore will introduce any joins needed to access the related object.
- The**F()**objects support bitwise operations by **.bitand()**, **.bitor()**, **.bitrightshift()**, and **.bitleftshift()**. For example:

### The pk lookup shortcut

```python
Blog.objects.get(id__exact=14) # Explicit form
Blog.objects.get(id=14) # __exact is implied
Blog.objects.get(pk=14) # pk implies id__exact
```

### Escaping percent signs and underscores in LIKE statements

The field lookups that equate to **LIKE** SQL statements (**iexact**, **contains**, **icontains**, **startswith**, **istartswith**, **endswith** and **iendswith**) will automatically escape the two special characters used in **LIKE** statements -- the percent sign and the underscore. **(In a LIKE statement, the percent sign signifies a multiple-character wildcard and the underscore signifies a single-character wildcard.)**

This means things should work intuitively, so the abstraction doesn't leak. For example, to retrieve all the entries that contain a percent sign, just use the percent sign as any other character:

`Entry.objects.filter(headline__contains='%')`

Django takes care of the quoting for you; the resulting SQL will look something like this:

`SELECT ... WHERE headline LIKE '%\%%'`

Same goes for underscores. Both percentage signs and underscores are handled for you transparently.

### Q Objects

Keyword argument queries - in [filter()](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.query.QuerySet.filter), etc. - are "AND"ed together. If you need to execute more complex queries (for example, queries with OR statements), you can use [Q objects](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.Q).

A [Q object](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.Q)(django.db.models.Q) is an object used to encapsulate a collection of keyword arguments

Q objects can be combined using the **&** and **|** operators. When an operator is used on two **Q** objects, it yields a new Q object

For example, this statement yields a single **Q** object that represents the "OR" of two **"question__startswith"** queries:

`Q(question__startswith='Who') | Q(question__startswith='What')`

This is equivalent to the following SQL **WHERE** clause:

`WHERE question LIKE 'Who%' OR question LIKE 'What%'`

You can compose statements of arbitrary complexity by combining **Q** objects with the **&** and **|** operators and use parenthetical grouping. Also, **Q** objects can be negated using the **~** operator, allowing for combined lookups that combine both a normal query and a negated (**NOT**) query:

`Q(question__startswith='Who') | ~Q(pub_date__year=2005)`

Each lookup function that takes keyword-arguments (e.g.[**filter()**](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.query.QuerySet.filter), [**exclude()**](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.query.QuerySet.exclude), [**get()**](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#django.db.models.query.QuerySet.get)) can also be passed one or more **Q** objects as positional (not-named) arguments. If you provide multiple **Q** object arguments to a lookup function, the arguments will be "AND"ed together. For example:

```python
Poll.objects.get(
    Q(question__startswith='Who'),
    Q(pub_date=date(2005, 5, 2)) | Q(pub_date=date(2005, 5, 6))
)
```

... roughly translates into the SQL:

```sql
SELECT * **from polls** WHERE question LIKE 'Who%'
AND (pub_date = '2005-05-02' OR pub_date = '2005-05-06')
```

Lookup functions can mix the use of **Q** objects and keyword arguments. All arguments provided to a lookup function (be they keyword arguments or **Q** objects) are "AND"ed together. However, **if a Q object is provided, it must precede the definition of any keyword arguments**. For example:

```python
Poll.objects.get(
    Q(pub_date=date(2005, 5, 2)) | Q(pub_date=date(2005, 5, 6)),
    question__startswith='Who',
)
```

### References

<https://docs.djangoproject.com/en/2.0/ref/models/querysets>

<https://docs.djangoproject.com/en/2.0/topics/db/queries>
