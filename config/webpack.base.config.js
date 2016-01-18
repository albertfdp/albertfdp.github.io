import path from 'path';
import webpack from 'webpack';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import data from '../data';

const config = {

  entry: {
    'app': './app/index.js',
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/static/',
    // it **must** be compiled to UMD or CommonJS,
    // so it can be required in a node context
    libraryTarget: 'umd'
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [ path.resolve(__dirname, '..', 'app') ],
        test: /\.js$/,
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        loader: 'url-loader?limit=100000',
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?[a-z0-9=\.]+)?$/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production'
    })
  ]

};

export default config;