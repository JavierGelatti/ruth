import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 0;
  width: 25%;
  background: ${colors.black30}
`;

export const TemaActual = styled.img`
  min-height: 100vh;
  padding: 1em;
  width: 12em;  
  background: ${colors.secondary};
`;

export const Arrow = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  padding: 0.5em;
  color: white;
  width: 1em;
  line-height: 2em;
  height: 2em;
  border-bottom-right-radius: 4em;
  border-top-right-radius: 4em;
  background: ${colors.secondary};
`;

export const Titulo = styled.div`
  font-family: ${font.h1};
  font-size: 2rem;
  color: black;
`;
