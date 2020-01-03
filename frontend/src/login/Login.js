import React from 'react';
import { Button } from '../components/Button.styled';

// TODO: redict_url deberia ser el public URL de var de ambiente
class Login extends React.Component {
  render() {
    return (
      <>
        <a href='https://backoffice-10pines-stg.herokuapp.com/auth/sign_in?redirect_url=http://localhost:8761/api/auth/callback&app_id=ruth-app'>
        <Button>Ingresar con BK!</Button>
        </a>
      </>
    );
  }
}

export default Login;
