import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.base.config';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import data from '../data';

const config = {

  ...baseConfig,

  module: {
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader'
        )
      }
    ])
  },

  plugins: baseConfig.plugins.concat([
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('app.js', data.routes, data),
  ])

};

export default config;