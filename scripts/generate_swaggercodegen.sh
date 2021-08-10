#!/bin/sh

YAML_URL=$1

echo Generating NodeJS client for spec $YAML_URL...

docker run --rm -v "${PWD}:/local" swaggerapi/swagger-codegen-cli generate \
    -i $YAML_URL \
    -l javascript \
    -o /local

    # -l typescript-node \