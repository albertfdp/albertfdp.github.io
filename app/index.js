import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { Router, RoutingContext, match } from 'react-router';
import { createHistory, createMemoryHistory } from 'history';
import Helmet from 'react-helmet';

import App from './components/App';
import routes from './routes';

if (typeof document !== 'undefined') {
  let history = createHistory();
  ReactDOM.render(
    <Router history={history} routes={routes} />,
    document.getElementById('container')
  );
}

export default function render(locals, callback) {
  let history = createMemoryHistory(locals.path);
  let location = history.createLocation(locals.path);

  match({ routes, location }, (err, redirectLocation, renderProps) => {

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
        <body>
          <div id="container">${renderedBody}</div>
        </body>
      </html>
    `;

    callback(null, html);
  });
}