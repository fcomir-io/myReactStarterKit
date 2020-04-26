const paths = require("./paths");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   */    
  mode: "production",
  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: paths.build,
    publicPath: "./",
    filename: "[name].[contentHash].bundle.js",
  },
  optimization: {
    minimizer: [
      /**
       * Optimize CSS Assets Webpack Plugin
       *
       * Optimize \ minimize the CSS found during Webpack build
       * https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
       */
      new OptimizeCssAssetsPlugin(),
      /**
       * TerserWebpackPlugin
       *
       * Uses Terser to minify the JS in your project
       * https://webpack.js.org/plugins/terser-webpack-plugin/
       */
      new TerserPlugin(),
    ],
  },
  plugins: [
    /**
     * MiniCssExtractPlugin
     *
     * creates a CSS file per JS file which requires CSS
     * https://webpack.js.org/plugins/mini-css-extract-plugin/
     */
    new MiniCssExtractPlugin({ 
      filename: 'styles/[name].[contenthash].css',
    }),
    /**
     * CleanWebpackPlugin
     *
     * cleaning up the /dist folder
     * https://webpack.js.org/guides/output-management/
     */
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          'css-loader', //2. Turns css into commonjs
          'sass-loader',  //1. Turns sass into css
        ],
      },
    ],
  },
});
