const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var path = require('path');

const localDomain = 'https://adamcantcode.local/';

const config = {
  name: 'theme-config',
  entry: './src/js/theme.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),

    new OptimizeCSSAssetsPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, './src/js/theme.js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './src/css/main.css'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';

    config.plugins = [
      new MiniCssExtractPlugin({
        filename: 'css/app.css',
      }),

      new BrowserSyncPlugin({
        files: ['./**/*.php', './**/*.css'],
        proxy: localDomain,
        browser: 'brave browser',
      }),
    ];
  }

  return [config];
};

module.exports.parallelism = 1;
