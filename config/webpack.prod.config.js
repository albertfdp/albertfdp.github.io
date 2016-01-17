import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.base.config';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import data from '../data';

const config = {

  ...baseConfig,

  plugins: baseConfig.plugins.concat([
    new StaticSiteGeneratorPlugin('app.js', data.routes, data),
  ])

};

export default config;