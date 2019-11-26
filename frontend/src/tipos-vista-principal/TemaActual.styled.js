import styled from 'styled-components';
import { colors } from '../styles/theme';

export const TemaActualContainer = styled.div`  
    display: flex;
    flex: 1;
`;


export const VistaDelMedioContainer = styled.div` 
    display: flex; 
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

export const Botonera = styled.div` 
    display: flex; 
    flex-direction: column;
    width: 100%;
`;

export const BotoneraNavegacionTemas = styled.div` 
    display: flex; 
    flex-direction: row;
    color: ${colors.black30};
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`;

export const BotoneraCerrarReunion = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    padding-top: 0.5rem;
`;
