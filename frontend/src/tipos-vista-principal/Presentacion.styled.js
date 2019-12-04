import styled from 'styled-components';
import { colors, font } from '../styles/theme';


export const SidebarIzquierdo = styled.div`
  width: 22%;
  background: ${colors.downy};
`;

export const PresentacionContainter = styled.div`  
    display: flex;
    flex: 1;
`;

export const SlidesContainer = styled.div` 
    display: flex; 
    flex-direction: column;
    flex: 1;
    align-items: center;
    background: ${colors.background};
`;

export const Titulo = styled.h1`
  font-size: ${font.sizeH1} ;
  font-family: ${font.h1};
`;
