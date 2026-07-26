/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/first.md
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/newline-after-import.md
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/no-default-export.md
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/no-duplicates.md
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Fix duplication in imports
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/import-dedupe.md
   */
  'import/no-duplicates-specifier'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/tree/master/docs/rules/no-named-default.md
   */
  'import/no-named-default'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- import/consistent-type-specifier-style -----
type ImportConsistentTypeSpecifierStyle = []|[("prefer-top-level" | "prefer-inline")]
// ----- import/first -----
type ImportFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/newline-after-import -----
type ImportNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import/no-duplicates -----
type ImportNoDuplicates = []|[{
  considerQueryString?: boolean
  preferInline?: boolean
}]