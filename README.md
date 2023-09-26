# Updating Strapi content types

Switch from production to development to make changes to content types. When you are done, regenerate the OpenAPI spec ("full_documentation.json") on the Strapi dashboard. Copy the generated file from the backend repo and replace the existing "full_documentation.json" file in the front end.

Then run the following command:
```
npx openapi --input ./full_documentation.json --output ./api --client fetch --name MMKClient --useOptions
```
