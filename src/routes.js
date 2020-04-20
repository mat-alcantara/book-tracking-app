import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}
