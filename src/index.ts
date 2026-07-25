import pkg from '../package.json' with { type: 'json' }
import consistentTypeSpecifierStyle from './rules/consistent-type-specifier-style.ts'
import first from './rules/first.ts'
import newlineAfterImport from './rules/newline-after-import.ts'
import noDefaultExport from './rules/no-default-export.ts'
import noDuplicatesSpecifier from './rules/no-duplicates-specifier.ts'
import noDuplicates from './rules/no-duplicates.ts'
import noMutableExports from './rules/no-mutable-exports.ts'
import noNamedDefault from './rules/no-named-default.ts'
import type { ESLint } from 'eslint'

export const plugin = {
  meta: {
    name: 'eslint-plugin-importer',
    version: pkg.version,
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
