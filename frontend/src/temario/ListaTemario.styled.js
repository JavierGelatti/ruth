import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const ListaTemasContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction:column;
  align-items:center;
`;

export const ListaTemas = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TituloTema = styled.li`
  font-family: ${font.p};
  font-size: 2rem;
  color: white;
`;
