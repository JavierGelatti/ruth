import styled from 'styled-components';
import { font } from '../styles/theme';


export const DescripcionTemaContainer = styled.div`
  display: flex;
  flex-grow: 0.6;
  flex-direction:column;
  align-items:center;
`;

export const Titulo = styled.h1`
  font-size: ${font.sizeH1} ;
  font-family: ${font.h1};
`;

export const Descripcion = styled.p`
  font-size: ${font.sizeP} ;
  font-family: ${font.p};
`;
