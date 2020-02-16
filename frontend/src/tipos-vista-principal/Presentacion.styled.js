import styled from 'styled-components';
import {colors, translucid} from '../styles/theme';

export const SidebarIzquierdo = styled.div`
  background: url('./fondo-pino.png');
  width: 22%;
  background: linear-gradient(${translucid.green}, ${translucid.green}),
              url('./fondo-pino.png');
`;

export const SlidesContainer = styled.div` 
    display: flex; 
    flex-direction: column;
    flex: 1;
    align-items: center;
    background: ${colors.background};
`;
