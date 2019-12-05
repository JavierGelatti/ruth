import styled from 'styled-components';
import { font } from '../styles/theme';

export const ListaTemasContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
`;

export const TituloTema = styled.li`
  font-family: ${font.p};
  font-size: 2rem;
  color: white;
`;
