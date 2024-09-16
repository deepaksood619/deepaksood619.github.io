# Authentication / Authorization

https://docs.djangoproject.com/en/1.11/topics/auth/customizing

[Authentication backends](https://docs.djangoproject.com/en/1.11/topics/auth/customizing/#authentication-backends) provide an extensible system for when a username and password stored with the user model need to be authenticated against a different service than Django's default.

You can give your models [custom permissions](https://docs.djangoproject.com/en/1.11/topics/auth/customizing/#custom-permissions) that can be checked through Django's authorization system.

You can [extend](https://docs.djangoproject.com/en/1.11/topics/auth/customizing/#extending-user) the default **User** model, or [substitute](https://docs.djangoproject.com/en/1.11/topics/auth/customizing/#auth-custom-user) a completely customized model.

## Other Authentication Sources

For example, your company may already have an LDAP (Lightweight Directory Access Protocol) setup that stores a username and password for every employee. It'd be a hassle for both the network administrator and the users themselves if users had separate accounts in LDAP and the Django-based applications.

## Specifying Authentication Backend

Django maintains a list of "authentication backend" that is checks for authentication. When someone calls django.contrib.auth.authenticate() - django tries authenticating across all of its authentication backends

## Custom User Model

`AUTH_USER_MODEL = 'myapp.MyUser'`

## Authentication Libraries

- [GitHub - jazzband/django-rest-knox: Authentication Module for django rest auth](https://github.com/James1345/django-rest-knox)
- [django-allauth](https://docs.allauth.org/en/latest/)
   	- [SAML - django-allauth](https://docs.allauth.org/en/latest/socialaccount/providers/saml.html)
   	- [python - Enable oauth login with django-allauth but a custom provider - Stack Overflow](https://stackoverflow.com/questions/37690418/enable-oauth-login-with-django-allauth-but-a-custom-provider)
   	- [Setting up a Django OAuth2 server & client | Raphaël Yancey](https://raphaelyancey.fr/en/2018/05/28/setting-up-django-oauth2-server-client.html)
   	- [Google - django-allauth](https://docs.allauth.org/en/latest/socialaccount/providers/google.html)
- [GitHub - jazzband/django-oauth-toolkit: OAuth2 goodies for the Djangonauts!](https://github.com/jazzband/django-oauth-toolkit)
- django-rest-framework-jwt
- [Django REST Framework Authentication | TestDriven.io](https://testdriven.io/blog/django-rest-auth/)
