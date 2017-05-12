#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]
  export NODE_ENV=production
else
  export NODE_ENV=staging
fi
