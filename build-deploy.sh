#!/bin/bash
echo "starting $(date)"
npm run build
echo "step: build completed $(date)"
git checkout -b gh-pages
git add build -f
echo "step: build added $(date)"
git commit -m "added gh-pages"
echo "step: git commit completed $(date)"
git push https://deepaksood619:github_pat_token_abcde@github.com/deepaksood619/deepaksood619.github.io.git `git subtree split --prefix build gh-pages`:gh-pages --force
echo "pushed completed $(date)"
