Currently trialing different tools sets.

- OpenApiTools - https://github.com/OpenAPITools/openapi-generator#16---docker
  - typescript-node (0 errors, but missing definitions for createContainer)
- Swagger-Codegen - https://github.com/swagger-api/swagger-codegen
  - typescript-node (2 errors)
  - **javascript (current)**

# Prereqs

```
yarn install
```

# Generate from OpenAPI spec

```
yarn generate
```

# (Typescript only) Build JS from TS

```
yarn build
```