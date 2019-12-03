import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const ListaTemasContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction:column;
  align-items:center;
`;

export const ListaTemas = styled.ul`
`;

export const TituloTema = styled.div`
  font-family: ${font.p};
  font-size: 2rem;
  color: white;
`;
