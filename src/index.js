import React from 'react';
import App from './App';
import About from './About';
import ReactDOM from 'react-dom';
import * as reducers from './reducers/index';

// React Router
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Redux
import {
  ReduxRouter,
  reduxReactRouter,
  routerStateReducer
} from 'redux-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({router: routerStateReducer }, reducers);

const store = compose(
  reduxReactRouter({ createHistory: createBrowserHistory }),
  applyMiddleware(logger),
)(createStore)(rootReducer);

const routes = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </ReduxRouter>
);

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {routes}
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
