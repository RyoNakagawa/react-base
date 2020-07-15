import React from 'react';
import { Route, Switch } from 'react-router';

import Top from './containers/Top';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
    </Switch>
  )
}

export default App;
