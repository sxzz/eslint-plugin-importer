import { lib } from 'tsdown-preset-sxzz'

export default lib(
  {},
  {
    dts: { tsgo: true },
    deps: {
      neverBundle: [
        // removed after tree-shaking
        /@typescript-eslint\//,
        'typescript',
      ],
      onlyImport: ['eslint'],
    },
    treeshake: {
      moduleSideEffects: false,
    },
  },
)
