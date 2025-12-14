import { version } from '../package.json'
import consistentTypeSpecifierStyle from './rules/consistent-type-specifier-style'
import first from './rules/first'
import newlineAfterImport from './rules/newline-after-import'
import noDefaultExport from './rules/no-default-export'
import noDuplicates from './rules/no-duplicates'
import noDuplicatesSpecifier from './rules/no-duplicates-specifier'
import noMutableExports from './rules/no-mutable-exports'
import noNamedDefault from './rules/no-named-default'
import type { ESLint } from 'eslint'

export const plugin = {
  meta: {
    name: 'eslint-plugin-importer',
    version,
  },
  // @keep-sorted
  rules: {
    'consistent-type-specifier-style': consistentTypeSpecifierStyle,
    'newline-after-import': newlineAfterImport,
    'no-default-export': noDefaultExport,
    'no-duplicates-specifier': noDuplicatesSpecifier,
    'no-duplicates': noDuplicates,
    'no-mutable-exports': noMutableExports,
    'no-named-default': noNamedDefault,
    first,
  },
} satisfies ESLint.Plugin

export default plugin
