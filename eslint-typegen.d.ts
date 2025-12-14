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
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/consistent-type-specifier-style.test.ts
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/first.test.ts
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Fix duplication in imports
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/import-dedupe.test.ts
   */
  'import/import-dedupe'?: Linter.RuleEntry<[]>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/newline-after-import.test.ts
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid default exports.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/no-default-export.test.ts
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/no-duplicates.test.ts
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/no-mutable-exports.test.ts
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/no-named-default.test.ts
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
  "prefer-inline"?: boolean
}]