import React from 'react';
import { ListaTemasContainer } from './ListaTemario.styled';
import TemaItem from './TemaItem';


class ListaTemario extends React.Component {
  render() {
    return (
            <ListaTemasContainer>
              {this.props.temas.map((tema, index) => <TemaItem tema = {tema} onClick = {() => this.props.seleccionarTema(index)}/>)}
            </ListaTemasContainer>
    );
  }
}

export default ListaTemario;
