export default {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
};
