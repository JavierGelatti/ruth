import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router-dom';

import App from './App';
import Login from './login/Login';
import Backend from './api/backend';

const history = createBrowserHistory();

export default class Authenticator extends React.Component {
  state = {
    usuario: null,
    cargando: true,
  }

  componentDidMount() {
    Backend.getPerfil()
      .then((usuario) => this.setState({ usuario }))
      .catch((error) => error.response.status !== 403 && Promise.reject(error))
      .finally(() => this.setState({ cargando: false }));
  }

  render() {
    const { cargando, usuario } = this.state;

    if (cargando) return <h1>Cargando</h1>;
    if (!usuario) return <Login />;
    return (
      <Router history={history}>
        <Route path="/" render={({ location }) => <App location={location}/>}/>
      </Router>
    );
  }
}
