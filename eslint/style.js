export default {
  rules: {
    'max-nested-callbacks': 'error',
    'no-lonely-if': 'error',
    'no-restricted-syntax': 'error',
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': 'error',
    'spaced-comment': 'error',
    'padding-line-between-statements': [
      'error',
      // newline after variables
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },

      // newline before return
      { blankLine: 'always', prev: '*', next: 'return' },

      // newline before export
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'max-len': [
      'error',
      120,
      {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
