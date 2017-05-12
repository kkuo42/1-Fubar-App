#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]
  export NODE_ENV=production
else [[ $TRAVIS_BRANCH == 'staging' ]]
  export NODE_ENV=staging
fi
