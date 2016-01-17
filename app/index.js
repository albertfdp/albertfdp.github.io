import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, RoutingContext, match } from 'react-router';
import Helmet from 'react-helmet';

import App from './components/App';
import routes from './routes';

export default function render(locals, callback) {
  match({ routes, location: locals.path}, (err, redirectLocation, renderProps) => {
    const renderedBody = renderToString(
      <App title={locals.title}>
        <RoutingContext {...renderProps} />
      </App>
    );
    const head = Helmet.rewind();

    const html = `
      <!doctype html>
      <html>
        <head>
          ${head.title}
          ${head.meta}
          ${head.link}
        </head>
        <body>${renderedBody}</body>
      </html>
    `;

    callback(null, html);
  });
}