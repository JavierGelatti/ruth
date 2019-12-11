import styled from 'styled-components';
import { colors, font, sizeBreakpoint } from '../styles/theme';

export const TemarioContainer = styled.div(({ isActive }) => `
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.2s linear;
  position: fixed;
  left: ${isActive ? '0' : '-17em'};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    left: ${isActive ? '0' : '-25em'};
    width: 22%
  }
`);

export const Temas = styled.div`
  min-height: 100vh;
  padding: 1em;
  width: 15em;  
  background: ${colors.downy};
  border-right-style: solid;
  border-width: 10px;
  border-color: ${colors.viridian};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    width: 100%
  }
`;

export const Arrow = styled.img`
  font-size: 1.5rem;
  padding: 0.5em;
  padding-right: 0.8em;
  line-height: 2em;
  width: 1.2em;
  height: 1.5em;
  border-bottom-right-radius: 4em;
  border-top-right-radius: 4em;
  background: ${colors.viridian};
  overflow: visible;
  margin-top: 0.5em;
  background-color:${colors.viridian};
  cursor: pointer;
`;

export const LeyendaEmpresa = styled.div`
  font-family: ${font.p};
  font-size:  ${font.sizeH1};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    font-size: 4rem;
  }
  letter-spacing: -3px;
  color: white;
`;

export const ExtensionLeyendaEmpresa = styled.div`
  font-family: ${font.p};
  font-size:  ${font.sizeP};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    font-size: 1.75rem;
  }
  color: white;
  margin-bottom: 2em;
`;

export const Titulo = styled.div`
  font-family: ${font.h1};
  font-size:  ${font.sizeH2};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight}) {
    font-size: 3rem;
  }
  letter-spacing: 1px;
  color: white;
`;

export const ContenidoTemario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
