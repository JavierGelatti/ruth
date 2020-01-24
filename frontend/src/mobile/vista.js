import React from 'react';
import { Button } from '@material-ui/core';

class Vista extends React.Component {
  state = {
    orador: '',
  }

  render() {
    return (
            <div>
                <h1>Mobile</h1>
                <Button onClick={() => this.props.dispatch({ tipo: 'Quiero Hablar' })}>Quiero Hablar</Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Quiero Desencolarme' })}>Quiero Desencolarme</Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Quiero Dejar de Hablar' })}>Quiero Dejar de Hablar</Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Reiniciar reacciones' })}>Reiniciar reacciones</Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Reaccionar', reaccion: '👍' })}>👍</Button>
                <Button onClick={() => this.props.dispatch({ tipo: 'Reaccionar', reaccion: '👎' })}>👎</Button>
            </div>
    );
  }
}


export default Vista;
