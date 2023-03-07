# Requirements file

pip supports installing from [PyPI](http://pypi.python.org/pypi), version control, local projects, and directly from distribution files.

The most common scenario is to install from [PyPI](http://pypi.python.org/pypi) using [Requirement Specifiers](https://pip.pypa.io/en/stable/reference/pip_install/#requirement-specifiers) "Requirements files" are files containing a list of items to be installed using [pip install](https://pip.pypa.io/en/stable/reference/pip_install/#pip-install) like so:

pip install -r requirements.txt

Logically, a Requirements file is just a list of [pip install](https://pip.pypa.io/en/stable/reference/pip_install/#pip-install) arguments placed in a file. Note that you should not rely on the items in the file being installed by pip in any particular order.

Ex of a requirements.txt file

django-redis-cache==1.7.1

xlrd==1.1.0

hiredis==0.2.0

django-admin-rangefilter=0.3.1

## Poetry

Python dependency management and packaging made easy.

poetryis a tool to handle dependency installation as well as building and packaging of Python packages. It only needs one file to do all of that: the new, [standardized](https://www.python.org/dev/peps/pep-0518/) pyproject.toml

In other words, poetry usespyproject.tomlto replacesetup.py, requirements.txt, setup.cfg, MANIFEST.inand the newly addedPipfile

## Features

- It will try to enforce [semantic versioning](http://semver.org/) as the best practice in version naming.
- You can specify the readme, included and excluded files: no moreMANIFEST.in.poetrywill also use VCS ignore files (like.gitignore) to populate theexcludesection.
- Keywords (up to 5) can be specified and will act as tags on the packaging site.
- The dependencies sections support caret, tilde, wildcard, inequality and multiple requirements.
- You must specify the python versions for which your package is compatible.

poetrywill also detect if you are inside a virtualenv and install the packages accordingly. So, poetrycan be installed globally and used everywhere.

poetryalso comes with a full fledged dependency resolution library.

<https://github.com/python-poetry/poetry>

<https://python-poetry.org/docs>

## setup.py and mainfest.ini

<https://flask.palletsprojects.com/en/0.12.x/tutorial/packaging/#tutorial-packaging>
