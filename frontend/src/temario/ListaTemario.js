import React from 'react';
import {
  ListaTemasContainer, ListaTemas, TituloTema,
} from './ListaTemario.styled';


class ListaTemario extends React.Component {
  render() {
    return (
            <ListaTemasContainer>
                <ListaTemas>
                    {this.props.temas.map((tema, index) => <li key={`propuesta-${index}`}>
                        <TituloTema>
                            {tema.titulo}
                        </TituloTema>
                    </li>)}
                </ListaTemas>
            </ListaTemasContainer>
    );
  }
}

export default ListaTemario;
