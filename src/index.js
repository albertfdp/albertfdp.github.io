import React from 'react'
import { render } from 'react-dom'

import { App } from 'components'

import 'styles/global.css'

if (typeof document !== 'undefined') {
  render(
    <App />,
    document.getElementById('container')
  )
}

export default (locals, callback) => {
  const { renderToStaticMarkup } = require('react-dom/server')

  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const scripts = assets.filter(a => a.match(/\.js$/))
  const stylesheets = assets.filter(a => a.match(/\.css$/))

  callback(null,
    `<!doctype html>
     <html>
      <head>
        <meta charset="utf-8" />
        <title>Albert Fern&aacute;ndez</title>
        ${stylesheets.map(style => (`<link href="/dist/${style}" rel="stylesheet" />`))}
      </head>
      <body>
        <div id="container">
          ${renderToStaticMarkup(<App />)}
        </div>
        ${scripts.map(script => (`<script src="/dist/${script}"></script>`))}
      </body>
    </html>
    `
  )
}
