import webpack from 'webpack';
import baseConfig from './webpack.base.config';

const config = {

  ...baseConfig,

  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],

  devtool: 'eval-sourcemap',

  plugins: baseConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]),

};

export default config;