import styled from 'styled-components';
import { colors } from '../styles/theme';

export const InfoItemContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-content: center;
`;

export const InfoImage = styled.img`
  border-radius: 200px 200px 200px 200px;
  border: 6px solid ${colors.viridian};
  background: ${colors.white};
  width:120px;
  height:120px;
  padding:2%;
  margin:2%
`;
