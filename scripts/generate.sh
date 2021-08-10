#!/bin/sh

YAML_URL=$1

echo Generating NodeJS client for spec $YAML_URL...

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i $YAML_URL \
    -g javascript \
    -o /local
