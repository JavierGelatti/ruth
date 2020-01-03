import React from 'react';
import { Button } from '@material-ui/core';

class Vista extends React.Component {
  render() {
    return (
            <div>
                <h1>Mobile</h1>
                <Button onClick={() => this.props.dispatch({tipo:'Quiero Hablar'})}>Quiero hablar</Button>
                <Button onClick={() => this.props.dispatch({tipo:'No Quiero Hablar'})}>No quiero hablar</Button>
                <Button onClick={() => this.props.dispatch({tipo:'Reiniciar reacciones'})}>Reiniciar reacciones</Button>
                <Button onClick={() => this.props.dispatch({tipo:'Reaccionar', reaccion: '👍'})}>👍</Button>
                <Button onClick={() => this.props.dispatch({tipo:'Reaccionar', reaccion: '👎'})}>👎</Button>
            </div>
    );
  }
}


export default Vista;
