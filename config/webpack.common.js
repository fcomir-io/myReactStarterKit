const paths = require('./paths')
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: {
    main: paths.src + '/index.js',
    //vendor: paths.src + '/vendor.js'
  },

  plugins: [
    /**
     * HtmlWebpackPlugin
     *
     * Easily create HTML files to serve your bundles.
     * https://webpack.js.org/plugins/html-webpack-plugin/
     */    
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      favicon: paths.static + '/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  module: {
    rules: [
     /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

      /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
      {
        test: /\.scss|css$/,
        use: [
          //3. Inject styles into DOM
          'style-loader', 
          //2. Turns css into commonjs
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          //1. Turns sass into css
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      },
      
      /**
       * Images
       *
       * Copy image files to build folder.
       */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },

      /**
       * Fonts
       *
       * Inline font files.
       */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },
    ],
  }
};