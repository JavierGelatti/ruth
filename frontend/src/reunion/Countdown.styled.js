import styled from 'styled-components';
import { colors, font } from '../styles/theme';

// eslint-disable-next-line import/prefer-default-export
export const CountdownContainer = styled.div`
  font-family: ${font.h1};
  font-size: ${font.sizeCountdown};
  color: ${(props) => (props.negative ? colors.darkRed : colors.black50)};
  padding: 0.7rem 0;
  text-align: center;
`;