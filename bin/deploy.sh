#!/usr/bin/env bash

# remove old files
git rm -rf dist

# webpack
yarn run build

# add untracked files (new)
git add $(git ls-files -o --exclude-standard)
git add index.html

git commit -m 'Updates'
git push
