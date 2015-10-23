import React from 'react';
import App from './App';
import TodoContainer from './containers/TodoContainer';
import ReactDOM from 'react-dom';
import * as reducers from './reducers/index';

// React Router
import { Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Redux
import {
  ReduxRouter,
  reduxReactRouter,
  routerStateReducer,
} from 'redux-router';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { persistState } from 'redux-devtools';
import DevTools from './containers/DevTools';

const logger = createLogger();

// Combine all my personal reducers with the Redux Router reducer
const rootReducer = combineReducers(
  {router: routerStateReducer, ...reducers }
);

const store = compose(
  reduxReactRouter({ createHistory: createBrowserHistory }),
  applyMiddleware(thunkMiddleware, logger),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
)(createStore)(rootReducer);

const routes = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <Route path="todos" component={TodoContainer} />
    </Route>
  </ReduxRouter>
);

class Root extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            {routes}
            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
