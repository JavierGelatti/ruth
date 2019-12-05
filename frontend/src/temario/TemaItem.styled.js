import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const TemaItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 5%;
`;

export const TituloTema = styled.div`
  font-family: ${font.h1};
  font-size:  1.6rem;
  letter-spacing: 1px;
  color: ${colors.viridian};
`;

export const ImagenTemaContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  overflow: hidden;
  background: ${colors.white};
  padding: 0.2rem;
  box-sizing: border-box;
`;

export const ImagenTema = styled.img`
  src: ${(props) => props.src};
  width: 100%;
  height: 100%;
`;
