import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  right: 0;
  width: 20%;
  background: ${colors.black30}
`;

export const SeleccionImagen = styled.img`
  background: ${colors.secondary};
  padding-top: 10%;
  padding-bottom: 5%;
  height: 5rem;
`;

export const SeleccionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitulosSidebar = styled.div`
  font-family: ${font.p};
  font-size: ${font.sizeP};
  color: ${colors.primary};
  text-align: center;
  border-bottom: 2rem ${colors.secondary};
`;

export const Titulo = styled.div`
  font-family: ${font.h1};
  font-size: 2rem;
  color: black;
`;
