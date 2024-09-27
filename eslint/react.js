export default {
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-fragments': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/no-array-index-key': 'error',
    'react/jsx-boolean-value': 'error',
  },
};
