import path from 'path';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import data from '../data';

const config = {

  entry: {
    'app': './app/index.js',
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    // it **must** be compiled to UMD or CommonJS,
    // so it can be required in a node context
    libraryTarget: 'umd'
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
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('app.js', data.routes, data)
  ]

};

export default config;