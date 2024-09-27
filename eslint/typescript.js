export default {
  extends: [
    'plugin:@typescript-eslint/recommended',
    // TODO: We need to add this rule to add extra typescript type checking.
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-explicit-any': 'error',
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: ['signature', 'field', 'constructor', 'constructor'],
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};
