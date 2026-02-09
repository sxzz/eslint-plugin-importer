import { sxzz } from '@sxzz/eslint-config'

export default sxzz(
  {
    baseline: {
      ignoreFeatures: ['top-level-await'],
    },
  },
  {
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    ignores: ['eslint-typegen.d.ts'],
  },
)
