import React from 'react';
import { ORADOR_KEY } from './constants';
import { Button } from '@material-ui/core';

class Login extends React.Component {

    login() {
        // TODO: En vez de Caro, debería haber un input
        this.props.actualizarOrador("Caro");
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Button onClick={() => this.login()}>Logueame</Button>
            </div>
        );
    }
}


export default Login;
