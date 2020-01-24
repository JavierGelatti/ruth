import React from 'react';
import {createBrowserHistory} from 'history';
import {Redirect, Route, Router} from 'react-router-dom';
import App from './App';
import Backend from './api/backend';
import Oradores from './oradores';
import Mobile from './mobile';
import TestChart from './chart';

const history = createBrowserHistory();

export default class Authenticator extends React.Component {
  state = {
    usuario: null,
    cargando: true,
  };

  componentDidMount() {
    Backend.getPerfil()
      .then((usuario) => this.setState({usuario}))
      .catch((error) => error.response.status !== 403 && Promise.reject(error))
      .finally(() => this.setState({cargando: false}));
  }

  render() {
    const {cargando, usuario} = this.state;
    if (cargando) return <h1>Cargando</h1>;
    return (
      <Router history={history}>
        { !usuario?
          <Route component={ () => {global.window.location.href=`https://${process.env.REACT_APP_BACKOFFICE_URL}/auth/sign_in?redirect_url=${process.env.REACT_APP_BACKOFFICE_REDIRECT_URL}/api/auth/callback&app_id=ruth-app`}} /> :
          (<>
          <Route path="/" render={({location}) => <App location={location}/>}/>
          <Route path="/mobile" render={({location}) => <Mobile location={location}/>}/>
          <Route path="/oradores" render={({location}) => <Oradores location={location}/>}/>
          <Route path="/chart" render={({location}) => <TestChart location={location}/>}/>
          </>)}
      </Router>
    );
  }
}
