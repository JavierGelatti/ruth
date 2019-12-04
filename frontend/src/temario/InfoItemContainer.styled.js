import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const InfoItemContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoImageContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.25rem solid ${colors.viridian};
  height: 8rem;
  width: 8rem;
  overflow: hidden;
  background: ${colors.white};
  padding: 1.25rem;
  box-sizing: border-box;
`;

export const InfoImage = styled.img`
  src: ${(props) => props.src};
  max-width: 100%;
  max-height: 100%;
`;


export const Texto = styled.p`

font-size: 1rem ;
font-family: ${font.p};
color:white;
margin-top: 1em;
text-align: center;
max-width: 90%;

`;
