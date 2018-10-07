import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/HomeContainer';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default App;
