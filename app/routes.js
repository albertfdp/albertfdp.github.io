import React from 'react';
import { Router, Route } from 'react-router';

import Index from './components/Index';

const routes = (
  <Router>
    <Route path='/' component={Index}>
    </Route>
  </Router>
);

export default routes;