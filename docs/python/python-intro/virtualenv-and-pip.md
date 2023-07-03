# virtualenv & pip

## VirtualEnv

virtualenv is a tool to create isolated Python environments. We can create a new Python environment to run a Python/Django/whatever app and install all package dependencies into the virtualenv without affecting your system's site-packages

```bash
# Pip install
 sudo easy_install pip #pip2.7
 brew postinstall python3

# To create virtual env
 python3 -m venv env
 source env/bin/activate
 deactivate

# Setting up 2.7 environment
 pip install virtualenv (for python 2.7)
 virtualenv -p /usr/bin/python2.7 my_project (Creating a 2.7 venv)
 source my_project/bin/activate
 (my_project) $ pip install django==1.9.2

# Deleting environment variables
    unset <env_var_name>

# To activate virtual env
 source tutorial-env/bin/activate

# To deactivate virtual env
deactivate
```

## Managing packages with pip

We can install, upgrade, and remove packages using a program called pip. By default pip will install packages from the Python Package Index, <https://pypi.python.org/pypi>>

[**https://prepml.com/blog/making-python-package-scratch/**](https://prepml.com/blog/making-python-package-scratch/)

### pip subcommands

```bash
1. search
2. install
    (tutorial-env) $ pip install novas
    (tutorial-env) $ pip install requests==2.6.0 (install specific version)
    (tutorial-env) $ pip install --upgrade requests
3. uninstall
    (tutorial-env) $ pip uninstall requests
4. freeze
    pip freeze will produce a similar list of the installed packages, but the output uses the format that pip install expects. A common convention is to put this list in a requirements.txt file:
    (tutorial-env) $ pip freeze > requirements.txt
(tutorial-env) $ cat requirements.txt
novas==3.1.1.3
numpy==1.9.2
requests==2.7.0
5. show
    pip show will display information about a particular package
    (tutorial-env) $ pip show requests
6. list
    pip list will display all of the packages installed in the virtual environment
    pip list
    pip list --outdated #show all outdated pip packages in requirements.txt

    pip install pur
    pur -r requirements.txt

    https://pypi.org/project/pipreqs/
        Generate pip requirements.txt file based on imports of any project

    https://caniusepython3.com
7. updating
    pip3.6 install -U jupyter
```

### Install all dependencies using requirements.txt file

`(tutorial-env) $ pip install -r requirements.txt`

## Python Virtual Environments

### virtualenv

It works by installing a bunch of files in a directory (eg:env/), and then modifying the PATH environment variable to prefix it with a custom bin directory (eg:env/bin/). An exact copy of the python or python3 binary is placed in this directory, but Python is programmed to look for libraries relative to its path first, in the environment directory. It's not part of Python's standard library, but is officially blessed by the PyPA (Python Packaging Authority). Once activated, you can install packages in the virtual environment using pip.

```bash
virtualenv my_project
source my_project/bin/activate
```

### pyenv

[**pyenv**](https://github.com/yyuu/pyenv) is used to isolate Python versions. For example, you may want to test your code against Python 2.6, 2.7, 3.3, 3.4 and 3.5, so you'll need a way to switch between them. Once activated, it prefixes the PATH environment variable with `~/.pyenv/shims`, where there are special files matching the Python commands (python, pip). These are not copies of the Python-shipped commands; they are special scripts that decide on the fly which version of Python to run based on the PYENV_VERSION environment variable, or the.python-version file, or the `~/.pyenv/versionfile.py` env also makes the process of downloading and installing multiple Python versions easier, using the command pyenv install.

### pyenv-virtualenv

[**pyenv-virtualenv**](https://github.com/yyuu/pyenv-virtualenv) is a plugin for pyenv by the same author as pyenv, to allow you to use pyenv and virtualenv at the same time conveniently. However, if you're using Python 3.3 or later, pyenv-virtualenv will try to run python -m venv if it is available, instead of virtualenv. You can use virtualenv and pyenv together without pyenv-virtualenv, if you don't want the convenience features.

### virtualenvwrapper

[**virtualenvwrapper**](https://pypi.python.org/pypi/virtualenvwrapper) is a set of extensions tovirtualenv(see [docs](http://virtualenvwrapper.readthedocs.io/en/latest/)). It gives you commands like mkvirtualenv, ls sitepackages, and especially work on for switching between different virtualenv directories. This tool is especially useful if you want multiple virtualenv directories.

### pyenv-virtualenvwrapper

[**pyenv-virtualenvwrapper**](https://github.com/yyuu/pyenv-virtualenvwrapper) is a plugin for pyenv by the same author as pyenv, to conveniently integrate virtualenv wrapper into pyenv.

### pipenv

[**pipenv**](https://pypi.python.org/pypi/pipenv), by Kenneth Reitz (the author of requests), is the newest project in this list. It aims to combine Pipfile, pip and virtualenv into one command on the command-line. The virtualenv directory typically gets placed in~/.local/share/virtualenvs/XXX, with XXX being a hash of the path of the project directory. This is different from virtualenv, where the directory is typically in the current working directory.

### pyenv

pyvenv is a script shipped with Python 3 but [deprecated in Python 3.6](https://docs.python.org/dev/whatsnew/3.6.html#id8) as it had problems (not to mention the confusing name). In Python 3.6+, the exact equivalent ispython3 -m venv

### venv

[**venv**](https://docs.python.org/3/library/venv.html) is a package shipped with Python 3, which you can run using `python3 -m venv` (although for some reason some distros separate it out into a separate distro package, such as python3-venv on Ubuntu/Debian). It serves a similar purpose to virtualenv, and works in a very similar way, but it doesn't need to copy Python binaries around (except on Windows). Use this if you don't need to support Python 2. At the time of writing, the Python community seems to be happy with virtualenv and I haven't heard much talk of venv

## anaconda / conda

```bash
conda deactivate
conda update --all
conda install --file requirements.txt
conda install --use-local psycopg2-binary
```

## References

<https://stackoverflow.com/questions/41573587/what-is-the-difference-between-venv-pyvenv-pyenv-virtualenv-virtualenvwrappe>
