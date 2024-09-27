export default{
  rules: {
    'no-shadow': 'off',
    'no-unused-vars': ['error', { vars: 'local', argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
