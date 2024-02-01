import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          },
        },
    },
  ],
  documents: "src/graphql/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        defaultScalarType: "unknown",
        skipTypename: true,
        documentMode: "string",
      },
    },
  },
};

export default config;
