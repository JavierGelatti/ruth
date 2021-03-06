import styled from 'styled-components';
import { colors, font, sizeBreakpoint } from '../styles/theme';

export const TemaItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  justify-content: space-between;
  cursor: pointer;
`;

export const TituloTema = styled.div`
  font-family: ${font.p};
  font-size:  ${font.sizeP};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    font-size: 2rem;
  }
  letter-spacing: 1px;
  color: ${colors.viridian};
  max-width: calc(100% - 2.5rem)
  
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
  padding: 0.4rem;
  box-sizing: border-box;
  opacity: 0.8;
  margin-right: 2%;
`;

export const ImagenTema = styled.img`
  src: ${(props) => props.src};
  max-width: 100%;
  max-height: 100%;
  opacity: 0.8;
`;
