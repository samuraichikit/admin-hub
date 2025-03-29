import { GRAPHQL_URI } from '@/common/constants'
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['src/**/!(*.generated).{ts,tsx}'],
  generates: {
    'src/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: './services/types.ts',
        extension: '.generated.tsx',
      },
    },
    'src/services/types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: GRAPHQL_URI,
}

export default config
