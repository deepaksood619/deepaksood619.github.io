# Others

## .gitkeep

create a file .gitkeep to commit that folder structure to git

## Git LFS

Git Large File System handles all the files that are greater than 100MB (current limit for a file in git)

git lfs track "*.psd"

Add .gitattributes files

git add .gitattributes

git add file.psd
git commit -m "Add design file"
git push origin master

<https://git-lfs.github.com>

## Git Hooks

Git hooks are scripts that Git executes before or after events such as:commit, push, andreceive. Git hooks are a built-in feature - no need to download anything. Git hooks are run locally.

These hook scripts are only limited by a developer's imagination. Some example hook scripts include:

- pre-commit: Check the commit message for spelling errors.
- pre-receive: Enforce project coding standards.
- post-commit: Email/SMS team members of a new commit.
- post-receive: Push the code to production.

Every Git repository has a.git/hooksfolder with a script for each hook you can bind to. You're free to change or update these scripts as necessary, and Git will execute them when those events occur.

Here's a full list of hooks you can attach scripts to:

- [applypatch-msg](https://github.com/git/git/blob/master/templates/hooks--applypatch-msg.sample)
- [pre-applypatch](https://github.com/git/git/blob/master/templates/hooks--pre-applypatch.sample)
- [post-applypatch](https://github.com/git/git/blob/master/Documentation/githooks.txt#L74)
- [pre-commit](https://github.com/git/git/blob/master/templates/hooks--pre-commit.sample)
- [prepare-commit-msg](https://github.com/git/git/blob/master/templates/hooks--prepare-commit-msg.sample)
- [commit-msg](https://github.com/git/git/blob/master/templates/hooks--commit-msg.sample)
- [post-commit](https://github.com/git/git/blob/master/Documentation/githooks.txt#L142)
- [pre-rebase](https://github.com/git/git/blob/master/templates/hooks--pre-rebase.sample)
- [post-checkout](https://github.com/git/git/blob/master/Documentation/githooks.txt#L160)
- [post-merge](https://github.com/git/git/blob/master/Documentation/githooks.txt#L178)
- [pre-receive](https://github.com/git/git/blob/master/Documentation/githooks.txt#L221)
- [update](https://github.com/git/git/blob/master/templates/hooks--update.sample)
- [post-receive](https://github.com/git/git/blob/master/Documentation/githooks.txt#L295)
- [post-update](https://github.com/git/git/blob/master/templates/hooks--post-update.sample)
- [pre-auto-gc](https://github.com/git/git/blob/master/Documentation/githooks.txt#L387)
- [post-rewrite](https://github.com/git/git/blob/master/Documentation/githooks.txt#L394)
- [pre-push](https://github.com/git/git/blob/master/Documentation/githooks.txt#L192)

## Projects

- precommit

[**https://githooks.com/**](https://githooks.com/)

## OpenGrok

OpenGrok is a fast and usable source code search and cross reference engine. It helps you search, cross-reference and navigate your source tree. It understands various program file formats and history from many Source Code Management systems. In other words it lets you *grok*(profoundly understand) source code and is developed in the open, hence the name OpenGrok. It is written in Java.

<https://oracle.github.io/opengrok>

## Multi-Repo / MonoRepo

A monorepo is a unified codebase containing code for multiple projects that share underlying dependencies, data models, functionality, tooling and processes

<https://www.freecodecamp.org/news/monorepo-essentials>

[Python Monorepos: What, Why and How](https://www.youtube.com/watch?v=1qurVKSYVqY)

## Games

<https://github.com/git-game/git-game>

<https://github.com/git-game/git-game-v2>

<https://github.com/Gazler/githug>

<https://github.com/deepaksood619/GitGames>

## .gitignore

<https://github.com/github/gitignore>

## Git Repo

<https://code.google.com/archive/p/git-repo>

## Gerrit

Gerrit provides web based code review and repository management for the [Git](http://git-scm.com/) version control system.

## Hub

A command-line tool that makes git easier to use with GitHub.

<https://hub.github.com>

## Perforce

<https://www.perforce.com>

## GUI Clients

- gitup
- github desktop
- gitkraken
- sourcetree

## Github Marketplace

- <https://github.com/marketplace>

## Language Clients

- Python - <https://github.com/gitpython-developers/GitPython>

## Gitlab

<https://docs.gitlab.com/ee/user/markdown.html#wiki-specific-markdown>

## Others

[Why Google and Meta Put Billion Lines of Code In 1 Repository? - YouTube](https://www.youtube.com/watch?v=x3cANGNPyx0)
