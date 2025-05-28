module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  root: true,
  env: {
    browser: true,
    es2019: true,
  },
  globals: {
    window: 'readonly',
  },
  rules: {
    'consistent-return': 'off',
    'max-len': [
      2,
      {
        code: 125,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    'import/prefer-default-export': 'off', // юзаем именной импорт
    'import/no-extraneous-dependencies': 'off', // юзаем именной импорт
    'react/prop-types': 'off', // юзаем типы через FC
    '@typescript-eslint/comma-dangle': 'off', // противоречит некоторым удобным правилам притера
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': { descriptionFormat: 'TODO|OK' } },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    "@typescript-eslint/no-explicit-any": "warn",
    "import/no-unresolved": 'off',
    'react/button-has-type': 'off', // требует "static string or a trivial ternary expression"
    'react/jsx-props-no-spreading': 'off', // т.к. удобнее юзать spread вперемешку с переменными
    'react/require-default-props': 'off', // т.к. непонятна логика, что надо убирать необязательный props, в случае если мы ставим default значение его
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react-hooks/exhaustive-deps': 'off', // TODO: FIX IT ~85
  },
};
