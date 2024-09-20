module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['es5', 'react', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'no-console': 'error',

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'method',
        format: ['camelCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null,
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'import',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        children: true,
        spacing: {
          objectLiterals: 'never',
        },
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeSelfClosing: 'never',
        closingSlash: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'off',
    'react/no-unknown-property': 'error',
    'react/no-unused-state': 'error',
    'react/require-optimization': ['error'],
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: [ '*.js', '*.jsx' ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [
        '*.config.ts',
        '*.config.js',
        'deploy/tools/**',
        'middleware.ts',
      ],
      rules: {
        // for configs allow to consume env variables from process.env directly
        'no-restricted-properties': [ 0 ],
      },
    },
  ],
};
