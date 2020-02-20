import React from 'react';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import Vista from './vista';

class Mobile extends React.Component {
  dispatch = (data) => {
    if (this.props.tema) {
      const evento = {
        nombre: this.props.usuario.nombre,
        email: this.props.usuario.email,
        fecha: Date.now(),
        idTema: this.props.tema,
        data,
      };
      this.props.dispatch(evento);
    }
  };

  render() {
    return (
      <>
        <TextField value={this.props.usuario.nombre} onChange={this.handleNameChange}/>
        <div><br></br> Tema actual: {this.props.tema}</div>
        <Vista dispatch={this.dispatch}/>
      </>
    );
  }
}


const mapDispatchToProps = (state) => {
  const tema = state.temas.find((t) => t.fin === null && t.inicio !== null);
  return {
    tema: tema && tema.id,
  };
};

export default connect(mapDispatchToProps)(Mobile);
