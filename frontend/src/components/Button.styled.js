import styled from 'styled-components';
import { colors, font } from '../styles/theme';

export const Button = styled.button`
  font-size: ${font.sizeP};
  background: ${colors.primary};
  border-radius: 0.2em;
  border: none;
  padding: 0.5em 3em;
  margin-bottom: 0.5em;
  cursor: pointer;
  color: white;
  font-family: ${font.p}
`;
