#!/bin/sh

if $TRAVIS_BRANCH == 'master'; then
  echo "setting production"
  export NODE_ENV="production"
else
  echo "setting staging"
  export NODE_ENV="staging"
fi
