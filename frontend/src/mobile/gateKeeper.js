import React from 'react';
import { ORADOR_KEY } from './constants';
import Mobile from './mobile';
import Login from './login';

const localStorageOrador = {
    setItem: (orador) => {
        if (localStorage) {
            localStorage.setItem(ORADOR_KEY, orador);
        }
    },
    getItem: () => {
        if (localStorage) {
            return localStorage.getItem(ORADOR_KEY);
        }
        return null;
    }
}

class GateKeeper extends React.Component {
    state = {
        orador: null,
        cargando: true,
    }

    componentDidMount() {
        this.setPersistentState(localStorageOrador.getItem());

    }

    logIn(orador) {
        this.setPersistentState(orador);
    }

    logOut() {
        this.setPersistentState(null);
    }

    setPersistentState(orador) {
        localStorageOrador.setItem(orador);
        this.setState({ orador, cargando: false });
    }

    render() {
        if (this.state.cargando) {
            // TODO: Poner un spinner o algo más bonito
            return <h1>Bancaaa, estoy cargándome</h1>;
        }
        if (this.state.orador) {
            return (
                <>
                // TODO: Poner botoncito de log out
                    <h1>Log out</h1>
                    <Mobile orador={this.state.orador} />
                </>
            );
        }
        return <Login actualizarOrador={(orador) => this.logIn(orador)} />;

    }
}


export default GateKeeper;
