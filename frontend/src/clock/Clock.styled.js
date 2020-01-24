import styled from 'styled-components';
import { font, colors } from '../styles/theme';

export const ClockContainer = styled.div(({ isInteractive }) => `
  color: ${isInteractive ? 'silver' : 'black'};
  font-family: ${font.h1};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`);
