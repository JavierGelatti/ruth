import React from 'react';
import { ListaTemasContainer } from './ListaTemario.styled';
import TemaItem from './TemaItem';


class ListaTemario extends React.Component {
  render() {
    return (
            <ListaTemasContainer>
              {this.props.temas.map((tema, index) => <TemaItem tema = {tema}
              seleccionarTema = {this.props.seleccionarTema}
              index = {index}/>)}
            </ListaTemasContainer>
    );
  }
}

export default ListaTemario;
