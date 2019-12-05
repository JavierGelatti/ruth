import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const TemarioContainer = styled.div(({ isActive }) => `
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.2s linear;
  position: fixed;
  left: ${isActive ? '0' : '-16.5em'};
`);

export const Temas = styled.div`
  min-height: 100vh;
  padding: 1em;
  width: 14.5em;  
  background: ${colors.downy};
  border-right-style: solid;
  border-width: 10px;
  border-color: ${colors.viridian};
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
  background: ${colors.viridian};
`;

export const Titulo = styled.div`
  font-family: ${font.h1};
  font-size: 2rem;
  color: white;
`;
