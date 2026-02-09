import { lib } from 'tsdown-preset-sxzz'

export default lib(
  {},
  {
    dts: { tsgo: true },
    external: [
      // removed after tree-shaking
      /@typescript-eslint\//,
      'typescript',
    ],
    treeshake: {
      moduleSideEffects: false,
    },
  },
)
