import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  entry: {
    bundle: path.resolve(__dirname, '../src/index.tsx'),
  },
  module: {
    rules: [
      {
        // Javascript loader
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        // Images Loader
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
        type: 'asset',
      },
      {
        // Font loader
        test: /\.(woff(2)?|ttf|otf|eot)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      // favicon: path.resolve(__dirname, '../src/assets/svg/.....'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash].css',
      chunkFilename: 'static/css/[name].[chunkhash].chunk.css',
    }),
    new WebpackManifestPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@features': path.resolve(__dirname, '../src/features/'),
      '@src': path.resolve(__dirname, '../src/'),
    },
  },
};
