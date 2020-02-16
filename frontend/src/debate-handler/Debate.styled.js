import styled from 'styled-components';
import {font} from '../styles/theme';

export const SubDebateContainer = styled.div`  
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    overflow: hidden;
`;

export const TitleContainer = styled.div`  
    display: flex;
    flex-direction: column;
    height: 10%;
    align-items: center;
    justify-content: center;
`;

export const GraphsContainer = styled.div`  
    display: flex;
    flex-direction: row;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
    height: 45%;
    align-items: center;
    justify-content: space-between;
`;

export const ParticipantsContainer = styled.div`  
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 45%
    align-items: center;
    justify-content: center;
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
