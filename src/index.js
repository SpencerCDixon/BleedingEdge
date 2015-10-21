import React from 'react';
import App from './App';
import About from './About';
import ReactDOM from 'react-dom';

// React Router
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';


ReactDOM.render(
  (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
      </Route>
    </Router>
  ),
document.getElementById('root'));
