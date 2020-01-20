import React from 'react';
import {
  DescripcionTemaContainer, Titulo, Descripcion, ListaTemasARepasar
} from './DescripcionTema.styled';

class DescripcionActionItems extends React.Component {
  render() {
    return (
            <DescripcionTemaContainer>
                <Titulo>{this.props.tema.titulo}</Titulo>
                <Descripcion>
                    <ListaTemasARepasar>
                        {this.props.tema.temasParaRepasar.map((temaReunionAnterior, index) => 
                        <li key={`tema-a-repasar-${index}`}>
                            <b> {temaReunionAnterior.tema.titulo} </b>
                            <p> {temaReunionAnterior.tema.descripcion} </p>
                            <ul>
                              {temaReunionAnterior.actionItems.map((actionItem,index) =>
                                <li key={`action-item-${index}`}>
                                    <p> {actionItem} </p>
                                </li>)} 
                            </ul>
                        </li>)}
                    </ListaTemasARepasar>
                </Descripcion>
            </DescripcionTemaContainer>
    );
  }
}

export default DescripcionActionItems;
