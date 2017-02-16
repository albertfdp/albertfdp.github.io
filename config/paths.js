const path = require('path')

module.exports = {
  app: path.resolve(__dirname, '..', 'src', 'index.js'),
  assets: path.join(__dirname, '..', 'src', 'assets'),
  components: path.join(__dirname, '..', 'src', 'components'),
  nodeModules: path.join(__dirname, '..', 'node_modules'),
  output: path.join(__dirname, '..', 'dist'),
  public: '/',
  source: path.join(__dirname, '..', 'src'),
  styles: path.join(__dirname, '..', 'src', 'styles'),
  template: path.resolve(__dirname, './index.html.ejs')
}
