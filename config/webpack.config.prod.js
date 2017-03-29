const webpack = require('webpack');
const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssVariableMedia = require('postcss-variable-media');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const paths = require('./paths');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: paths.app
  },

  output: {
    filename: '[chunkhash].js',
    path: paths.output,
    publicPath: paths.public,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: paths.source
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: paths.source,
        query: { pretty: true }
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader', 'react-svg-loader'],
        include: paths.assets
      },
      {
        test: /\.css/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&localIdentName=[hash:base64:5]&minimize=true!postcss-loader'
        }),
        include: paths.source
      },
      {
        test: /\.(woff|png|jpg|gif)$/,
        loader: 'url-loader?limit=5000'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      __PRODUCTION__: true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        context: __dirname,
        postcss: function(webpack) {
          return [
            postcssImport({
              path: [paths.source, paths.nodeModules]
            }),
            postcssVariableMedia({
              breakpoints: {
                tablet: 768,
                desktop: 1024
              },
              consolidate: true
            }),
            postcssCssNext()
          ];
        }
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[chunkhash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { screw_ie8: true, warnings: false },
      mangle: { screw_ie8: true }
    }),
    new StaticSiteGeneratorPlugin('app', ['/'], {}, { window: {} }),
    new OfflinePlugin()
  ]
};
