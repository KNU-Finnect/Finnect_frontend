/** @type {import("prettier").Options} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  vueIndentScriptAndStyle: false,

  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',

    '^(@/common)(.*)$',
    '^(@/components)(.*)$',
    '^(@/pages)(.*)$',

    '^(@/hooks)(.*)$',
    '^(@/services)(.*)$',

    '^(@/assets)(.*)$',
    '^(@/constants)(.*)$',
    '^(@/config)(.*)$',
    '^(@/utils)(.*)$',
    '^(@/styles)(.*)$',

    '^(.*)/(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
};
