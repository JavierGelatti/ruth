import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const TemaItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TituloTema = styled.ul`
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
  height: 3rem;
  width: 3rem;
  overflow: hidden;
  background: ${colors.white};
  padding: 0.2rem;
  box-sizing: border-box;
`;

export const ImagenTema = styled.img`
  src: ${(props) => props.src};
  max-width: 90%;
  max-height: 90%;
`;
