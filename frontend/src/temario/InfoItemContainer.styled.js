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
  @media (max-width: 1920px),(max-height: 1080px)  {
    height: 9rem;
    width: 9rem;
  }
  @media (min-width: 1920px), @media (min-height: 1080px)  {
    height: 15rem;
    width: 15rem;
  }
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
@media (max-width: 1920px),(max-height: 1080px)  {
  font-size: 1rem;
}
@media (min-width: 1920px), @media (min-height: 1080px)  {
  font-size: 2rem;
}
font-family: ${font.p};
color:white;
margin-top: 1em;
text-align: center;
max-width: 90%;

`;
