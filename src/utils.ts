import type { TSESLint, TSESTree } from '@typescript-eslint/utils'
import type {
  RuleListener,
  RuleWithMeta,
  RuleWithMetaAndName,
} from '@typescript-eslint/utils/eslint-utils'
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint'
import type { Rule } from 'eslint'

// @keep-sorted
const hasDocs = new Set(['prefer-string-function'])

const blobUrl = 'https://github.com/sxzz/eslint-plugin-ii/blob/main/src/rules/'

export interface RuleModule<T extends readonly unknown[]>
  extends Rule.RuleModule {
  defaultOptions: T
}

/**
 * Creates reusable function to create rules with default options and docs URLs.
 *
 * @param urlCreator Creates a documentation URL for a given rule name.
 * @returns Function to create a rule with the docs URL format.
 */
function RuleCreator(urlCreator: (name: string) => string) {
  // This function will get much easier to call when this is merged https://github.com/Microsoft/TypeScript/pull/26349
  // TODO - when the above PR lands; add type checking for the context.report `data` property
  return function createNamedRule<
    TOptions extends readonly unknown[],
    TMessageIds extends string,
  >({
    name,
    meta,
    ...rule
  }: Readonly<
    RuleWithMetaAndName<TOptions, TMessageIds>
  >): RuleModule<TOptions> {
    return createRule<TOptions, TMessageIds>({
      meta: {
        ...meta,
        docs: {
          ...meta.docs,
          url: urlCreator(name),
        },
      },
      ...rule,
    })
  }
}

/**
 * Creates a well-typed TSESLint custom ESLint rule without a docs URL.
 *
 * @returns Well-typed TSESLint custom ESLint rule.
 * @remarks It is generally better to provide a docs URL function to RuleCreator.
 */
function createRule<
  TOptions extends readonly unknown[],
  TMessageIds extends string,
>({
  create,
  defaultOptions,
  meta,
}: Readonly<RuleWithMeta<TOptions, TMessageIds>>): RuleModule<TOptions> {
  return {
    create: ((
      context: Readonly<RuleContext<TMessageIds, TOptions>>,
    ): RuleListener => {
      const optionsWithDefault = context.options.map((options, index) => {
        return {
          // eslint-disable-next-line unicorn/no-useless-fallback-in-spread
          ...(defaultOptions[index] || {}),
          // eslint-disable-next-line unicorn/no-useless-fallback-in-spread
          ...(options || {}),
        }
      }) as unknown as TOptions
      return create(context, optionsWithDefault)
    }) as any,
    defaultOptions,
    meta: meta as any,
  }
}

export const createEslintRule = RuleCreator((ruleName) =>
  hasDocs.has(ruleName)
    ? `${blobUrl}${ruleName}.md`
    : `${blobUrl}${ruleName}.test.ts`,
) as any as <TOptions extends readonly unknown[], TMessageIds extends string>({
  name,
  meta,
  ...rule
}: Readonly<RuleWithMetaAndName<TOptions, TMessageIds>>) => RuleModule<TOptions>

const warned = new Set<string>()

export function warnOnce(message: string): void {
  if (warned.has(message)) return
  warned.add(message)
  console.warn(message)
}

export function sourceType<
  MessageIds extends string,
  Options extends readonly unknown[],
>(context: TSESLint.RuleContext<MessageIds, Options>) {
  if ('sourceType' in context.parserOptions) {
    return context.parserOptions.sourceType
  }
  if ('languageOptions' in context && context.languageOptions) {
    return context.languageOptions.sourceType
  }
}

export function getValue(node: TSESTree.Identifier | TSESTree.StringLiteral) {
  switch (node.type) {
    case 'Identifier': {
      return node.name
    }
    case 'Literal': {
      return node.value
    }
    default: {
      throw new Error(`Unsupported node type: ${(node as TSESTree.Node).type}`)
    }
  }
}
