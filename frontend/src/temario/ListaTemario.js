import React from 'react';
import {
  ListaTemasContainer, ListaTemas,
} from './ListaTemario.styled';


class ListaTemario extends React.Component {
  render() {
    return (
            <ListaTemasContainer>
                <ListaTemas>
                    {this.props.temas.map((tema, index) => <li key={`propuesta-${index}`}>
                        {tema.titulo}
                    </li>)}
                </ListaTemas>
            </ListaTemasContainer>
    );
  }
}

export default ListaTemario;
