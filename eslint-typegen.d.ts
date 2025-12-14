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
   * Ensure all imports appear before other statements.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/first.test.ts
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Forbid default exports.
   * @see https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/no-default-export.test.ts
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
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
// ----- import/first -----
type ImportFirst = []|[("absolute-first" | "disable-absolute-first")]