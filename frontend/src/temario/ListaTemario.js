import React from 'react';
import { ListaTemasContainer } from './ListaTemario.styled';
import TemaItem from './TemaItem';


const ListaTemario = (props) => (
  <ListaTemasContainer>
    {props.temas.map((tema) => <TemaItem tema={tema}
      seleccionarTema={props.seleccionarTema}/>)}
  </ListaTemasContainer>
);

export default ListaTemario;
