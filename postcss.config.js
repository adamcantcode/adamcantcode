const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import')
const nesting = require('tailwindcss/nesting')
const autoPrefixer = require('autoprefixer')

module.exports = {
  plugins: [
    'postcss-preset-env',
    postcssImport,
    nesting,
    autoPrefixer,
    tailwindcss
  ],
};