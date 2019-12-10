import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const TemarioContainer = styled.div(({ isActive }) => `
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.2s linear;
  position: fixed;
  left: ${isActive ? '0' : '-17em'};
`);

export const Temas = styled.div`
  min-height: 100vh;
  padding: 1em;
  width: 15em;  
  background: ${colors.downy};
  border-right-style: solid;
  border-width: 10px;
  border-color: ${colors.viridian};
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
  @media (max-width: 1920px),(max-height: 1080px)  {
    font-size:  ${font.sizeH1};
  }
  @media (min-width: 1920px), @media (min-height: 1080px)  {
    font-size: 4rem;
  }
  letter-spacing: -3px;
  color: white;
`;

export const ExtensionLeyendaEmpresa = styled.div`
  font-family: ${font.p};
  @media (max-width: 1920px),(max-height: 1080px)  {
    font-size:  ${font.sizeP};
  }
  @media (min-width: 1920px), @media (min-height: 1080px)  {
    font-size: 1.75rem;
  }
  color: white;
  margin-bottom: 2em;
`;

export const Titulo = styled.div`
  font-family: ${font.h1};
  @media (max-width: 1920px),(max-height: 1080px)  {
    font-size:  ${font.sizeH2};
  }
  @media (min-width: 1920px), @media (min-height: 1080px)  {
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
