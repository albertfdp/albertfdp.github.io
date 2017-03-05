import React from 'react'
import { render } from 'react-dom'

import { App } from 'components'

import 'styles/global.css'

if (typeof document !== 'undefined') {
  __PRODUCTION__ && require('offline-plugin/runtime').install()

  render(
    <App />,
    document.getElementById('container')
  )
}

export default (locals, callback) => {
  const { renderToStaticMarkup } = require('react-dom/server')
  const htmlTemplate = require('./templates/index.pug')

  const assets = Object.keys(locals.webpackStats.compilation.assets)

  callback(null, htmlTemplate({
    scripts: assets.filter(a => a.match(/\.js$/)),
    stylesheets: assets.filter(a => a.match(/\.css$/)),
    content: renderToStaticMarkup(<App />)
  }))
}
