import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './components/App';

export default function render(locals, callback) {
  const html = renderToString(<App {...locals} />,);
  callback(null, `<!doctype html>${html}`);
}