import { CodegenConfig } from "@graphql-codegen/cli";

const envConfig: string[] = [
  process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL,
] as string[];

const config: CodegenConfig = {
  overwrite: true,
  schema: envConfig,
  documents: "**/*.gql",
  generates: {
    "gql/auth.generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        preResolveTypes: {
          field: true,
        },
      },
    },
  },
  config: {
    scalars: {
      Date: "string",
      DateTime: "string",
    },
    enumsAsTypes: true,
  },
};

export default config;
