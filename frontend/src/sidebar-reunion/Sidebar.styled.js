import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 18%;
  background: ${colors.black30};
  border-left: 0.1rem solid ${colors.black30};
`;

export const SeleccionImagen = styled.div`
  padding-top: 10%;
  padding-bottom: 5%;
  height: 5rem;
  text-align: center;
`;

export const SeleccionContainer = styled.div(({ isActive }) => `
  display: flex;
  flex-direction: column;
  color: ${isActive ? colors.primary : colors.black50};
  background: ${isActive ? colors.white : colors.background};
  border-bottom: ${isActive ? '0.3rem' : '0.1rem'} solid ${isActive ? colors.primary : colors.black30};
  &:hover {
    background: ${isActive ? colors.white : colors.black20};
  }
`);

export const ElementoContainer = styled.div(({ habilitar }) => `
  pointer-events:${habilitar ? 'all' : 'none'};
  opacity: ${habilitar ? '1' : '0.4'};
`);

export const TitulosSidebar = styled.div`
  font-family: ${font.p};
  @media (max-width: 1920px),(max-height: 1080px)  {
    font-size:  ${font.sizeP};
  }
  @media (min-width: 1920px), @media (min-height: 1080px)  {
    font-size: 1.75rem;
  }
  text-align: center;
  padding-bottom: 7%;
`;

export const Titulo = styled.div`
  font-family: ${font.h1};
  font-size: 2rem;
  color: black;
`;
