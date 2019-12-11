import styled from 'styled-components';
import { sizeBreakpoint } from '../styles/theme';

export const ListaTemasContainer = styled.ul`
  display: flex;
  flex-direction:column;
  padding:0;
  overflow-y: auto;
  height:30em;
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    height:55em;
  }
`;
