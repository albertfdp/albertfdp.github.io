import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, RoutingContext, match } from 'react-router';

import App from './components/App';
import routes from './routes';

export default function render(locals, callback) {
  match({ routes, location: locals.path}, (err, redirectLocation, renderProps) => {
    const html = renderToString(
      <App {...locals}>
        <RoutingContext {...renderProps} />
      </App>
    );
    callback(null, `<!doctype html>${html}`);
  });
}