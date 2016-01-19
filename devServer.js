import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './config/webpack.dev.config';

global.__CLIENT__ = false;

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'app/index.html')));

app.listen(3000, 'localhost', (err) => {

  if (err) {
    console.error(err);
    return;
  }

  console.log('Listening at http://localhost:3000');

});