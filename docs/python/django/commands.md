# Commands

```python
python -m django --version

gunicorn mysite.wsgi:application

daphene mysite.asgi:application

## Creating a project
# for creating project in current directory
django-admin startproject mysite .

## Start development server
python manage.py runserver

## Creating apps
python manage.py startapp polls

## Creating sub applications
cd app

python ../manage.py startapp sub_app

## Playing with the API (Shell)
python manage.py shell

## Shell Plus
python manage.py shell_plus

## Collect static files
python manage.py collectstatic -c

## Creating admin
python manage.py createsuperuser

<http://localhost:8000/admin>

## Running tests
python manage.py test <app_name>

python manage.py test polls

python -Wd manage.py test (This will show all deprecation warnings)

## Finding django source files
python -c "import django; print(django.__path__)"

## Shell commands
from polls.models import Question, Choice

Question.objects.all()

Q = Question(question_text="What's new?", pub_date=timezone.now())
Q.save()

Q.id
Q.question_text
Q.pub_date
Q.question_text="What's up?"
Q.save()

Question.objects.all()
Question.objects.filter(id=1)
Question.objects.filter(question_text__startswith='What')

Current_year = timezone.now().year
Question.objects.get(pub_date__year=current_year)

Q = Question.objects.get(pk=1)
Q.choice_set.all()
Q.choice_set.create(choice_text='Not much', votes=0)
Q.question
Q.choice_set.count()

## To override model's toString
def __str__(self):
    return self.question_text

## Forgot Password
python manage.py shell
from django.contrib.auth.models import User
user = User.objects.all()[0]
user.set_password('new_password')
user.save()

## django-admin commands
[django]
    check
    compilemessages
    collectstatic
    collectstatic --noinput -c (Generate static files to serve)
    createcachetable
    dbshell
    diffsettings
    dumpdata
    python manage.py dumpdata > dumpdata.sql
    flush
    findstatic
    inspectdb
    loaddata
    loaddata initial_data (Searches for and loads the contents of the named fixture into the database)
    makemessages
    makemigrations (creating new migrations)
    migrate (applying and unapplying migrations)
    migrate home_device zero (Uninstall migrations from an application)

    The migrate command takes all the migrations that haven’t been applied (Django tracks which ones are applied using a special table in your database called django_migrations) and runs them against your database - essentially, synchronizing the changes you made to your models with the schema in the database.
    Migrations are very powerful and let you change your models over time, as you develop your project, without the need to delete your database or tables and make new ones - it specializes in upgrading your database live, without losing data.

    runserver
    sendtestemail
    shell
    showmigrations (lists a project’s migrations and their status)
    sqlflush
    sqlmigrate (displays the SQL statements for a migration)
    sqlsequencereset
    squashmigrations
    startapp
    startproject
    test
    testserver
```

- [migrate](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-migrate), which is responsible for applying and unapplying migrations.
- [makemigrations](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-makemigrations), which is responsible for creating new migrations based on the changes you have made to your models.
- [sqlmigrate](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-sqlmigrate), which displays the SQL statements for a migration.
- [showmigrations](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-showmigrations), which lists a project's migrations and their status.
