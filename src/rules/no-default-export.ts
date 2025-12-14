import { createEslintRule, getValue, sourceType } from '../utils.js'

export const RULE_NAME = 'no-default-export'
export type Options = []
export type MessageId = 'preferNamed' | 'noAliasDefault'

export default createEslintRule<Options, MessageId>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Forbid default exports.',
    },
    schema: [],
    messages: {
      preferNamed: 'Prefer named exports.',
      noAliasDefault:
        'Do not alias `{{local}}` as `default`. Just export `{{local}}` itself instead.',
    },
  },
  defaultOptions: [],
  create(context) {
    // ignore non-modules
    if (sourceType(context) !== 'module') {
      return {}
    }

    const { sourceCode } = context

    return {
      ExportDefaultDeclaration(node) {
        const { loc } = sourceCode.getFirstTokens(node)[1] || {}
        context.report({
          node,
          messageId: 'preferNamed',
          loc,
        })
      },

      ExportNamedDeclaration(node) {
        for (const specifier of node.specifiers.filter(
          (specifier) => getValue(specifier.exported) === 'default',
        )) {
          const { loc } = sourceCode.getFirstTokens(node)[1] || {}
          // @ts-expect-error - experimental parser type
          if (specifier.type === 'ExportDefaultSpecifier') {
            context.report({
              node,
              messageId: 'preferNamed',
              loc,
            })
          } else if (specifier.type === 'ExportSpecifier') {
            context.report({
              node,
              messageId: 'noAliasDefault',
              data: {
                local: getValue(specifier.local),
              },
              loc,
            })
          }
        }
      },
    }
  },
})
