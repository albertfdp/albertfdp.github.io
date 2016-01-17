import path from 'path';
import baseConfig from './webpack.base.config';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import data from '../data';

const config = {
  ...baseConfig
};

export default config;