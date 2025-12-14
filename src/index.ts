import { version } from '../package.json'
import first from './rules/first'
import noDefaultExport from './rules/no-default-export'
import noMutableExports from './rules/no-mutable-exports'
import noNamedDefault from './rules/no-named-default'
import type { ESLint } from 'eslint'

export const plugin = {
  meta: {
    name: 'eslint-plugin-ii',
    version,
  },
  // @keep-sorted
  rules: {
    'no-default-export': noDefaultExport,
    'no-mutable-exports': noMutableExports,
    'no-named-default': noNamedDefault,
    first,
  },
} satisfies ESLint.Plugin

export default plugin
