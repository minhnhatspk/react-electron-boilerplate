import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../browser/screens/App';
import store from '../browser/redux/store';

const Root = () => (
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)

export default Root;
