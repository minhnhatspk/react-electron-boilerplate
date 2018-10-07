import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleWare = [];
middleWare.push(thunk);

if(process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleWare));

