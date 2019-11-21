import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const InfoItemContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoImage = styled.div`
  border-radius: 200px 200px 200px 200px;
  border: 4px solid ${colors.viridian};
  background: ${colors.white};
  width:120px;
  height:120px;
  padding:2%;
  margin:2%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position:${(props) => props.position};
  background-size: ${(props) => props.size};
`;


export const Texto = styled.span`
font-size: 1rem ;
font-family: ${font.p};
color:white;
margin-top: 10%

`;
