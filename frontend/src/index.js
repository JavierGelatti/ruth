import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Login from './login/Login';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" render={({ location }) => <App location={location}/>}/>
    <Route path="/login" render={({ location }) => <Login location={location}/>}/>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
