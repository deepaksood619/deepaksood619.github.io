# Logging

Django uses Python's builtin logging module to perform system logging.

A Python logging configuration consists of four parts:

- Loggers

A logger is the entry point into the logging system. Each logger is a named bucket to which messages can be written for processing.

- DEBUG: Low level system information for debugging purposes
- INFO: General system information
- WARNING: Information describing a minor problem that has occurred.
- ERROR: Information describing a major problem that has occurred.
- CRITICAL: Information describing a critical problem that has occurred.

Each message that is written to the logger is aLog Record. Each log record also has alog levelindicating the severity of that specific message. A log record can also contain useful metadata that describes the event that is being logged. This can include details such as a stack trace or an error code.

When a message is given to the logger, the log level of the message is compared to the log level of the logger. If the log level of the message meets or exceeds the log level of the logger itself, the message will undergo further processing. If it doesn't, the message will be ignored.

Once a logger has determined that a message needs to be processed, it is passed to aHandler.

- Handlers

The handler is the engine that determines what happens to each message in a logger. It describes a particular logging behavior, such as writing a message to the screen, to a file, or to a network socket.

- Filters

A filter is used to provide additional control over which log records are passed from logger to handler.

- Formatters

Ultimately, a log record needs to be rendered as text. Formatters describe the exact format of that text.

"format": "[%(asctime)s] [%(levelname)s in %(module)s - %(funcName)s():%(lineno)s]: %(message)s",

## Logging database queries in django

```python
import logging

l = logging.getLogger('django.db.backends')

l.setLevel(logging.DEBUG)

l.addHandler(logging.StreamHandler())

## Setting Logging the right way in Python

import logging

handler = logging.StreamHandler()

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

handler.setFormatter(formatter)

log = logging.getLogger('kademlia')

log.addHandler(handler)

log.setLevel(logging.DEBUG)
```

## Logging in settings.py

```python
LOGGING = {

'version': 1,

'disable_existing_loggers': False,

'filters': {

'require_debug_false': {

'()': 'django.utils.log.RequireDebugFalse'

}

},

'handlers': {

'mail_admins': {

'level': 'ERROR',

'filters': ['require_debug_false'],

'class': 'django.utils.log.AdminEmailHandler',

'include_html': True,

},

'console': {

'class': 'logging.StreamHandler',

},

},

'loggers': {

'django.request': {

'handlers': ['console', 'mail_admins'],

'level': 'INFO',

'propagate': False,

},

'django': {

'handlers': ['console', 'mail_admins'],

'level': 'INFO',

},

}

}

## Turning on db hits logging for django queries

import logging

l = logging.getLogger('django.db.backends')

l.setLevel(logging.DEBUG)

l.addHandler(logging.StreamHandler())
```

## See Also > Python > Documentation > 16. Generic Operating System Services / Logging

## References

<https://docs.djangoproject.com/en/2.0/topics/logging>

<https://djangodeconstructed.com/2018/12/18/django-and-python-logging-in-plain-english>
