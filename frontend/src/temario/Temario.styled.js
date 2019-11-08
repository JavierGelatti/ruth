import styled from 'styled-components';
import {colors, font} from "../styles/theme";

export const TemarioContainer = styled.div(({isActive}) =>`
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.2s linear;
  position: relative;
  left: ${isActive? `0` : `-14em`};
`);

export const Temas = styled.div`
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

export const TituloDeTema = styled.div(({isSelected}) =>`
  padding: 0.5em;
  font-family: ${font.family};
  font-size: 1.3rem;
  color: white;
  opacity: ${isSelected? 1 : 0.2};
  cursor: pointer;
  &:hover{
    ${!isSelected && `opacity: 0.4;`}
  }
`);

export const Titulo = styled.div`
  font-family: ${font.title};
  font-size: 2rem;
  color: white;
`;
