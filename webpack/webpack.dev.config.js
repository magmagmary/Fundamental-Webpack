import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.config.js';
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default merge(common, {
  mode: 'development',
  bail: true,
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'static/js/bundle.js',
    assetModuleFilename: 'static/assets/[name].[ext][query]',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
  stats: 'minimal',
  module: {
    rules: [
      {
        // CSS and SCSS Loader
        test: /\.s?css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './environments/.env.dev',
    }),
    new webpack.DefinePlugin({
      'process.env.TARGET_ENV': JSON.stringify('development'),
    }),
  ],
  cache: true,
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    open: true,
    hot: true,
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
});
