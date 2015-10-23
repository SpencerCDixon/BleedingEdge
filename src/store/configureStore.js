import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from '../reducers/index';


import createBrowserHistory from 'history/lib/createBrowserHistory';

const logger = createLogger();

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware, logger),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

