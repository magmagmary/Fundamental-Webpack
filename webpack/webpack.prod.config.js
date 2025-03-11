import path from "node:path";
import CompressionPlugin from "compression-webpack-plugin";
import Dotenv from "dotenv-webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import { merge } from "webpack-merge";
import { chunks } from "./chunks.js";
import common from "./webpack.common.config.js";
import url from "node:url";
import { GenerateSW } from "workbox-webpack-plugin";
import WebpackPwaManifest from "webpack-pwa-manifest";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const config = merge(common, {
  mode: "production",
  output: {
    path: path.resolve("build"),
    filename: "static/js/[name].[chunkhash].js",
    chunkFilename: "static/js/[name].[chunkhash].chunk.js",
    assetModuleFilename: "static/assets/[name].[hash][ext][query]",
    clean: true,
    publicPath: "/Fundamental-Webpack/",
  },
  stats: "errors-warnings",
  module: {
    rules: [
      {
        // CSS and SCSS Loader
        test: /\.s?css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./environments/.env.prd",
    }),
    new webpack.DefinePlugin({
      "process.env.TARGET_ENV": JSON.stringify("production"),
    }),
    new CompressionPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new WebpackPwaManifest({
      short_name: "MagMagMary",
      name: "React PWA with Webpack",
      start_url: "/Fundamental-Webpack/",
      scope: "/Fundamental-Webpack/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#ffffff",
      icons: [
        {
          src: path.resolve(__dirname, "../src/assets/images/ios-icon.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons", "ios"),
          ios: true,
        },
        {
          src: path.resolve(__dirname, "../src/assets/images/ios-icon.png"),
          size: 1024,
          destination: path.join("icons", "ios"),
          ios: "startup",
        },
        {
          src: path.resolve(__dirname, "../src/assets/images/android-icon.png"),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join("icons", "android"),
        },
      ],
      ios: true,
    }),
  ],
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: "single",
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 10,
      maxSize: Number.POSITIVE_INFINITY,
      minSize: 2000,
      cacheGroups: chunks,
    },
  },
  performance: {
    hints: false,
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
});

export default config;
