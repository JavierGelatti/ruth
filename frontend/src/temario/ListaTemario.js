import React from 'react';
import {
  ListaTemasContainer, ListaTemas, TituloTema,
} from './ListaTemario.styled';


class ListaTemario extends React.Component {
  render() {
    return (
            <ListaTemasContainer>
                <ListaTemas>
                    {this.props.temas.map((tema, index) => <TituloTema onClick = {() => this.props.seleccionarTema(index)}>
                      {tema.titulo}
                    </TituloTema>)}
                </ListaTemas>
            </ListaTemasContainer>
    );
  }
}

export default ListaTemario;
