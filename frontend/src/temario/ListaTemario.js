import React from 'react';
import { ListaTemasContainer } from './ListaTemario.styled';
import TemaItem from './TemaItem';


const ListaTemario = (props) => (
  <ListaTemasContainer>
    {props.temas.map((tema, index) => <TemaItem tema={tema}
      seleccionarTema={props.seleccionarTema}
      index={index} />)}
  </ListaTemasContainer>
);

export default ListaTemario;
