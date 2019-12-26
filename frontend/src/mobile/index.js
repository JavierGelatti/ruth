import React from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import Vista from './vista';

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.intentarRecuperarDatoDeLocalStorage("nombreDeOrador"),
      apellido: this.intentarRecuperarDatoDeLocalStorage("apellidoDeOrador"),
    };
    this.socket = new WebSocket('ws://localhost:8760/ws');
  }

  dispatch = (tipo) => {
    const evento = {
      nombreAutor: this.state.nombre,
      apellidoAutor: this.state.apellido,
      tipo,
    };
    console.log(evento);
    this.socket.send(JSON.stringify(evento));
  }

  handleOnSubmit = (event) => {
    const nombreElegido = this.state.nombre.trim();
    const apellidoElegido = this.state.nombre.trim();
    this.intentarAlmacenarDatoEnLocalStorage("nombre",nombreElegido);
    this.intentarAlmacenarDatoEnLocalStorage("apellido",apellidoElegido);
  }

  render() {
    return (
      <>
        <div className='login-form'>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 380 }}>
              <Form size='large' onSubmit={(event) => this.handleOnSubmit(event)}>
                  <Form.Input
                    value={this.state.nombre}
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Nombre'
                    onChange={(e) => this.setState({ nombre: e.target.value })}
                  />
                   <Form.Input
                    value={this.state.apellido}
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Apellido'
                    onChange={(e) => this.setState({ apellido: e.target.value })}
                  />
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <Vista dispatch={this.dispatch} />
      </>
    );
  }

  intentarRecuperarDatoDeLocalStorage(dato) {
    if (localStorage) {
      let datoAlmacenado = localStorage.getItem(dato);
      return datoAlmacenado || '';
    }
    return undefined;
  }

  intentarAlmacenarDatoEnLocalStorage(tipoDeDato,dato) {
    localStorage.setItem(tipoDeDato + "DeOrador", dato);
  }
}


export default Mobile;
