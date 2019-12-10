import styled from 'styled-components';
import { font, translucid } from '../styles/theme';

export const SidebarIzquierdo = styled.div`
  background: url('./fondo-pino.png');
  width: 22%;
  background: linear-gradient(${translucid.green}, ${translucid.green}),
              url('./fondo-pino.png');
`;

export const AnalyticsContainter = styled.div`  
    display: flex;
    flex: 1;
`;

export const WorkInProgressContainer = styled.div` 
    display: flex; 
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

export const Titulo = styled.h1`
  font-size: ${font.sizeH1} ;
  font-family: ${font.h1};
`;

export const ImagenContainer = styled.img`
    width: 40%;
`;
