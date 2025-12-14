import {
  $,
  type InvalidTestCase,
  type ValidTestCase,
} from 'eslint-vitest-rule-tester'
import { expect } from 'vitest'
import { run } from './_test'
import rule, { RULE_NAME } from './first'

const valids: ValidTestCase[] = [
  {
    description: 'basic',
    code: $`
      import fs from 'fs'
      console.log(fs)
    `,
  },
  {
    description: 'with directive',
    code: $`
      'use server'
      import path from 'path'
      import { myFunc } from './myModule.js'
    `,
  },
]

// Check snapshot for fixed code
const invalid: InvalidTestCase[] = [
  {
    description: 'export before import',
    code: $`
      export {}
      import fs from 'fs'
    `,
    output: (o) =>
      expect(o).toMatchInlineSnapshot(`
      "import fs from 'fs'
      export {}"
    `),
  },
]

run({
  name: RULE_NAME,
  rule,

  valid: valids,
  invalid: invalid.map(
    (i): InvalidTestCase =>
      typeof i === 'string'
        ? { code: i, output: (o) => expect(o).toMatchSnapshot() }
        : i,
  ),
})
