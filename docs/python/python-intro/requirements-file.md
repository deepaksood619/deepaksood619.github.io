# Requirements file

pip supports installing from [PyPI](http://pypi.python.org/pypi), version control, local projects, and directly from distribution files.

The most common scenario is to install from [PyPI](http://pypi.python.org/pypi) using [Requirement Specifiers](https://pip.pypa.io/en/stable/reference/pip_install/#requirement-specifiers) "Requirements files" are files containing a list of items to be installed using [pip install](https://pip.pypa.io/en/stable/reference/pip_install/#pip-install) like so:

`pip install -r requirements.txt`

Logically, a Requirements file is just a list of [pip install](https://pip.pypa.io/en/stable/reference/pip_install/#pip-install) arguments placed in a file. Note that you should not rely on the items in the file being installed by pip in any particular order.

Ex of a requirements.txt file

```txt
django-redis-cache==1.7.1
xlrd==1.1.0
hiredis==0.2.0
django-admin-rangefilter=0.3.1
```

## Poetry

Python dependency management and packaging made easy.

poetry is a tool to handle dependency installation as well as building and packaging of Python packages. It only needs one file to do all of that: the new, [standardized](https://www.python.org/dev/peps/pep-0518/) `pyproject.toml`

In other words, poetry uses `pyproject.toml` to replace setup.py, requirements.txt, setup.cfg, `MANIFEST.in` and the newly added Pip file

### Features

- It will try to enforce [semantic versioning](http://semver.org/) as the best practice in version naming.
- You can specify the readme, included and excluded files: no more MANIFEST.in. poetry will also use VCS ignore files (like `.gitignore`) to populate the exclude section.
- Keywords (up to 5) can be specified and will act as tags on the packaging site.
- The dependencies sections support caret, tilde, wildcard, inequality and multiple requirements.
- You must specify the python versions for which your package is compatible.

poetry will also detect if you are inside a `virtual env` and install the packages accordingly. So, poetry can be installed globally and used everywhere.

poetry also comes with a full fledged dependency resolution library.

### Commands

```bash
poetry config virtualenvs.in-project true

poetry install

# running test cases
poetry shell
pytest

# to see all test cases
pytest -v
```

https://github.com/python-poetry/poetry

https://python-poetry.org/docs

## setup.py and mainfest.ini

https://flask.palletsprojects.com/en/0.12.x/tutorial/packaging/#tutorial-packaging

## Upgrade requirements.txt

```bash
pip install pur
pur -r requirements.txt
```

## Others

[virtualenv-and-pip](python/python-intro/virtualenv-and-pip.md)

### UV

- 🚀 A single tool to replace `pip`, `pip-tools`, `pipx`, `poetry`, `pyenv`, `twine`, `virtualenv`, and more.
- ⚡️ [10-100x faster](https://github.com/astral-sh/uv/blob/main/BENCHMARKS.md) than `pip`.
- 🐍 [Installs and manages](https://github.com/astral-sh/uv#python-management) Python versions.
- 🛠️ [Runs and installs](https://github.com/astral-sh/uv#tool-management) Python applications.
- ❇️ [Runs single-file scripts](https://github.com/astral-sh/uv#script-support), with support for [inline dependency metadata](https://docs.astral.sh/uv/guides/scripts#declaring-script-dependencies).
- 🗂️ Provides [comprehensive project management](https://github.com/astral-sh/uv#project-management), with a [universal lockfile](https://docs.astral.sh/uv/concepts/projects#project-lockfile).
- 🔩 Includes a [pip-compatible interface](https://github.com/astral-sh/uv#a-pip-compatible-interface) for a performance boost with a familiar CLI.
- 🏢 Supports Cargo-style [workspaces](https://docs.astral.sh/uv/concepts/workspaces) for scalable projects.
- 💾 Disk-space efficient, with a [global cache](https://docs.astral.sh/uv/concepts/cache) for dependency deduplication.
- ⏬ Installable without Rust or Python via `curl` or `pip`.
- 🖥️ Supports macOS, Linux, and Windows.
- [GitHub - astral-sh/uv: An extremely fast Python package and project manager, written in Rust.](https://github.com/astral-sh/uv)
- [Get started with uv.ipynb - Colab](https://colab.research.google.com/drive/1o0FJVhYaXAATe6ctgV2cfINhTC_JwxXL?usp=sharing)
