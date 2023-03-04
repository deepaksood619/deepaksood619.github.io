# Docs - Topic Guides

- [How to install Django](https://docs.djangoproject.com/en/2.0/topics/install/)
  - [Install Python](https://docs.djangoproject.com/en/2.0/topics/install/#install-python)
  - [Install Apache andmod_wsgi](https://docs.djangoproject.com/en/2.0/topics/install/#install-apache-and-mod-wsgi)
  - [Get your database running](https://docs.djangoproject.com/en/2.0/topics/install/#get-your-database-running)
  - [Remove any old versions of Django](https://docs.djangoproject.com/en/2.0/topics/install/#remove-any-old-versions-of-django)
  - [Install the Django code](https://docs.djangoproject.com/en/2.0/topics/install/#install-the-django-code)
- [Models and databases](https://docs.djangoproject.com/en/2.0/topics/db/)
  - [Models](https://docs.djangoproject.com/en/2.0/topics/db/models/)
  - [Making queries](https://docs.djangoproject.com/en/2.0/topics/db/queries/)
  - [Aggregation](https://docs.djangoproject.com/en/2.0/topics/db/aggregation/)
  - [Search](https://docs.djangoproject.com/en/2.0/topics/db/search/)
  - [Managers](https://docs.djangoproject.com/en/2.0/topics/db/managers/)
  - [**Performing raw SQL queries**](https://docs.djangoproject.com/en/2.0/topics/db/sql/)

```python
for p in Person.objects.raw('SELECT * FROM myapp_person')
  print(p)
  ```

- [Database transactions](https://docs.djangoproject.com/en/2.0/topics/db/transactions/)
- [Multiple databases](https://docs.djangoproject.com/en/2.0/topics/db/multi-db/)
- [Tablespaces](https://docs.djangoproject.com/en/2.0/topics/db/tablespaces/)
- [Database access optimization](https://docs.djangoproject.com/en/2.0/topics/db/optimization/)
- [Database instrumentation](https://docs.djangoproject.com/en/2.0/topics/db/instrumentation/)
- [Examples of model relationship API usage](https://docs.djangoproject.com/en/2.0/topics/db/examples/)

- [Handling HTTP requests](https://docs.djangoproject.com/en/2.0/topics/http/)
  - [URL dispatcher](https://docs.djangoproject.com/en/2.0/topics/http/urls/)
  - [Writing views](https://docs.djangoproject.com/en/2.0/topics/http/views/)
  - [View decorators](https://docs.djangoproject.com/en/2.0/topics/http/decorators/)
  - [File Uploads](https://docs.djangoproject.com/en/2.0/topics/http/file-uploads/)
  - [Django shortcut functions](https://docs.djangoproject.com/en/2.0/topics/http/shortcuts/)
  - [Generic views](https://docs.djangoproject.com/en/2.0/topics/http/generic-views/)
  - [Middleware](https://docs.djangoproject.com/en/2.0/topics/http/middleware/)
  - [How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/)
- [Working with forms](https://docs.djangoproject.com/en/2.0/topics/forms/)
  - [HTML forms](https://docs.djangoproject.com/en/2.0/topics/forms/#html-forms)
  - [Django's role in forms](https://docs.djangoproject.com/en/2.0/topics/forms/#django-s-role-in-forms)
  - [Forms in Django](https://docs.djangoproject.com/en/2.0/topics/forms/#forms-in-django)
  - [Building a form](https://docs.djangoproject.com/en/2.0/topics/forms/#building-a-form)
  - [More about DjangoFormclasses](https://docs.djangoproject.com/en/2.0/topics/forms/#more-about-django-form-classes)
  - [Working with form templates](https://docs.djangoproject.com/en/2.0/topics/forms/#working-with-form-templates)
  - [Further topics](https://docs.djangoproject.com/en/2.0/topics/forms/#further-topics)
- [Templates](https://docs.djangoproject.com/en/2.0/topics/templates/)
  - [Support for template engines](https://docs.djangoproject.com/en/2.0/topics/templates/#support-for-template-engines)
  - [The Django template language](https://docs.djangoproject.com/en/2.0/topics/templates/#the-django-template-language)
- [Class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/)
  - [Introduction to class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/intro/)
  - [Built-in class-based generic views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/generic-display/)
  - [Form handling with class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/generic-editing/)
  - [Using mixins with class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/mixins/)
  - [Basic examples](https://docs.djangoproject.com/en/2.0/topics/class-based-views/#basic-examples)
  - [Simple usage in your URLconf](https://docs.djangoproject.com/en/2.0/topics/class-based-views/#simple-usage-in-your-urlconf)
  - [Subclassing generic views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/#subclassing-generic-views)
- [Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/)
  - [The Commands](https://docs.djangoproject.com/en/2.0/topics/migrations/#the-commands)
  - [Backend Support](https://docs.djangoproject.com/en/2.0/topics/migrations/#backend-support)
  - [Workflow](https://docs.djangoproject.com/en/2.0/topics/migrations/#workflow)
  - [Dependencies](https://docs.djangoproject.com/en/2.0/topics/migrations/#dependencies)
  - [Migration files](https://docs.djangoproject.com/en/2.0/topics/migrations/#migration-files)
  - [Adding migrations to apps](https://docs.djangoproject.com/en/2.0/topics/migrations/#adding-migrations-to-apps)
  - [Historical models](https://docs.djangoproject.com/en/2.0/topics/migrations/#historical-models)
  - [Considerations when removing model fields](https://docs.djangoproject.com/en/2.0/topics/migrations/#considerations-when-removing-model-fields)
  - [Data Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/#data-migrations)
  - [**Squashing migrations**](https://docs.djangoproject.com/en/2.0/topics/migrations/#squashing-migrations)
  - [Serializing values](https://docs.djangoproject.com/en/2.0/topics/migrations/#serializing-values)
  - [Supporting multiple Django versions](https://docs.djangoproject.com/en/2.0/topics/migrations/#supporting-multiple-django-versions)
- [Managing files](https://docs.djangoproject.com/en/2.0/topics/files/)
  - [Using files in models](https://docs.djangoproject.com/en/2.0/topics/files/#using-files-in-models)
  - [TheFileobject](https://docs.djangoproject.com/en/2.0/topics/files/#the-file-object)
  - [File storage](https://docs.djangoproject.com/en/2.0/topics/files/#file-storage)
- [Testing in Django](https://docs.djangoproject.com/en/2.0/topics/testing/)
  - [Writing and running tests](https://docs.djangoproject.com/en/2.0/topics/testing/overview/)
  - [Testing tools](https://docs.djangoproject.com/en/2.0/topics/testing/tools/)
  - [Advanced testing topics](https://docs.djangoproject.com/en/2.0/topics/testing/advanced/)
- [User authentication in Django](https://docs.djangoproject.com/en/2.0/topics/auth/)
  - [Overview](https://docs.djangoproject.com/en/2.0/topics/auth/#overview)
  - [Installation](https://docs.djangoproject.com/en/2.0/topics/auth/#installation)
  - [Usage](https://docs.djangoproject.com/en/2.0/topics/auth/#usage)
- [Django's cache framework](https://docs.djangoproject.com/en/2.0/topics/cache/)
  - [Setting up the cache](https://docs.djangoproject.com/en/2.0/topics/cache/#setting-up-the-cache)
  - [The per-site cache](https://docs.djangoproject.com/en/2.0/topics/cache/#the-per-site-cache)
  - [The per-view cache](https://docs.djangoproject.com/en/2.0/topics/cache/#the-per-view-cache)
  - [Template fragment caching](https://docs.djangoproject.com/en/2.0/topics/cache/#template-fragment-caching)
  - [The low-level cache API](https://docs.djangoproject.com/en/2.0/topics/cache/#the-low-level-cache-api)
  - [Downstream caches](https://docs.djangoproject.com/en/2.0/topics/cache/#downstream-caches)
  - [UsingVaryheaders](https://docs.djangoproject.com/en/2.0/topics/cache/#using-vary-headers)
  - [Controlling cache: Using other headers](https://docs.djangoproject.com/en/2.0/topics/cache/#controlling-cache-using-other-headers)
  - [Order ofMIDDLEWARE](https://docs.djangoproject.com/en/2.0/topics/cache/#order-of-middleware)
- [Conditional View Processing](https://docs.djangoproject.com/en/2.0/topics/conditional-view-processing/)
  - [Theconditiondecorator](https://docs.djangoproject.com/en/2.0/topics/conditional-view-processing/#the-condition-decorator)
  - [Shortcuts for only computing one value](https://docs.djangoproject.com/en/2.0/topics/conditional-view-processing/#shortcuts-for-only-computing-one-value)
  - [Using the decorators with other HTTP methods](https://docs.djangoproject.com/en/2.0/topics/conditional-view-processing/#using-the-decorators-with-other-http-methods)
  - [Comparison with middleware conditional processing](https://docs.djangoproject.com/en/2.0/topics/conditional-view-processing/#comparison-with-middleware-conditional-processing)
- [Cryptographic signing](https://docs.djangoproject.com/en/2.0/topics/signing/)
  - [Protecting theSECRET_KEY](https://docs.djangoproject.com/en/2.0/topics/signing/#protecting-the-secret-key)
  - [Using the low-level API](https://docs.djangoproject.com/en/2.0/topics/signing/#using-the-low-level-api)
- [Sending email](https://docs.djangoproject.com/en/2.0/topics/email/)
  - [Quick example](https://docs.djangoproject.com/en/2.0/topics/email/#quick-example)
  - [send_mail()](https://docs.djangoproject.com/en/2.0/topics/email/#send-mail)
  - [send_mass_mail()](https://docs.djangoproject.com/en/2.0/topics/email/#send-mass-mail)
  - [mail_admins()](https://docs.djangoproject.com/en/2.0/topics/email/#mail-admins)
  - [mail_managers()](https://docs.djangoproject.com/en/2.0/topics/email/#mail-managers)
  - [Examples](https://docs.djangoproject.com/en/2.0/topics/email/#examples)
  - [Preventing header injection](https://docs.djangoproject.com/en/2.0/topics/email/#preventing-header-injection)
  - [TheEmailMessageclass](https://docs.djangoproject.com/en/2.0/topics/email/#the-emailmessage-class)
  - [Email backends](https://docs.djangoproject.com/en/2.0/topics/email/#email-backends)
  - [Configuring email for development](https://docs.djangoproject.com/en/2.0/topics/email/#configuring-email-for-development)
- [Internationalization and localization](https://docs.djangoproject.com/en/2.0/topics/i18n/)
  - [Overview](https://docs.djangoproject.com/en/2.0/topics/i18n/#overview)
  - [Definitions](https://docs.djangoproject.com/en/2.0/topics/i18n/#definitions)
- [Logging](https://docs.djangoproject.com/en/2.0/topics/logging/)
  - [A quick logging primer](https://docs.djangoproject.com/en/2.0/topics/logging/#a-quick-logging-primer)
  - [Using logging](https://docs.djangoproject.com/en/2.0/topics/logging/#using-logging)
  - [Configuring logging](https://docs.djangoproject.com/en/2.0/topics/logging/#configuring-logging)
  - [Django's logging extensions](https://docs.djangoproject.com/en/2.0/topics/logging/#django-s-logging-extensions)
  - [Django's default logging configuration](https://docs.djangoproject.com/en/2.0/topics/logging/#django-s-default-logging-configuration)
- [Pagination](https://docs.djangoproject.com/en/2.0/topics/pagination/)
  - [Example](https://docs.djangoproject.com/en/2.0/topics/pagination/#example)
  - [UsingPaginatorin a view](https://docs.djangoproject.com/en/2.0/topics/pagination/#using-paginator-in-a-view)
  - [Paginatorobjects](https://docs.djangoproject.com/en/2.0/topics/pagination/#paginator-objects)
  - [InvalidPageexceptions](https://docs.djangoproject.com/en/2.0/topics/pagination/#invalidpage-exceptions)
  - [Pageobjects](https://docs.djangoproject.com/en/2.0/topics/pagination/#page-objects)
- [Security in Django](https://docs.djangoproject.com/en/2.0/topics/security/)
  - [Cross site scripting (XSS) protection](https://docs.djangoproject.com/en/2.0/topics/security/#cross-site-scripting-xss-protection)
  - [Cross site request forgery (CSRF) protection](https://docs.djangoproject.com/en/2.0/topics/security/#cross-site-request-forgery-csrf-protection)
  - [SQL injection protection](https://docs.djangoproject.com/en/2.0/topics/security/#sql-injection-protection)
  - [Clickjacking protection](https://docs.djangoproject.com/en/2.0/topics/security/#clickjacking-protection)
  - [SSL/HTTPS](https://docs.djangoproject.com/en/2.0/topics/security/#ssl-https)
  - [Host header validation](https://docs.djangoproject.com/en/2.0/topics/security/#host-header-validation)
  - [Session security](https://docs.djangoproject.com/en/2.0/topics/security/#session-security)
  - [User-uploaded content](https://docs.djangoproject.com/en/2.0/topics/security/#user-uploaded-content)
  - [Additional security topics](https://docs.djangoproject.com/en/2.0/topics/security/#additional-security-topics)
- [Performance and optimization](https://docs.djangoproject.com/en/2.0/topics/performance/)
  - [Introduction](https://docs.djangoproject.com/en/2.0/topics/performance/#introduction)
  - [General approaches](https://docs.djangoproject.com/en/2.0/topics/performance/#general-approaches)
  - [Caching](https://docs.djangoproject.com/en/2.0/topics/performance/#caching)
  - [Understanding laziness](https://docs.djangoproject.com/en/2.0/topics/performance/#understanding-laziness)
  - [Databases](https://docs.djangoproject.com/en/2.0/topics/performance/#databases)
  - [HTTP performance](https://docs.djangoproject.com/en/2.0/topics/performance/#http-performance)
  - [Template performance](https://docs.djangoproject.com/en/2.0/topics/performance/#template-performance)
  - [Using different versions of available software](https://docs.djangoproject.com/en/2.0/topics/performance/#using-different-versions-of-available-software)
- [Serializing Django objects](https://docs.djangoproject.com/en/2.0/topics/serialization/)
  - [Serializing data](https://docs.djangoproject.com/en/2.0/topics/serialization/#serializing-data)
  - [Deserializing data](https://docs.djangoproject.com/en/2.0/topics/serialization/#deserializing-data)
  - [Serialization formats](https://docs.djangoproject.com/en/2.0/topics/serialization/#serialization-formats)
  - [Natural keys](https://docs.djangoproject.com/en/2.0/topics/serialization/#natural-keys)
- [Django settings](https://docs.djangoproject.com/en/2.0/topics/settings/)
  - [The basics](https://docs.djangoproject.com/en/2.0/topics/settings/#the-basics)
  - [Designating the settings](https://docs.djangoproject.com/en/2.0/topics/settings/#designating-the-settings)
  - [Default settings](https://docs.djangoproject.com/en/2.0/topics/settings/#default-settings)
  - [Using settings in Python code](https://docs.djangoproject.com/en/2.0/topics/settings/#using-settings-in-python-code)
  - [Altering settings at runtime](https://docs.djangoproject.com/en/2.0/topics/settings/#altering-settings-at-runtime)
  - [Security](https://docs.djangoproject.com/en/2.0/topics/settings/#security)
  - [Available settings](https://docs.djangoproject.com/en/2.0/topics/settings/#available-settings)
  - [Creating your own settings](https://docs.djangoproject.com/en/2.0/topics/settings/#creating-your-own-settings)
  - [Using settings without settingDJANGO_SETTINGS_MODULE](https://docs.djangoproject.com/en/2.0/topics/settings/#using-settings-without-setting-django-settings-module)
- [Signals](https://docs.djangoproject.com/en/2.0/topics/signals/)
  - [Listening to signals](https://docs.djangoproject.com/en/2.0/topics/signals/#listening-to-signals)
  - [Defining and sending signals](https://docs.djangoproject.com/en/2.0/topics/signals/#defining-and-sending-signals)
  - [Disconnecting signals](https://docs.djangoproject.com/en/2.0/topics/signals/#disconnecting-signals)
- [System check framework](https://docs.djangoproject.com/en/2.0/topics/checks/)
  - [Writing your own checks](https://docs.djangoproject.com/en/2.0/topics/checks/#writing-your-own-checks)
- [External packages](https://docs.djangoproject.com/en/2.0/topics/external-packages/)
  - [Localflavor](https://docs.djangoproject.com/en/2.0/topics/external-packages/#localflavor)
  - [Comments](https://docs.djangoproject.com/en/2.0/topics/external-packages/#comments)
  - [Formtools](https://docs.djangoproject.com/en/2.0/topics/external-packages/#formtools)

<https://docs.djangoproject.com/en/2.0/topics>

## How to Guides

- [Authentication usingREMOTE_USER](https://docs.djangoproject.com/en/2.0/howto/auth-remote-user/)
- [Writing customdjango-admincommands](https://docs.djangoproject.com/en/2.0/howto/custom-management-commands/)
- [Writing custom model fields](https://docs.djangoproject.com/en/2.0/howto/custom-model-fields/)
- [Custom Lookups](https://docs.djangoproject.com/en/2.0/howto/custom-lookups/)
- [Custom template tags and filters](https://docs.djangoproject.com/en/2.0/howto/custom-template-tags/)
- [Writing a custom storage system](https://docs.djangoproject.com/en/2.0/howto/custom-file-storage/)
- [Deploying Django](https://docs.djangoproject.com/en/2.0/howto/deployment/)
- [Upgrading Django to a newer version](https://docs.djangoproject.com/en/2.0/howto/upgrade-version/)
- [Error reporting](https://docs.djangoproject.com/en/2.0/howto/error-reporting/)
- [Providing initial data for models](https://docs.djangoproject.com/en/2.0/howto/initial-data/)
- [Django on Jython](https://docs.djangoproject.com/en/2.0/howto/jython/)
- [Integrating Django with a legacy database](https://docs.djangoproject.com/en/2.0/howto/legacy-databases/)
- [Outputting CSV with Django](https://docs.djangoproject.com/en/2.0/howto/outputting-csv/)
- [Outputting PDFs with Django](https://docs.djangoproject.com/en/2.0/howto/outputting-pdf/)
- [Overriding templates](https://docs.djangoproject.com/en/2.0/howto/overriding-templates/)
- [Managing static files (e.g. images, JavaScript, CSS)](https://docs.djangoproject.com/en/2.0/howto/static-files/)
- [Deploying static files](https://docs.djangoproject.com/en/2.0/howto/static-files/deployment/)
- [How to install Django on Windows](https://docs.djangoproject.com/en/2.0/howto/windows/)
- [Writing database migrations](https://docs.djangoproject.com/en/2.0/howto/writing-migrations/)

<https://docs.djangoproject.com/en/2.0/howto>

## API Reference

- [Applications](https://docs.djangoproject.com/en/2.0/ref/applications/)
- [System check framework](https://docs.djangoproject.com/en/2.0/ref/checks/)
- [Built-in class-based views API](https://docs.djangoproject.com/en/2.0/ref/class-based-views/)
- [Clickjacking Protection](https://docs.djangoproject.com/en/2.0/ref/clickjacking/)
- [contribpackages](https://docs.djangoproject.com/en/2.0/ref/contrib/)
- [Cross Site Request Forgery protection](https://docs.djangoproject.com/en/2.0/ref/csrf/)
- [Databases](https://docs.djangoproject.com/en/2.0/ref/databases/)
- [django-adminandmanage.py](https://docs.djangoproject.com/en/2.0/ref/django-admin/)
- [Running management commands from your code](https://docs.djangoproject.com/en/2.0/ref/django-admin/#running-management-commands-from-your-code)
- [Django Exceptions](https://docs.djangoproject.com/en/2.0/ref/exceptions/)
- [File handling](https://docs.djangoproject.com/en/2.0/ref/files/)
- [Forms](https://docs.djangoproject.com/en/2.0/ref/forms/)
- [Middleware](https://docs.djangoproject.com/en/2.0/ref/middleware/)
- [Migration Operations](https://docs.djangoproject.com/en/2.0/ref/migration-operations/)
- [Models](https://docs.djangoproject.com/en/2.0/ref/models/)
- [Request and response objects](https://docs.djangoproject.com/en/2.0/ref/request-response/)
- [SchemaEditor](https://docs.djangoproject.com/en/2.0/ref/schema-editor/)
- [Settings](https://docs.djangoproject.com/en/2.0/ref/settings/)
- [Signals](https://docs.djangoproject.com/en/2.0/ref/signals/)
- [Templates](https://docs.djangoproject.com/en/2.0/ref/templates/)
- [TemplateResponseandSimpleTemplateResponse](https://docs.djangoproject.com/en/2.0/ref/template-response/)
- [Unicode data](https://docs.djangoproject.com/en/2.0/ref/unicode/)
- [django.urlsutility functions](https://docs.djangoproject.com/en/2.0/ref/urlresolvers/)
- [django.urlsfunctions for use in URLconfs](https://docs.djangoproject.com/en/2.0/ref/urls/)
- [django.conf.urlsfunctions for use in URLconfs](https://docs.djangoproject.com/en/2.0/ref/urls/#module-django.conf.urls)
- [Django Utils](https://docs.djangoproject.com/en/2.0/ref/utils/)
- [Validators](https://docs.djangoproject.com/en/2.0/ref/validators/)
- [Built-in Views](https://docs.djangoproject.com/en/2.0/ref/views/)

<https://docs.djangoproject.com/en/2.0/ref>

## Management Command

class Command(BaseCommand):

def add_arguments(self, parser):

parser.add_argument(

'--customer',

action='store',

dest='customer_name',

default=None,

help='Customer name for which device dump has to be generated'

)

parser.add_argument(

'--only_upload_folder_name',

action='store',

dest='only_upload_folder_name',

default=None,

help="Set to true if generated files for a customer only need to be uploaded to drive"

)

def handle(self, *args, **options):

customer_name = options ['customer_name']

only_upload_folder_name = options ['only_upload_folder_name']
