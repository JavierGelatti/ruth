import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {Route} from "react-router-dom";

import App from './App';
import reunion from './reunion/Reunion.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();
const store = createStore(
  combineReducers({reunion, router: connectRouter(history)}),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    )));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" render={({location}) => <App location={location}/>}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
