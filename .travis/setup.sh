#!/bin/sh

if [ $TRAVIS_BRANCH == 'master' ]; then
  export NODE_ENV=production
else
  export NODE_ENV=staging
fi
