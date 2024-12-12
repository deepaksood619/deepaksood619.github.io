# Optimizations

## Caching

[Django Caching 101: Understanding the Basics and Beyond - DEV Community](https://dev.to/pragativerma18/django-caching-101-understanding-the-basics-and-beyond-49p)

[10 Tips to Optimize PostgreSQL Queries in Your Django Project](https://blog.gitguardian.com/10-tips-to-optimize-postgresql-queries-in-your-django-project/)

## Best Practices for Querysets

### 1. Fetch Only What You Need

- Use `only()` to retrieve specific fields you need.
- Use `defer()` to exclude fields that you don’t need immediately.

```python
# Fetch only 'name' and 'email' fields
users = User.objects.only('name', 'email')
```

### 2. Avoid the N+1 Problem

- Use `select_related` for foreign key relationships to reduce the number of queries.
- Use `prefetch_related` for many-to-many and reverse foreign key relationships.

```python
# Example with select_related
books = Book.objects.select_related('author')

# Example with prefetch_related
authors = Author.objects.prefetch_related('books')
```

### 3. Filter Early and Accurately

- Apply filters (`filter()`, `exclude()`) as early as possible to reduce the size of the dataset.

```python
# Avoid fetching all records, then filtering in Python
# Inefficient:
users = User.objects.all() active_users = [user for user in users if user.is_active]

# Efficient:
active_users = User.objects.filter(is_active=True)
```

### 4. Use Query Chaining

- Querysets are lazy. Chain filters to construct queries efficiently.

```python
queryset = User.objects.filter(is_active=True).exclude(role='admin')
```

### 5. Use `values()` or `values_list()` for Lightweight Queries

- Fetch specific fields as dictionaries (`values()`) or tuples (`values_list()`) when you don’t need model instances.

```python
# Example with values_list
emails = User.objects.filter(is_active=True).values_list('email', flat=True)
```

### 6. Avoid Heavy Queries in Loops

- Avoid executing queries in loops; use `prefetch_related` or `annotate()` instead.

```python
# Bad Practice
for book in Book.objects.all():
    print(book.author.name)

# Optimized
books = Book.objects.select_related('author')
for book in books:
    print(book.author.name)
```

---

## Optimization Techniques

### 1. Indexing

- Use database indexes for fields that are frequently queried or filtered.
- Add indexes in your models with `db_index=True`.

```python
class User(models.Model):
    email = models.CharField(max_length=255, db_index=True)
```

### 2. Use Database Functions and Annotations

- Use `annotate()` and `aggregate()` to perform calculations at the database level.

```python
from django.db.models import Count

# Count books per author
authors = Author.objects.annotate(book_count=Count('books'))
```

### 3. Batch Querysets with `iterator()`

- Use `iterator()` for memory-efficient iteration over large datasets.

```python
for user in User.objects.iterator():
    process(user)
```

### 4. Limit Querysets with Slicing

- Use slicing to limit the number of records retrieved.

```python
first_10_books = Book.objects.all()[:10]
```

### 5. Raw SQL for Complex Queries

- For highly complex queries, consider using `raw()` to execute raw SQL.

```python
queryset = Book.objects.raw('SELECT id, title FROM app_book WHERE author_id = %s', [author_id])
```

### 6. Caching

- Cache frequently accessed query results using Django’s caching framework or tools like Redis.

```python
from django.core.cache import cache

books = cache.get('all_books')
if not books:
    books = Book.objects.all()
    cache.set('all_books', books, timeout=300)
```

### 7. Use `bulk_create` and `bulk_update`

- For inserting or updating multiple records, use `bulk_create` or `bulk_update` instead of looping.

```python
# Bulk create
users = [User(name=f'User {i}') for i in range(100)]
User.objects.bulk_create(users)
```

### 8. Avoid `count()` on Large Querysets

- Use `exists()` if you only need to check for the presence of records.

```python
# Instead of this:
if User.objects.filter(is_active=True).count() > 0:

# Use this:
if User.objects.filter(is_active=True).exists():
```

### 9. Optimize Database Connections

- Use connection pooling tools like `django-db-geventpool` for performance in high-traffic applications.

### 10. Use Database Constraints

- Enforce data integrity with constraints like `unique`, `unique_together`, or `check constraints`.

```python
class User(models.Model):
    email = models.EmailField(unique=True)
```

## Common Pitfalls to Avoid

- Avoid loading unnecessary fields or relationships.
- Avoid inefficient queries in templates; prefetch data in views instead.
- Avoid running queries in Python loops—leverage Django ORM for bulk operations.
- Don’t forget to profile your queries using tools like:
    - Django Debug Toolbar
    - Query logging (`django.db.connection.queries`)
    - Database-specific profilers.

## Summary

Efficient querying in Django involves:

- Fetching only the data you need.
- Reducing the number of queries (especially unnecessary ones).
- Leveraging ORM features like `select_related`, `prefetch_related`, `annotate`, and `values_list`.
- Caching, indexing, and profiling your queries regularly.

## Links

- [ChatGPT - Exclude Columns Django Queryset](https://chatgpt.com/share/673ee089-3d00-8005-b0ed-43473870060f)
- [ChatGPT - Optimizing Pagination in Django](https://chatgpt.com/share/674993dd-dd8c-8005-b0b0-b6ebc4a8d460)
